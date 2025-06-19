import {z} from "zod"

const categorySchema = z.object({
    title: z.string().min(1,"title is required"),
    description: z.string().optional(),
    slug: z.string().min(1,"Slug is required"),
    deleteAt: z.date().nullable().optional()
});
export default categorySchema