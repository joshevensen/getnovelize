import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: "page",
      source: "docs/**/*.md",
    }),
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

        // Excerpt support (for <!--more--> divider)
        excerpt: z
          .object({
            type: z.string(),
            children: z.any(),
          })
          .optional(),

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
    company: defineCollection({
      type: "data",
      source: "company.json",
      schema: z.object({
        name: z.string(),
        description: z.string(),
        yearStart: z.number(),
        contact: z.object({
          email: z.string(),
        }),
      }),
    }),
    team: defineCollection({
      type: "data",
      source: "team.json",
      schema: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          role: z.string(),
          image: z.string(),
          bio: z.string(),
          xUrl: z.string().optional(),
          linkedinUrl: z.string().optional(),
        })
      ),
    }),
    categories: defineCollection({
      type: "data",
      source: "categories.json",
      schema: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          description: z.string(),
        })
      ),
    }),
    menus: defineCollection({
      type: "data",
      source: "menus.json",
      schema: z.object({
        header: z.array(
          z.object({
            name: z.string(),
            href: z.string(),
          })
        ),
        footer: z.array(
          z.object({
            name: z.string(),
            href: z.string(),
          })
        ),
        social: z.array(
          z.object({
            name: z.string(),
            href: z.string(),
            icon: z.string(),
          })
        ),
        copyright: z.array(
          z.object({
            name: z.string(),
            href: z.string(),
          })
        ),
      }),
    }),
    seo: defineCollection({
      type: "data",
      source: "seo.json",
      schema: z.object({
        about: z.object({
          title: z.string(),
          description: z.string(),
        }),
        contact: z.object({
          title: z.string(),
          description: z.string(),
        }),
        features: z.object({
          title: z.string(),
          description: z.string(),
        }),
        home: z.object({
          title: z.string(),
          description: z.string(),
        }),
        pricing: z.object({
          title: z.string(),
          description: z.string(),
        }),
        privacy: z.object({
          title: z.string(),
          description: z.string(),
        }),
        terms: z.object({
          title: z.string(),
          description: z.string(),
        }),
        blog: z.object({
          title: z.string(),
          description: z.string(),
        }),
      }),
    }),
    pages: defineCollection({
      type: "page",
      source: "pages/**/*.json",
    }),
  },
});
