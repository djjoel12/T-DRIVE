import { eq } from "drizzle-orm";
import { db } from "./db";
import { users, companies } from "../shared/schema";

export class DatabaseStorage {
  async getUser(id: string) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: any) {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: { ...userData, updatedAt: new Date() },
      })
      .returning();
    return user;
  }

  async getCompanyByUserId(userId: string) {
    const [company] = await db.select().from(companies).where(eq(companies.userId, userId));
    return company;
  }

  async createCompany(companyData: any) {
    const [company] = await db.insert(companies).values({
      ...companyData,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();
    return company;
  }

  async updateCompany(userId: string, companyData: any) {
    const [company] = await db.update(companies).set({
      ...companyData,
      updatedAt: new Date(),
    }).where(eq(companies.userId, userId)).returning();
    return company;
  }
}

export const storage = new DatabaseStorage();
