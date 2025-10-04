import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    seo: group({
      title: "SEO Configuration",
      description: "Configure SEO titles and descriptions for all pages.",
      icon: "i-ph-seo-tag",
      fields: {
        about: group({
          title: "About Page",
          description: "SEO settings for the about page.",
          icon: "i-ph-info",
          fields: {
            title: field({
              type: "string",
              title: "Page Title",
              description:
                "The title that appears in browser tabs and search results.",
              icon: "i-ph-text-aa",
              default: "About Novelize - Our Story",
            }),
            description: field({
              type: "string",
              title: "Meta Description",
              description: "The description that appears in search results.",
              icon: "i-ph-text-align-left",
              default:
                "Learn about Novelize, the writing space built for authors, fanfic writers, and storytellers. Over 9 years helping writers finish their novels with focus and organization.",
            }),
          },
        }),
        contact: group({
          title: "Contact Page",
          description: "SEO settings for the contact page.",
          icon: "i-ph-envelope",
          fields: {
            title: field({
              type: "string",
              title: "Page Title",
              description:
                "The title that appears in browser tabs and search results.",
              icon: "i-ph-text-aa",
              default: "Contact Novelize - Talk to the Team",
            }),
            description: field({
              type: "string",
              title: "Meta Description",
              description: "The description that appears in search results.",
              icon: "i-ph-text-align-left",
              default:
                "Have a question or need help? Contact the Novelize team. We respond personally within 24 hours.",
            }),
          },
        }),
        features: group({
          title: "Features Page",
          description: "SEO settings for the features page.",
          icon: "i-ph-gear",
          fields: {
            title: field({
              type: "string",
              title: "Page Title",
              description:
                "The title that appears in browser tabs and search results.",
              icon: "i-ph-text-aa",
              default: "Features - Writing Tools for Authors | Novelize",
            }),
            description: field({
              type: "string",
              title: "Meta Description",
              description: "The description that appears in search results.",
              icon: "i-ph-text-align-left",
              default:
                "Discover Novelize's features: autosave, cloud backups, scene organization, notebook for worldbuilding, and distraction-free writing mode. Built for the way you write.",
            }),
          },
        }),
        home: group({
          title: "Home Page",
          description: "SEO settings for the home page.",
          icon: "i-ph-house",
          fields: {
            title: field({
              type: "string",
              title: "Page Title",
              description:
                "The title that appears in browser tabs and search results.",
              icon: "i-ph-text-aa",
              default: "Novelize - Finish Your Novel Without Distractions",
            }),
            description: field({
              type: "string",
              title: "Meta Description",
              description: "The description that appears in search results.",
              icon: "i-ph-text-align-left",
              default:
                "The online writing space built for authors, fanfic writers, and storytellers. Stay focused, organized, and motivated with autosave, scene organization, and distraction-free writing.",
            }),
          },
        }),
        pricing: group({
          title: "Pricing Page",
          description: "SEO settings for the pricing page.",
          icon: "i-ph-currency-dollar",
          fields: {
            title: field({
              type: "string",
              title: "Page Title",
              description:
                "The title that appears in browser tabs and search results.",
              icon: "i-ph-text-aa",
              default: "Pricing - One Simple Plan | Novelize",
            }),
            description: field({
              type: "string",
              title: "Meta Description",
              description: "The description that appears in search results.",
              icon: "i-ph-text-align-left",
              default:
                "Simple, fair pricing with full access to all Novelize features. 17-day free trial, cancel anytime. No confusing tiers or hidden limits.",
            }),
          },
        }),
        privacy: group({
          title: "Privacy Page",
          description: "SEO settings for the privacy policy page.",
          icon: "i-ph-shield-check",
          fields: {
            title: field({
              type: "string",
              title: "Page Title",
              description:
                "The title that appears in browser tabs and search results.",
              icon: "i-ph-text-aa",
              default: "Privacy Policy | Novelize",
            }),
            description: field({
              type: "string",
              title: "Meta Description",
              description: "The description that appears in search results.",
              icon: "i-ph-text-align-left",
              default:
                "Read Novelize's privacy policy to learn how we collect, use, and protect your personal information and writing.",
            }),
          },
        }),
        terms: group({
          title: "Terms Page",
          description: "SEO settings for the terms of service page.",
          icon: "i-ph-file-text",
          fields: {
            title: field({
              type: "string",
              title: "Page Title",
              description:
                "The title that appears in browser tabs and search results.",
              icon: "i-ph-text-aa",
              default: "Terms of Service | Novelize",
            }),
            description: field({
              type: "string",
              title: "Meta Description",
              description: "The description that appears in search results.",
              icon: "i-ph-text-align-left",
              default:
                "Read Novelize's terms of service to understand your rights and responsibilities when using our writing platform.",
            }),
          },
        }),
        blog: group({
          title: "Blog Page",
          description: "SEO settings for the blog page.",
          icon: "i-ph-newspaper",
          fields: {
            title: field({
              type: "string",
              title: "Page Title",
              description:
                "The title that appears in browser tabs and search results.",
              icon: "i-ph-text-aa",
              default: "Blog - Stories from the Novelize Community",
            }),
            description: field({
              type: "string",
              title: "Meta Description",
              description: "The description that appears in search results.",
              icon: "i-ph-text-align-left",
              default:
                "Author spotlights, writing tips, and updates from the Novelize team. Read stories from writers who are finishing their novels with Novelize.",
            }),
          },
        }),
        articles: group({
          title: "Articles Page SEO",
          description: "Settings for the Articles page.",
          icon: "i-heroicons-document-text",
          fields: {
            title: field({
              type: "string",
              title: "Title",
              description: "The title for the Articles page.",
              icon: "i-heroicons-document-text",
              default: "Writing Articles & Tips | Novelize",
            }),
            description: field({
              type: "string",
              title: "Description",
              description: "A brief summary of the Articles page content.",
              icon: "i-heroicons-chat-bubble-left-right",
              default:
                "Practical writing advice, techniques, and insights to help you become a better writer. Learn from experienced authors and improve your craft.",
            }),
          },
        }),
      },
    }),
  },
});
