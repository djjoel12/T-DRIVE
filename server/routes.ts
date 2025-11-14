import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCompanySchema } from "@shared/schema";

// Middleware temporaire pour simuler auth
const isAuthenticated = (_req: any, _res: any, next: any) => next();

export async function registerRoutes(app: Express): Promise<Server> {
  // Company profile routes
  app.get('/api/companies/profile', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      let company = await storage.getCompanyByUserId(userId);
      if (!company) return res.json(null);
      res.json(company);
    } catch (error) {
      console.error("Error fetching company profile:", error);
      res.status(500).json({ message: "Failed to fetch company profile" });
    }
  });

  app.patch('/api/companies/profile', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const validatedData = insertCompanySchema.parse(req.body);
      const existingCompany = await storage.getCompanyByUserId(userId);
      let company;
      if (!existingCompany) {
        company = await storage.createCompany({ userId, ...validatedData });
      } else {
        company = await storage.updateCompany(userId, validatedData);
      }
      res.json(company);
    } catch (error: any) {
      console.error("Error updating company profile:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: "Invalid data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update company profile" });
    }
  });

  // Server HTTP
  const httpServer = createServer(app);
  return httpServer;
}
