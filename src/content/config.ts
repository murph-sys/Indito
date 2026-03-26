import { defineCollection, z } from 'astro:content';

const recetas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    servings: z.number().optional(),
    difficulty: z.string().optional(),
    isMamaRecipe: z.boolean().default(true),
    tags: z.array(z.string()).optional(),
    ingredients: z.array(z.object({
      section: z.string(),
      items: z.array(z.string()),
    })),
  }),
});

export const collections = { recetas };
