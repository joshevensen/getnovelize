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
    legal: defineCollection({
      type: "page",
      source: "legal/**/*.md",
    }),
    pages: defineCollection({
      type: "data",
      source: "pages/**/*.json",
      schema: z.object({
        hero: z.object({
          variant: z.enum(["home", "page"]),
          content: z.object({
            badge: z.string(),
            title: z.string(),
            description: z.string(),
            announcement: z
              .object({
                badge: z.string(),
                text: z.string(),
                href: z.string(),
              })
              .optional(),
            buttons: z
              .array(
                z.object({
                  text: z.string(),
                  href: z.string(),
                  primary: z.boolean(),
                })
              )
              .optional(),
            image: z
              .object({
                src: z.string(),
                alt: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
              .optional(),
          }),
        }),
        testimonials: z
          .object({
            title: z.string(),
            description: z.string(),
            items: z.array(
              z.object({
                body: z.string(),
                author: z.object({
                  name: z.string(),
                  handle: z.string(),
                  imageUrl: z.string(),
                }),
              })
            ),
          })
          .optional(),
        features: z
          .union([
            // Single features object (for home page)
            z.object({
              variant: z.enum(["home"]),
              content: z.object({
                title: z.string(),
                description: z.string(),
                features: z.array(
                  z.object({
                    name: z.string(),
                    description: z.string(),
                    icon: z.string(),
                    href: z.string().optional(),
                  })
                ),
              }),
            }),
            z.object({
              variant: z.enum(["main-right", "main-left"]),
              content: z.object({
                badge: z.string(),
                title: z.string(),
                description: z.string(),
                features: z.array(
                  z.object({
                    name: z.string(),
                    description: z.string(),
                    icon: z.string(),
                  })
                ),
                image: z.object({
                  src: z.string(),
                  alt: z.string(),
                  width: z.number().optional(),
                  height: z.number().optional(),
                }),
              }),
            }),
            z.object({
              variant: z.enum(["list"]),
              content: z.object({
                badge: z.string(),
                title: z.string(),
                description: z.string(),
                features: z.array(
                  z.object({
                    name: z.string(),
                    description: z.string(),
                    icon: z.string(),
                  })
                ),
              }),
            }),
            // Array of features objects (for features page)
            z.array(
              z.union([
                z.object({
                  variant: z.enum(["home"]),
                  content: z.object({
                    title: z.string(),
                    description: z.string(),
                    features: z.array(
                      z.object({
                        name: z.string(),
                        description: z.string(),
                        icon: z.string(),
                        href: z.string().optional(),
                      })
                    ),
                  }),
                }),
                z.object({
                  variant: z.enum(["main-right", "main-left"]),
                  content: z.object({
                    badge: z.string(),
                    title: z.string(),
                    description: z.string(),
                    features: z.array(
                      z.object({
                        name: z.string(),
                        description: z.string(),
                        icon: z.string(),
                      })
                    ),
                    image: z.object({
                      src: z.string(),
                      alt: z.string(),
                      width: z.number().optional(),
                      height: z.number().optional(),
                    }),
                  }),
                }),
                z.object({
                  variant: z.enum(["list"]),
                  content: z.object({
                    badge: z.string(),
                    title: z.string(),
                    description: z.string(),
                    features: z.array(
                      z.object({
                        name: z.string(),
                        description: z.string(),
                        icon: z.string(),
                      })
                    ),
                  }),
                }),
              ])
            ),
          ])
          .optional(),
        blog: z
          .object({
            variant: z.enum(["home", "list"]),
            content: z.object({
              title: z.string().optional(),
              description: z.string().optional(),
              featuredPost: z
                .object({
                  id: z.number(),
                  title: z.string(),
                  href: z.string(),
                  description: z.string(),
                  date: z.string(),
                  datetime: z.string(),
                  author: z.object({
                    name: z.string(),
                    href: z.string(),
                    imageUrl: z.string(),
                  }),
                })
                .optional(),
              posts: z.array(
                z.object({
                  id: z.number(),
                  title: z.string(),
                  href: z.string(),
                  description: z.string(),
                  date: z.string(),
                  datetime: z.string(),
                  author: z.object({
                    name: z.string(),
                    href: z.string(),
                    imageUrl: z.string(),
                    role: z.string().optional(),
                  }),
                  imageUrl: z.string().optional(),
                  category: z
                    .object({
                      title: z.string(),
                      href: z.string(),
                    })
                    .optional(),
                })
              ),
            }),
          })
          .optional(),
        about: z
          .object({
            badge: z.string(),
            title: z.string(),
            description: z.string(),
            mission: z.object({
              title: z.string(),
              description1: z.string(),
              description2: z.string(),
            }),
            images: z.array(
              z.object({
                src: z.string(),
                alt: z.string(),
                class: z.string(),
              })
            ),
            stats: z.object({
              title: z.string(),
              items: z.array(
                z.object({
                  label: z.string(),
                  value: z.string(),
                })
              ),
            }),
          })
          .optional(),
        team: z
          .object({
            title: z.string(),
            description: z.string(),
            people: z.array(
              z.object({
                name: z.string(),
                role: z.string(),
                imageUrl: z.string(),
                bio: z.string(),
                xUrl: z.string(),
                linkedinUrl: z.string(),
              })
            ),
          })
          .optional(),
        pricing: z
          .object({
            title: z.string(),
            description: z.string(),
            plan: z.object({
              name: z.string(),
              description: z.string(),
              price: z.string(),
              currency: z.string(),
              period: z.string(),
              features: z.array(z.string()),
              buttonText: z.string(),
              buttonHref: z.string(),
              disclaimer: z.string(),
            }),
          })
          .optional(),
        faq: z
          .object({
            title: z.string(),
            description: z.string(),
            faqs: z.array(
              z.object({
                question: z.string(),
                answer: z.string(),
              })
            ),
          })
          .optional(),
        contact: z
          .object({
            title: z.string(),
            description: z.string(),
            form: z.object({
              fields: z.array(
                z.object({
                  name: z.string(),
                  label: z.string(),
                  type: z.string(),
                  required: z.boolean().optional(),
                  autocomplete: z.string().optional(),
                })
              ),
              submitText: z.string(),
            }),
          })
          .optional(),
        cta: z
          .object({
            title: z.string(),
            description: z.string().optional(),
            buttons: z.array(
              z.object({
                text: z.string(),
                href: z.string(),
                primary: z.boolean(),
              })
            ),
          })
          .optional(),
      }),
    }),
  },
});
