import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the incoming data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Save the contact form data
      const result = await storage.saveContactForm(validatedData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: result.id
      });

    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message || "Invalid form data" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
