import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: "page",
      source: "posts/**/*.md",
      schema: z.object({
        // Core metadata
        title: z.string(),
        description: z.string(),
        publishedAt: z.string().datetime(),
        updatedAt: z.string().datetime().optional(),

        // Author information (references team member ID)
        authorId: z.string(),

        // Content categorization
        category: z.string(), // References categories.json
        tags: z.array(z.string()),

        // Visual elements
        coverImage: z.string().optional(),

        // SEO & visibility
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        seo: z
          .object({
            title: z.string().optional(),
            description: z.string().optional(),
            ogImage: z.string().optional(),
          })
          .optional(),

        // Engagement
        readingTime: z.number().optional(), // minutes
      }),
    }),
    articles: defineCollection({
      type: "page",
      source: "articles/**/*.md",
      schema: z.object({
        // Core metadata
        title: z.string(),
        description: z.string(),
        publishedAt: z.string().datetime(),
        updatedAt: z.string().datetime().optional(),

        // Author information (references team member ID)
        authorId: z.string(),

        // Content categorization
        category: z.string(), // References categories.json
        tags: z.array(z.string()),

        // Visual elements
        coverImage: z.string().optional(),

        // SEO & visibility
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        seo: z
          .object({
            title: z.string().optional(),
            description: z.string().optional(),
            ogImage: z.string().optional(),
          })
          .optional(),

        // Engagement
        readingTime: z.number().optional(), // minutes
      }),
    }),
    team: defineCollection({
      type: "data",
      source: "team/**/*.json",
      schema: z.object({
        id: z.string(),
        name: z.string(),
        role: z.string(),
        image: z.string(),
        bio: z.string(),
      }),
    }),
    categories: defineCollection({
      type: "data",
      source: "categories/**/*.{yaml,yml,json}",
      schema: z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
      }),
    }),
  },
});
