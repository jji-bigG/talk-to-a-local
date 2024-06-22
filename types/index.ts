import { z } from "zod";
import type { DefaultSession } from "next-auth";

// Existing message schemas
export const JsonMessageSchema = z.object({
  id: z.string(),
  answer: z.string().optional(),
  question: z.string(),
});

export const JsonMessagesArraySchema = z.array(JsonMessageSchema);

export type JSONMessage = z.infer<typeof JsonMessageSchema>;

// New authentication-related types
export interface IUser extends DefaultSession["user"] {
  id: string;
  role?: string;
}

export type AuthUser = IUser & {
  accessToken?: string;
};

// Extending the built-in Session type
declare module "next-auth" {
  interface Session {
    user: AuthUser;
  }
}

// Zod schema for user
export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string().email().nullable(),
  image: z.string().url().nullable(),
  role: z.string().optional(),
});

export type User = z.infer<typeof UserSchema>;

// You can add more authentication-related schemas as needed
export const AuthResponseSchema = z.object({
  user: UserSchema,
  accessToken: z.string(),
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;