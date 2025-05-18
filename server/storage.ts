import { users, contactForms, type User, type InsertUser, type ContactForm, type InsertContactForm } from "@shared/schema";
import { db } from "./database";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactForm(form: InsertContactForm): Promise<ContactForm>;
  getContactForms(): Promise<ContactForm[]>;
  getContactFormById(id: number): Promise<ContactForm | undefined>;
}

export class PostgresStorage implements IStorage {
  private contactForms: Map<number, ContactForm>;
  private users: Map<number, User>;
  private currentUserId: number;
  private currentContactFormId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.currentUserId = 1;
    this.currentContactFormId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactForm(form: InsertContactForm): Promise<ContactForm> {
    const id = this.currentContactFormId++;
    const now = new Date();
    const contactForm: ContactForm = { 
      ...form, 
      id, 
      createdAt: now 
    };
    this.contactForms.set(id, contactForm);
    return contactForm;
  }

  async getContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values()).sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }

  async getContactFormById(id: number): Promise<ContactForm | undefined> {
    return this.contactForms.get(id);
  }
}

export const storage = new PostgresStorage();
