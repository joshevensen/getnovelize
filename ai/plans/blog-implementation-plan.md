# Blog Implementation Plan

## Overview

This plan outlines the implementation of a fully functional blog system for the Novelize website using **Nuxt Content v3** in a **Nuxt 4** project. The blog will feature author spotlights, writing tips, product updates, and community stories.

**Reference Documentation**: [Nuxt Content v3 Getting Started](https://content.nuxt.com/docs/getting-started)

---

## Current State

### ✅ Already Configured

- **Nuxt Content v3** installed (`@nuxt/content@^3.6.3`)
- **Content Collections** defined in `content.config.ts`
  - `posts` collection exists with source `posts/**/*.md`
  - `seo` collection with metadata for all pages
  - Type-safe schema using Zod
- **Blog pages** exist in `app/pages/blog/`
  - `index.vue` (blog listing page with SEO)
  - `[slug].vue` (individual post page with dynamic SEO)
- **Content directory** structure exists (`content/posts/`)
- **SEO metadata** implemented on all pages using `useSeoMeta()`
  - All static pages have SEO from `content/seo.json`
  - Blog post pages have dynamic SEO from post frontmatter

---

## Implementation Phases

### Phase 1: Content Collection Schema Enhancement

**Goal**: Define a robust, type-safe schema for blog posts with all necessary metadata.

#### Tasks

1. **Update `content.config.ts`** to enhance the `posts` collection schema:

```typescript
posts: defineCollection({
  type: "page",
  source: "posts/**/*.md",
  schema: z.object({
    // Core metadata
    title: z.string(),
    description: z.string(),
    publishedAt: z.string().datetime(),
    updatedAt: z.string().datetime().optional(),

    // Author information
    author: z.object({
      name: z.string(),
      role: z.string().optional(),
      image: z.string().optional(),
      bio: z.string().optional(),
    }),

    // Content categorization
    category: z.enum([
      'author-spotlight',
      'writing-tips',
      'product-updates',
      'community-stories',
      'announcements'
    ]),
    tags: z.array(z.string()),

    // Visual elements
    coverImage: z.string().optional(),
    excerpt: z.string().optional(),

    // SEO & visibility
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      ogImage: z.string().optional(),
    }).optional(),

    // Engagement
    readingTime: z.number().optional(), // minutes
  }),
}),
```

2. **Add validation** to ensure data consistency across all blog posts.

3. **Generate TypeScript types** automatically from the schema for use in components.

---

### Phase 2: Create One Post to test

**Goal**: Create a blog post to test the new schema

#### Tasks

1. **Create frontmatter template** for new blog posts:

```markdown
---
title: "Your Post Title"
description: "A compelling 1-2 sentence summary"
publishedAt: "2025-10-01T00:00:00Z"
author:
  name: "Author Name"
  role: "Writer, Novelist"
  image: "/author-image.png"
category: "author-spotlight"
tags: ["writing", "author-interview", "nanowrimo"]
coverImage: "/images/posts/post-cover.webp"
featured: false
draft: false
readingTime: 8
---

# Your Post Content Here
```

4. **Establish naming convention**: `content/posts/slug.md`

---

### Phase 3: Blog Index Page (`/blog`)

**Goal**: Build a beautiful, filterable blog listing page with categories, search, and pagination.

#### Tasks

1. **Design the blog index layout**:
   - Hero section with blog title and description
   - Featured post section (if `featured: true`)
   - Category filter tabs/pills
   - Grid layout for post cards (3 columns on desktop, 1 on mobile)
   - Pagination controls

2. **Implement `app/pages/blog/index.vue`**:

```vue
<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-posts", () =>
  queryCollection("posts")
    .where("draft", "!=", true)
    .sort("publishedAt", "desc")
    .all()
);

const { data: seoData } = await useAsyncData("blog-seo", () =>
  queryCollection("seo").first()
);

// Category filtering
const selectedCategory = ref<string | null>(null);
const filteredPosts = computed(() => {
  if (!selectedCategory.value) return posts.value;
  return posts.value?.filter(
    (post) => post.category === selectedCategory.value
  );
});

// SEO
useHead({
  title: seoData.value?.blog.title,
  meta: [{ name: "description", content: seoData.value?.blog.description }],
});
</script>

<template>
  <div>
    <SectionsGlobalHeader
      title="Stories from the Novelize Community"
      description="Author spotlights, writing tips, and updates from the team."
    />

    <!-- Featured Post -->
    <UiContainer v-if="featuredPost">
      <!-- Large featured post card -->
    </UiContainer>

    <!-- Category Filter -->
    <UiContainer>
      <!-- Category pills/tabs -->
    </UiContainer>

    <!-- Post Grid -->
    <UiContainer>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogPostCard
          v-for="post in filteredPosts"
          :key="post._id"
          :post="post"
        />
      </div>
    </UiContainer>

    <!-- Pagination -->
    <!-- TODO: Implement pagination if needed -->

    <SectionsGlobalCTA
      title="Ready to write your story?"
      description="Join thousands of authors using Novelize to finish their novels."
      ctaText="Start Writing Today"
      ctaHref="https://app.getnovelize.com/register"
    />
  </div>
</template>
```

3. **Create `BlogPostCard.vue` component**:
   - Cover image
   - Category badge
   - Title and excerpt
   - Author info (name, avatar)
   - Published date
   - Reading time
   - Hover effects and transitions

4. **Add category filter UI**:
   - Tabs or pill buttons for each category
   - "All Posts" option
   - Active state styling (orange accent)

5. **Implement responsive design**:
   - Mobile: 1 column
   - Tablet: 2 columns
   - Desktop: 3 columns

---

### Phase 4: Individual Blog Post Page (`/blog/[slug]`)

**Goal**: Create a beautiful, readable blog post template with proper typography and engagement features.

#### Tasks

1. **Implement `app/pages/blog/[slug].vue`**:

```vue
<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = await useAsyncData(`post-${slug}`, () =>
  queryCollection("posts").where("_path", "==", `/posts/${slug}`).first()
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Post Not Found" });
}

// Get related posts (same category, exclude current)
const { data: relatedPosts } = await useAsyncData(`related-${slug}`, () =>
  queryCollection("posts")
    .where("category", "==", post.value.category)
    .where("_path", "!=", `/posts/${slug}`)
    .limit(3)
    .all()
);

// SEO
useHead({
  title: post.value.seo?.title || post.value.title,
  meta: [
    {
      name: "description",
      content: post.value.seo?.description || post.value.description,
    },
    { property: "og:title", content: post.value.title },
    { property: "og:description", content: post.value.description },
    {
      property: "og:image",
      content: post.value.seo?.ogImage || post.value.coverImage,
    },
    { property: "og:type", content: "article" },
    { property: "article:published_time", content: post.value.publishedAt },
    { property: "article:author", content: post.value.author.name },
  ],
});
</script>

<template>
  <article>
    <!-- Hero Section -->
    <UiContainer size="md">
      <div class="mx-auto max-w-3xl">
        <!-- Category Badge -->
        <div class="mb-4">
          <span
            class="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-800"
          >
            {{ post.category }}
          </span>
        </div>

        <!-- Title -->
        <h1
          class="text-5xl font-semibold tracking-tight text-balance text-orange-600 sm:text-6xl font-serif"
        >
          {{ post.title }}
        </h1>

        <!-- Meta Info -->
        <div class="mt-6 flex items-center gap-x-4 text-sm text-gray-600">
          <img
            v-if="post.author.image"
            :src="post.author.image"
            :alt="post.author.name"
            class="h-10 w-10 rounded-full"
          />
          <div>
            <p class="font-semibold text-gray-900">{{ post.author.name }}</p>
            <div class="flex items-center gap-x-2">
              <time :datetime="post.publishedAt">
                {{ formatDate(post.publishedAt) }}
              </time>
              <span v-if="post.readingTime"
                >• {{ post.readingTime }} min read</span
              >
            </div>
          </div>
        </div>

        <!-- Cover Image -->
        <img
          v-if="post.coverImage"
          :src="post.coverImage"
          :alt="post.title"
          class="mt-10 aspect-video rounded-2xl object-cover ring-1 ring-gray-200"
        />
      </div>
    </UiContainer>

    <!-- Article Content -->
    <UiContainer size="md" class="mt-16">
      <div
        class="mx-auto max-w-3xl prose prose-lg prose-gray prose-headings:font-serif prose-headings:text-parchment-900 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
      >
        <ContentRenderer :value="post" />
      </div>
    </UiContainer>

    <!-- Author Bio -->
    <UiContainer size="md" class="mt-16">
      <div
        class="mx-auto max-w-3xl p-8 bg-parchment-50 rounded-2xl ring-1 ring-gray-200"
      >
        <div class="flex items-start gap-4">
          <img
            v-if="post.author.image"
            :src="post.author.image"
            :alt="post.author.name"
            class="h-16 w-16 rounded-full"
          />
          <div>
            <h3 class="text-xl font-semibold text-parchment-900">
              {{ post.author.name }}
            </h3>
            <p v-if="post.author.role" class="text-sm text-gray-600">
              {{ post.author.role }}
            </p>
            <p v-if="post.author.bio" class="mt-2 text-gray-700">
              {{ post.author.bio }}
            </p>
          </div>
        </div>
      </div>
    </UiContainer>

    <!-- Related Posts -->
    <UiContainer v-if="relatedPosts?.length" class="mt-24">
      <div class="mx-auto max-w-5xl">
        <h2
          class="text-3xl font-semibold tracking-tight text-parchment-900 mb-8 font-serif"
        >
          Related Stories
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <BlogPostCard
            v-for="relatedPost in relatedPosts"
            :key="relatedPost._id"
            :post="relatedPost"
          />
        </div>
      </div>
    </UiContainer>

    <!-- CTA -->
    <SectionsGlobalCTA
      title="Inspired to write your own story?"
      description="Join our community of authors and start drafting your novel today."
      ctaText="Start Writing"
      ctaHref="https://app.getnovelize.com/register"
    />
  </article>
</template>
```

2. **Configure prose styling** in `main.css`:
   - Proper typography for long-form content
   - Code block styling
   - Blockquote styling
   - Image styling with captions
   - Link styling (orange accent)

3. **Add utility functions**:
   - `formatDate()` helper for human-readable dates
   - Reading time calculator (if not in frontmatter)

---

### Phase 5: Component Development

**Goal**: Build reusable, styled components for the blog system.

#### Tasks

1. **Create `app/components/blog/PostCard.vue`**:
   - Accepts `post` prop (type-safe from collection)
   - Cover image with aspect ratio
   - Category badge
   - Title (h3, truncate at 2 lines)
   - Excerpt (truncate at 3 lines)
   - Author info (avatar, name)
   - Meta info (date, reading time)
   - Hover effects (scale, shadow)
   - Link to `/blog/[slug]`

2. **Create `app/components/blog/CategoryFilter.vue`**:
   - Dynamic category list from posts
   - Active state management
   - Emit events for filtering
   - Mobile-friendly (horizontal scroll on small screens)

3. **Create `app/components/blog/FeaturedPost.vue`**:
   - Larger card layout
   - Prominent cover image
   - Extended excerpt
   - "Featured" badge

4. **Create `app/components/blog/ShareButtons.vue`** (optional):
   - Twitter/X share
   - LinkedIn share
   - Copy link button

---

### Phase 6: Advanced Features

**Goal**: Enhance the blog with search, RSS, and analytics.

#### Tasks

1. **Full-Text Search**:
   - Implement using Nuxt Content's built-in search: [Full-Text Search Docs](https://content.nuxt.com/docs/advanced/full-text-search)
   - Add search input to blog index page
   - Search across title, description, content, tags
   - Display search results with highlighting

```vue
<script setup>
const searchQuery = ref("");

const { data: searchResults } = await useAsyncData("search", () =>
  queryCollectionSearchSections("posts", searchQuery.value).all()
);
</script>
```

2. **RSS Feed**:
   - Generate RSS feed at `/feed.xml` or `/blog/rss.xml`
   - Use Nuxt Content's server routes
   - Include recent posts with full content

```typescript
// server/routes/feed.xml.ts
export default defineEventHandler(async (event) => {
  const posts = await queryCollection("posts")
    .where("draft", "!=", true)
    .sort("publishedAt", "desc")
    .limit(20)
    .all();

  // Generate RSS XML
  const feed = generateRSSFeed(posts);

  event.node.res.setHeader("Content-Type", "application/xml");
  return feed;
});
```

3. **Analytics Integration**:
   - Track blog post views in Gist (already configured)
   - Add custom events for category clicks
   - Track popular posts

4. **Table of Contents** (for long posts):
   - Auto-generate from h2/h3 headings
   - Sticky sidebar navigation
   - Highlight current section on scroll

5. **Breadcrumbs**:
   - Home → Blog → [Category] → [Post Title]
   - Improve SEO and navigation

---

### Phase 7: Static Site Generation & Deployment

**Goal**: Ensure all blog routes are pre-rendered for optimal performance.

#### Tasks

1. **Update `nuxt.config.ts`** prerender routes:

```typescript
nitro: {
  prerender: {
    crawlLinks: false,
    routes: async () => {
      const posts = await queryCollection('posts')
        .where('draft', '!=', true)
        .all();

      return [
        '/',
        '/about',
        '/contact',
        '/features',
        '/pricing',
        '/privacy',
        '/terms',
        '/blog',
        ...posts.map(post => `/blog/${post._path.split('/').pop()}`),
      ];
    },
  },
},
```

2. **Test static generation**:
   - Run `npm run generate`
   - Verify all blog routes are generated
   - Check for broken links or missing images

3. **Update deploy script** (already exists in `package.json`):
   - Ensure blog assets are copied to `public/`

4. **Set up automated deployments**:
   - Deploy on git push to main branch
   - Trigger rebuild when new posts are added

---

### Phase 8: Content Strategy & Maintenance

**Goal**: Establish processes for ongoing content creation and management.

#### Tasks

1. **Create editorial calendar**:
   - Schedule monthly author spotlights
   - Quarterly product update posts
   - Weekly writing tips

2. **Document content creation workflow**:
   - How to create a new blog post
   - Image optimization guidelines (WebP format)
   - SEO best practices
   - Review and approval process

3. **Set up Nuxt Studio** (optional):
   - Enable visual editing for non-technical team members
   - Connect to GitHub repository
   - Configure content previews
   - [Studio Setup Docs](https://content.nuxt.com/docs/studio/setup)

4. **Content migration checklist**:
   - [ ] Migrate 7 author spotlight posts
   - [ ] Update image paths and optimize images
   - [ ] Add proper frontmatter to all posts
   - [ ] Test all links and embeds
   - [ ] Verify SEO metadata

---

## Technical Considerations

### TypeScript Integration

Nuxt Content v3 automatically generates TypeScript types from your collection schemas:

```typescript
// Auto-generated types available
import type { Post } from "#content/types";

const post: Post = await queryCollection("posts").first();
```

### SQL Storage (Production)

In production, Nuxt Content v3 uses SQL-based storage for optimal performance:

- **Zero configuration required**
- **Supports serverless and edge deployments**
- **Ultra-fast data retrieval**
- Works seamlessly with static generation

### Image Optimization

1. **Use WebP format** for all blog images
2. **Optimize images** before uploading (use tools like Squoosh)
3. **Use Nuxt Image** for responsive images:

```vue
<NuxtImg
  :src="post.coverImage"
  :alt="post.title"
  width="800"
  height="450"
  format="webp"
  quality="80"
  loading="lazy"
/>
```

### Performance Optimization

1. **Lazy load images** below the fold
2. **Implement pagination** if post count exceeds 50
3. **Use `queryCollection().limit()`** for large datasets
4. **Cache frequently accessed data** with `useAsyncData`

---

## Testing Checklist

### Functionality

- [ ] Blog index page loads with all published posts
- [ ] Category filtering works correctly
- [ ] Individual post pages load with full content
- [ ] Related posts display correctly
- [ ] Drafts are excluded from production
- [ ] Pagination works (if implemented)
- [ ] Search returns relevant results (if implemented)

### Responsive Design

- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Images scale properly
- [ ] Typography is readable at all sizes

### SEO

- [ ] Meta titles and descriptions are present
- [ ] Open Graph tags are correct
- [ ] Canonical URLs are set
- [ ] Structured data for articles (optional)
- [ ] RSS feed validates
- [ ] Sitemap includes blog URLs

### Performance

- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Images are optimized
- [ ] No layout shift

### Content

- [ ] All links work
- [ ] Images display correctly
- [ ] Code blocks render properly
- [ ] Author info is accurate
- [ ] Dates format correctly

---

## Timeline Estimate

| Phase                       | Duration   | Priority |
| --------------------------- | ---------- | -------- |
| Phase 1: Schema Enhancement | 2 hours    | High     |
| Phase 2: Content Creation   | 4-6 hours  | High     |
| Phase 3: Blog Index Page    | 6-8 hours  | High     |
| Phase 4: Post Page          | 6-8 hours  | High     |
| Phase 5: Components         | 4-6 hours  | High     |
| Phase 6: Advanced Features  | 8-10 hours | Medium   |
| Phase 7: Deployment         | 2-3 hours  | High     |
| Phase 8: Content Strategy   | Ongoing    | Medium   |

**Total Estimated Time**: 32-43 hours (1 week of focused work)

---

## Success Metrics

- **Content**: 10+ published blog posts within first month
- **Performance**: Lighthouse score > 90
- **Engagement**: Track page views, time on page, bounce rate
- **SEO**: Blog posts indexed by Google within 1 week
- **User Experience**: Mobile-friendly, fast load times, easy navigation

---

## Next Steps

1. **Review and approve this plan** with the team
2. **Start with Phase 1** (Schema Enhancement)
3. **Migrate existing author spotlights** (Phase 2)
4. **Build blog index and post pages** (Phases 3-4)
5. **Launch MVP** with 7 migrated posts
6. **Iterate** with advanced features (Phase 6)

---

## Resources

- [Nuxt Content v3 Documentation](https://content.nuxt.com/docs/getting-started)
- [Collections Guide](https://content.nuxt.com/docs/collections/define)
- [Query Utilities](https://content.nuxt.com/docs/query-utils/query-collection)
- [Full-Text Search](https://content.nuxt.com/docs/advanced/full-text-search)
- [Nuxt Studio Setup](https://content.nuxt.com/docs/studio/setup)
- [Migration from v2 to v3](https://content.nuxt.com/docs/getting-started/migration)

---

## Questions & Decisions Needed

1. **Content Focus**: What's the primary blog content mix?
   - 50% Author Spotlights
   - 25% Writing Tips
   - 15% Product Updates
   - 10% Community Stories

2. **Publishing Frequency**: How often will new posts be published?
   - Suggestion: 2-4 posts per month

3. **Comments**: Do we want to add a commenting system?
   - Options: Disqus, Giscus (GitHub Discussions), or none

4. **Newsletter Integration**: Should blog posts link to a newsletter signup?
   - If yes, integrate with Mailgun or email service

5. **Author Permissions**: Will multiple team members create content?
   - If yes, consider Nuxt Studio for easier collaboration
