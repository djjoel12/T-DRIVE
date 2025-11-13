// API routes with Replit Auth and company management
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertCompanySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware - From javascript_log_in_with_replit blueprint
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Company profile routes
  app.get('/api/companies/profile', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      let company = await storage.getCompanyByUserId(userId);
      
      // If no company exists, return null and let frontend handle creation
      if (!company) {
        return res.json(null);
      }
      
      res.json(company);
    } catch (error) {
      console.error("Error fetching company profile:", error);
      res.status(500).json({ message: "Failed to fetch company profile" });
    }
  });

  app.patch('/api/companies/profile', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      // Validate request body
      const validatedData = insertCompanySchema.parse(req.body);
      
      // Check if company exists
      const existingCompany = await storage.getCompanyByUserId(userId);
      
      let company;
      if (!existingCompany) {
        // Create new company
        company = await storage.createCompany({
          userId,
          ...validatedData,
        });
      } else {
        // Update existing company
        company = await storage.updateCompany(userId, validatedData);
      }
      
      res.json(company);
    } catch (error: any) {
      console.error("Error updating company profile:", error);
      
      // Handle validation errors
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          message: "Invalid data", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ message: "Failed to update company profile" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
