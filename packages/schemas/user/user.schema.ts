import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[^\d]+$/, "Name must not contain numbers"),
  surname: z
    .string()
    .min(1, "Surname is required")
    .regex(/^[^\d]+$/, "Surname must not contain numbers"),
  country: z.string().min(1, "Select a country"),
  birthday: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Use format MM/DD/YYYY")
    .refine((val) => !!parseDate(val), "Invalid date")
    .refine((val) => {
      const parsed = parseDate(val);
      return parsed ? parsed <= new Date() : false;
    }, "Date cannot be in the future"),
});

export const userUpdateSchema = userSchema.partial();

export type UserSchema = z.infer<typeof userSchema>;
export type UserUpdateSchema = z.infer<typeof userUpdateSchema>;

export function parseDate(val: string): Date | null {
  const [month, day, year] = val.split("/").map(Number);
  const parsed = new Date(year, month - 1, day);
  return isNaN(parsed.getTime()) ? null : parsed;
}
