import { parseDate } from "@/helpers/parseDate";
import { z } from "zod";

export const formSchema = z.object({
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

export type FormData = z.infer<typeof formSchema>;
