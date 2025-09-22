# Content Migration Plan: Section Components → Props → JSON Files

## Overview

Transform section components from hardcoded content to prop-driven components, then migrate content to JSON files for Nuxt Studio editing.

## Current State Analysis

### Section Components with Content

**Consolidated Components (with variant props):**

- `Hero.vue` - Unified hero component (`variant: "home" | "page"`)
- `Features.vue` - Unified features component (`variant: "home" | "list" | "main-left" | "main-right"`)
- `Blog.vue` - Unified blog component (`variant: "home" | "list"`)

**Remaining Individual Components:**

- `About.vue` - Company story, mission, stats, images
- `CTA.vue` - Call-to-action content and buttons
- `Contact.vue` - Contact form (minimal content)
- `FAQ.vue` - FAQ items
- `Newsletter.vue` - Newsletter signup content
- `Pricing.vue` - Pricing plan details
- `Team.vue` - Team member information
- `Testimonials.vue` - Customer testimonials

### Pages Using Sections

- `index.vue` - Hero (home), Testimonials, Features (home), CTA, Blog (home)
- `about.vue` - Hero (page), About, Team, CTA
- `features.vue` - Hero (page), Features (main-right), Features (main-left), Features (list), CTA
- `contact.vue` - Hero (page), Contact, CTA
- `pricing.vue` - Hero (page), Pricing, FAQ, CTA
- `blog/index.vue` - Hero (page), Blog (list)

## Phase 1: Component Refactoring (Props-Based)

### 1.1 Create Content Interfaces

**Note: Consolidated components now have inline interfaces with variant props.**

Create TypeScript interfaces for each section's content structure:

```typescript
// Consolidated Components (interfaces are inline in components)
// Hero.vue - variant: "home" | "page"
interface HeroContent {
  badge: string;
  title: string;
  description: string;
  announcement?: { badge: string; text: string; href: string };
  buttons?: Array<{ text: string; href: string; primary: boolean }>;
  image?: { src: string; alt: string; width?: number; height?: number };
}

// Features.vue - variant: "home" | "list" | "main-left" | "main-right"
interface FeatureContent {
  title?: string;
  description?: string;
  badge?: string;
  features: Array<{
    name: string;
    description: string;
    icon: string;
    href?: string;
  }>;
  image?: { src: string; alt: string; width?: number; height?: number };
}

// Blog.vue - variant: "home" | "list"
interface BlogContent {
  title?: string;
  description?: string;
  featuredPost?: BlogPost;
  posts: BlogPost[];
}

// Remaining Individual Components
interface AboutContent {
  badge: string;
  title: string;
  description: string;
  mission: MissionData;
  images: ImageData[];
  stats: StatsData;
}

interface CTAContent {
  title: string;
  description?: string;
  buttons: Array<{ text: string; href: string; primary: boolean }>;
}

// ... more interfaces for remaining components
```

### 1.2 Refactor Section Components

**Consolidated Components (Already Implemented):**

- ✅ `Hero.vue` - Uses `variant` prop + `content` prop
- ✅ `Features.vue` - Uses `variant` prop + `content` prop
- ✅ `Blog.vue` - Uses `variant` prop + `content` prop

**Remaining Components to Refactor:**
Update each remaining section component to accept props:

```vue
<!-- Example: About.vue -->
<script setup lang="ts">
interface AboutContent {
  badge: string;
  title: string;
  description: string;
  mission: MissionData;
  images: ImageData[];
  stats: StatsData;
}

interface Props {
  content: AboutContent;
}

defineProps<Props>();
</script>

<template>
  <!-- Use content from props instead of hardcoded -->
  <div>{{ content.title }}</div>
</template>
```

```vue
<!-- Example: CTA.vue -->
<script setup lang="ts">
interface CTAContent {
  title: string;
  description?: string;
  buttons: Array<{ text: string; href: string; primary: boolean }>;
}

interface Props {
  content: CTAContent;
}

defineProps<Props>();
</script>

<template>
  <!-- Use content from props instead of hardcoded -->
  <div>{{ content.title }}</div>
</template>
```

### 1.3 Update Page Components

Modify pages to pass content as props with variant specifications:

```vue
<!-- Example: about.vue -->
<script setup>
const heroContent = {
  badge: "About us",
  title: "Built by a developer, shaped by writers",
  description: "Novelize started as a simple side project...",
};

const aboutContent = {
  badge: "About us",
  title: "On a mission to empower remote teams",
  // ... rest of content
};

const teamContent = {
  title: "Our team",
  description: "We're a dynamic group...",
  people: [
    /* ... */
  ],
};

const ctaContent = {
  title: "Ready to start your story?",
  buttons: [{ text: "Get started", href: "#", primary: true }],
};
</script>

<template>
  <SectionHero variant="page" :content="heroContent" />
  <SectionAbout :content="aboutContent" />
  <SectionTeam :content="teamContent" />
  <SectionCTA :content="ctaContent" />
</template>
```

```vue
<!-- Example: features.vue -->
<script setup>
const heroContent = {
  badge: "Features",
  title: "Everything you need to get started",
  description: "Check out all the features...",
};

const featuresMainRight1 = {
  badge: "Deploy faster",
  title: "A better workflow",
  features: [
    /* ... */
  ],
  image: {
    /* ... */
  },
};

const featuresList = {
  badge: "Features",
  title: "Everything you need to deploy your app",
  features: [
    /* ... */
  ],
};
</script>

<template>
  <SectionHero variant="page" :content="heroContent" />
  <SectionFeatures variant="main-right" :content="featuresMainRight1" />
  <SectionFeatures variant="main-left" :content="featuresMainLeft" />
  <SectionFeatures variant="list" :content="featuresList" />
  <SectionCTA :content="ctaContent" />
</template>
```

## Phase 2: Content Migration to JSON

### 2.1 Create Content JSON Structure

Organize content by page only, with sections being reusable components:

```
content/
└── pages/
    ├── home.json
    ├── about.json
    ├── features.json
    ├── contact.json
    └── pricing.json
```

### 2.2 Content File Examples

**content/pages/home.json**

```json
{
  "hero": {
    "variant": "home",
    "content": {
      "badge": "What's new",
      "title": "Turn your ideas into stories",
      "description": "A clean, focused writing space built for storytellers who want to create without distraction.",
      "announcement": {
        "badge": "What's new",
        "text": "Just shipped v1.0",
        "href": "#"
      },
      "buttons": [
        { "text": "Start your free 30-day trial", "href": "#", "primary": true }
      ],
      "image": {
        "src": "https://example.com/app-screenshot.png",
        "alt": "Novelize app screenshot"
      }
    }
  },
  "testimonials": {
    "title": "We have worked with thousands of amazing people",
    "items": [
      {
        "body": "Novelize has transformed how I write my stories.",
        "author": {
          "name": "Sarah Johnson",
          "handle": "sarahwrites",
          "imageUrl": "https://example.com/sarah.jpg"
        }
      }
    ]
  },
  "features": {
    "variant": "home",
    "content": {
      "title": "Everything you need to focus on writing",
      "description": "Novelize gives you just the right tools to protect your words, stay organized, and write wherever inspiration strikes.",
      "features": [
        {
          "name": "Write Without Fear",
          "description": "Your stories are private by default, and we'll never censor your work.",
          "icon": "shield-check",
          "href": "#"
        },
        {
          "name": "Stay Organized",
          "description": "Keep track of your characters, plot points, and research all in one place.",
          "icon": "book",
          "href": "#"
        },
        {
          "name": "Write Anywhere",
          "description": "Access your stories from any device, anywhere inspiration strikes.",
          "icon": "device-mobile",
          "href": "#"
        }
      ]
    }
  },
  "blog": {
    "variant": "home",
    "content": {
      "featuredPost": {
        "id": 1,
        "title": "We're incredibly proud to announce we have secured $75m in Series B",
        "href": "#",
        "description": "Libero neque aenean tincidunt nec consequat tempor...",
        "date": "Mar 16, 2020",
        "datetime": "2020-03-16",
        "author": {
          "name": "Michael Foster",
          "href": "#",
          "imageUrl": "https://example.com/michael.jpg"
        }
      },
      "posts": [
        {
          "id": 2,
          "title": "Boost your conversion rate",
          "href": "#",
          "description": "Illo sint voluptas. Error voluptates culpa eligendi...",
          "date": "Mar 10, 2020",
          "datetime": "2020-03-16",
          "author": {
            "name": "Lindsay Walton",
            "href": "#",
            "imageUrl": "https://example.com/lindsay.jpg"
          }
        }
      ]
    }
  },
  "cta": {
    "title": "Ready to start your story?",
    "description": "Join hundreds of writers who use Novelize to stay organized, focused, and inspired.",
    "buttons": [
      { "text": "Start your free 30-day trial", "href": "#", "primary": true }
    ]
  }
}
```

**content/pages/about.json**

```json
{
  "hero": {
    "variant": "page",
    "content": {
      "badge": "About us",
      "title": "Built by a developer, shaped by writers",
      "description": "Novelize started as a simple side project to make writing easier. Today, it's grown into a family-run app used by thousands of storytellers around the world."
    }
  },
  "about": {
    "badge": "About us",
    "title": "On a mission to empower remote teams",
    "description": "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam.",
    "mission": {
      "title": "Our mission",
      "description1": "Faucibus commodo massa rhoncus, volutpat...",
      "description2": "Et vitae blandit facilisi magna lacus commodo..."
    },
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e",
        "alt": "",
        "class": "aspect-square overflow-hidden rounded-xl shadow-xl"
      }
    ],
    "stats": {
      "title": "The numbers",
      "items": [
        { "label": "Raised", "value": "$150M" },
        { "label": "Companies", "value": "30K" }
      ]
    }
  },
  "team": {
    "title": "Our team",
    "description": "We're a dynamic group of individuals who are passionate about what we do.",
    "people": [
      {
        "name": "Josh",
        "role": "Founder, Developer",
        "bio": "I've been a software engineer for over 10 years...",
        "imageUrl": "https://example.com/josh.jpg"
      }
    ]
  },
  "cta": {
    "title": "Novelize is built for writers like you. Ready to start your story?",
    "buttons": [
      { "text": "Start your free 30-day trial", "href": "#", "primary": true }
    ]
  }
}
```

### 2.3 Update Content Configuration

Extend `content.config.ts` to include pages collection:

```typescript
export default defineContentConfig({
  collections: {
    // ... existing collections
    pages: defineCollection({
      type: "data",
      source: "pages/**/*.json",
      schema: z.object({
        hero: z.object({...}),
        about: z.object({...}).optional(),
        team: z.object({...}).optional(),
        features: z.object({...}).optional(),
        pricing: z.object({...}).optional(),
        faq: z.object({...}).optional(),
        testimonials: z.object({...}).optional(),
        cta: z.object({...}).optional(),
        // ... other page sections as needed
      })
    })
  }
});
```

## Phase 3: Nuxt Studio Integration

### 3.1 Update Page Components for Content Fetching

```vue
<!-- pages/about.vue -->
<script setup>
const { data: pageContent } = await useAsyncData("about-page", () =>
  queryCollection("pages").where("_path", "==", "/about").first()
);
</script>

<template>
  <SectionHero
    :variant="pageContent.hero.variant"
    :content="pageContent.hero.content"
  />
  <SectionAbout :content="pageContent.about" />
  <SectionTeam :content="pageContent.team" />
  <SectionCTA :content="pageContent.cta" />
</template>
```

```vue
<!-- pages/index.vue -->
<script setup>
const { data: pageContent } = await useAsyncData("home-page", () =>
  queryCollection("pages").where("_path", "==", "/home").first()
);
</script>

<template>
  <SectionHero
    :variant="pageContent.hero.variant"
    :content="pageContent.hero.content"
  />
  <SectionTestimonials :content="pageContent.testimonials" />
  <SectionFeatures
    :variant="pageContent.features.variant"
    :content="pageContent.features.content"
  />
  <SectionBlog
    :variant="pageContent.blog.variant"
    :content="pageContent.blog.content"
  />
  <SectionCTA :content="pageContent.cta" />
</template>
```

```vue
<!-- pages/blog/index.vue -->
<script setup>
const { data: pageContent } = await useAsyncData("blog-page", () =>
  queryCollection("pages").where("_path", "==", "/blog").first()
);
</script>

<template>
  <SectionHero
    :variant="pageContent.hero.variant"
    :content="pageContent.hero.content"
  />
  <SectionBlog
    :variant="pageContent.blog.variant"
    :content="pageContent.blog.content"
  />
</template>
```

### 3.2 Create Nuxt Studio Schema

Define schemas for Nuxt Studio editing:

```typescript
// studio/schemas/sections.ts
export const heroSchema = {
  name: "hero",
  title: "Hero Section",
  type: "object",
  fields: [
    { name: "badge", type: "string", title: "Badge Text" },
    { name: "title", type: "string", title: "Main Title" },
    { name: "description", type: "text", title: "Description" },
    {
      name: "buttons",
      type: "array",
      title: "Call-to-Action Buttons",
      of: [{ type: "button" }],
    },
  ],
};
```

## Phase 4: Implementation Steps

### Step 1: Create Type Definitions

- [ ] Create `types/section-content.ts`
- [ ] Define interfaces for all section types
- [ ] Export types for use in components

### Step 2: Refactor Section Components

**Consolidated Components (✅ Completed):**

- ✅ `Hero.vue` - Unified hero component with variant prop
- ✅ `Features.vue` - Unified features component with variant prop
- ✅ `Blog.vue` - Unified blog component with variant prop

**Remaining Components to Refactor:**

- [ ] Update `About.vue` to accept props
- [ ] Update `Team.vue` to accept props
- [ ] Update `CTA.vue` to accept props
- [ ] Update `Pricing.vue` to accept props
- [ ] Update `FAQ.vue` to accept props
- [ ] Update `Testimonials.vue` to accept props
- [ ] Update `Newsletter.vue` to accept props
- [ ] Update `Contact.vue` to accept props

### Step 3: Create Content JSON Files

- [ ] Create `content/pages/home.json`
- [ ] Create `content/pages/about.json`
- [ ] Create `content/pages/features.json`
- [ ] Create `content/pages/contact.json`
- [ ] Create `content/pages/pricing.json`

### Step 4: Update Content Configuration

- [ ] Add `pages` collection to `content.config.ts`
- [ ] Define Zod schemas for validation
- [ ] Test content loading

### Step 5: Update Page Components

- [ ] Update `pages/index.vue` to fetch and pass content with variant props
- [ ] Update `pages/about.vue` to fetch and pass content with variant props
- [ ] Update `pages/features.vue` to fetch and pass content with variant props
- [ ] Update `pages/contact.vue` to fetch and pass content with variant props
- [ ] Update `pages/pricing.vue` to fetch and pass content with variant props
- [ ] Update `pages/blog/index.vue` to fetch and pass content with variant props

### Step 6: Nuxt Studio Setup

- [ ] Install Nuxt Studio
- [ ] Configure Studio schemas
- [ ] Set up content editing interface
- [ ] Test content editing workflow

## Benefits of This Approach

1. **Separation of Concerns**: Content separated from presentation logic
2. **Reusability**: Section components can be used with different content
3. **Maintainability**: Content changes don't require code changes
4. **Studio Integration**: Non-technical users can edit content
5. **Type Safety**: TypeScript interfaces ensure content structure
6. **Flexibility**: Easy to A/B test different content variations

## Migration Strategy

**Phase 1: Consolidated Components (✅ Completed)**

1. ✅ **Hero sections** - Unified into single component with variant prop
2. ✅ **Feature sections** - Unified into single component with variant prop
3. ✅ **Blog sections** - Unified into single component with variant prop

**Phase 2: Remaining Individual Components**

1. **Start with About/Team sections** (more complex but self-contained)
2. **Handle CTA/Pricing sections** (medium complexity)
3. **Finish with FAQ/Contact/Newsletter** (specialized components)

**Phase 3: Content Migration**

1. **Create JSON files** with variant + content structure
2. **Update content.config.ts** with new schema
3. **Implement Nuxt Studio** integration

## Testing Plan

1. **Unit Tests**: Test section components with mock props

## Rollback Plan

- Keep original section components as backup
- Use feature flags to switch between old/new content loading
- Maintain content in both hardcoded and JSON formats during transition
