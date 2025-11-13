// Storage interface and DatabaseStorage implementation
import {
  users,
  companies,
  type User,
  type UpsertUser,
  type Company,
  type InsertCompany,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations - MANDATORY for Replit Auth
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Company operations
  getCompanyByUserId(userId: string): Promise<Company | undefined>;
  createCompany(company: InsertCompany & { userId: string }): Promise<Company>;
  updateCompany(userId: string, company: InsertCompany): Promise<Company>;
}

export class DatabaseStorage implements IStorage {
  // User operations - MANDATORY for Replit Auth
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Company operations
  async getCompanyByUserId(userId: string): Promise<Company | undefined> {
    const [company] = await db
      .select()
      .from(companies)
      .where(eq(companies.userId, userId));
    return company;
  }

  async createCompany(companyData: InsertCompany & { userId: string }): Promise<Company> {
    const [company] = await db
      .insert(companies)
      .values({
        ...companyData,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return company;
  }

  async updateCompany(userId: string, companyData: InsertCompany): Promise<Company> {
    const [company] = await db
      .update(companies)
      .set({
        ...companyData,
        updatedAt: new Date(),
      })
      .where(eq(companies.userId, userId))
      .returning();
    return company;
  }
}

export const storage = new DatabaseStorage();
