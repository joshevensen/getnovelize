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
