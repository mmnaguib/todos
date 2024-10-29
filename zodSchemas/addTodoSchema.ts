import { z } from "zod";

export const TodoFormSchema = z.object({
  title: z
    .string()
    .min(10, { message: "لا يقل العنوان عن 10 حروف" })
    .max(50, { message: "لا يزيد العنوان عن 50 حروف" }),
  body: z
    .string()
    .max(50, { message: "لا يزيد العنوان عن 100 حروف" })
    .optional(),
  isCompleted: z.boolean(),
});

export type TodoFormValues = z.infer<typeof TodoFormSchema>;
