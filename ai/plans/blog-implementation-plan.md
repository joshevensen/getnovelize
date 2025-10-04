# Blog Implementation Plan

## Overview

This plan outlines the implementation of a fully functional blog system for the Novelize website using **Nuxt Content v3** in a **Nuxt 4** project. The blog will feature author spotlights, writing tips, product updates, and community stories.

**Reference Documentation**: [Nuxt Content v3 Getting Started](https://content.nuxt.com/docs/getting-started)

---

## Current State

### ✅ Already Configured

- **Nuxt Content v3** installed (`@nuxt/content@^3.6.3`)
- **Content Collections** defined in `content.config.ts`
  - `posts` collection with enhanced schema (authorId, category references)
  - `team` collection with centralized team member data
  - `categories` collection with centralized category definitions
  - Type-safe schema using Zod
- **Blog pages** exist in `app/pages/blog/`
  - `index.vue` (blog listing page with SEO)
  - `[slug].vue` (individual post page with dynamic SEO)
- **Content directory** structure:
  - `content/posts/` for blog posts
  - `content/team.json` for team member data (used in posts and About page)
  - `content/categories.json` for post categories
- **Test post** created: "The Rebirth of Novelize"
- **Excerpt support** via `<!--more-->` divider (configured in schema)

---

## Data Structure

### Team Data (`content/team.json`)

Centralized team member data used for:

- Post authors (referenced via `authorId` in frontmatter)
- About page team section

```json
[
  {
    "id": "josh",
    "name": "Josh",
    "role": "Founder, Developer",
    "image": "/josh.png",
    "bio": "...",
    "xUrl": "#",
    "linkedinUrl": "#"
  }
]
```

### Categories Data (`content/categories.json`)

Centralized category definitions:

```json
[
  {
    "id": "author-spotlight",
    "name": "Author Spotlight",
    "description": "Meet the writers in our community"
  },
  {
    "id": "announcements",
    "name": "Announcements",
    "description": "Important news and updates from the team"
  }
]
```

### Post Frontmatter Structure

```markdown
---
title: "Your Post Title"
description: "A compelling 1-2 sentence summary"
publishedAt: "2025-10-02T00:00:00Z"
updatedAt: "2025-10-15T00:00:00Z" # optional
authorId: "josh" # references team.json
category: "announcements" # references categories.json
tags: ["novelize", "team", "updates"]
coverImage: "/screenshot.webp" # optional
featured: true
draft: false
readingTime: 5
seo: # optional
  title: "Custom SEO Title"
  description: "Custom SEO description"
  ogImage: "/custom-og-image.webp"
---

# Your Post Content

Intro paragraph before the excerpt divider.

<!--more-->

Full content after the excerpt divider.
```

---

## Implementation Phases

### Phase 1: Blog Components ✅

**Status**: Ready for implementation

#### Tasks

1. **Create `app/components/sections/blog/Home.vue`**:
   - Blog hero section with title and description
   - Used on `/blog` index page

2. **Create `app/components/sections/blog/List.vue`**:
   - Grid layout for post cards (3 columns desktop, 1 mobile)
   - Pagination controls built-in
   - Accepts `posts` prop
   - No category filtering (simple list only)

3. **Create `app/components/blog/PostCard.vue`**:
   - Cover image (if available)
   - Category badge
   - Title and excerpt
   - Author info (fetched from team collection)
   - Published date
   - Reading time
   - Link to `/blog/[slug]`

---

### Phase 2: Blog Index Page (`/blog`)

**Goal**: Simple paginated blog listing page

#### Tasks

1. **Update `app/pages/blog/index.vue`**:

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

// SEO
useSeoMeta({
  title: seoData.value?.blog.title,
  description: seoData.value?.blog.description,
  ogTitle: seoData.value?.blog.title,
  ogDescription: seoData.value?.blog.description,
  ogImage: "https://getnovelize.com/screenshot.webp",
  ogUrl: "https://getnovelize.com/blog",
  twitterCard: "summary_large_image",
  twitterTitle: seoData.value?.blog.title,
  twitterDescription: seoData.value?.blog.description,
  twitterImage: "https://getnovelize.com/screenshot.webp",
});
</script>

<template>
  <div>
    <SectionsBlogHome />
    <SectionsBlogList :posts="posts" />
    <SectionsGlobalCTA
      title="Ready to write your story?"
      description="Join thousands of authors using Novelize to finish their novels."
      ctaText="Start Writing Today"
      ctaHref="https://app.getnovelize.com/register"
    />
  </div>
</template>
```

**Features:**

- No featured post section
- No category filtering
- Simple paginated list (pagination inside `List.vue`)
- CTA at bottom

---

### Phase 3: Individual Blog Post Page (`/blog/[slug]`)

**Goal**: Beautiful, readable blog post template using section components

#### Tasks

1. **Create `app/components/sections/post/Header.vue`**:
   - Category badge
   - Post title
   - Author info (avatar, name, role)
   - Published date & reading time
   - Cover image (if available)

2. **Create `app/components/sections/post/Author.vue`**:
   - Author bio section
   - Display full author info from team collection
   - Avatar, name, role, bio

3. **Create `app/components/sections/post/RelatedPosts.vue`**:
   - Grid of 3 related posts (same category)
   - Uses `BlogPostCard` component
   - Title: "Related Stories"

4. **Update `app/pages/blog/[slug].vue`**:

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

// Get author from team collection
const { data: team } = await useAsyncData("team", () =>
  queryCollection("team").first()
);

const author = computed(() => {
  if (!team.value || !post.value) return null;
  return team.value.find((member) => member.id === post.value.authorId);
});

// Get category name from categories collection
const { data: categories } = await useAsyncData("categories", () =>
  queryCollection("categories").first()
);

const category = computed(() => {
  if (!categories.value || !post.value) return null;
  return categories.value.find((cat) => cat.id === post.value.category);
});

// Get related posts (same category, exclude current)
const { data: relatedPosts } = await useAsyncData(`related-${slug}`, () =>
  queryCollection("posts")
    .where("category", "==", post.value.category)
    .where("_path", "!=", `/posts/${slug}`)
    .where("draft", "!=", true)
    .limit(3)
    .all()
);

// SEO from post frontmatter
useSeoMeta({
  title: post.value.seo?.title || post.value.title,
  description: post.value.seo?.description || post.value.description,
  ogTitle: post.value.seo?.title || post.value.title,
  ogDescription: post.value.seo?.description || post.value.description,
  ogImage:
    post.value.seo?.ogImage ||
    post.value.coverImage ||
    "https://getnovelize.com/screenshot.webp",
  ogUrl: `https://getnovelize.com/blog/${slug}`,
  ogType: "article",
  articlePublishedTime: post.value.publishedAt,
  articleModifiedTime: post.value.updatedAt,
  articleAuthor: author.value?.name,
  articleTag: post.value.tags,
  twitterCard: "summary_large_image",
  twitterTitle: post.value.seo?.title || post.value.title,
  twitterDescription: post.value.seo?.description || post.value.description,
  twitterImage:
    post.value.seo?.ogImage ||
    post.value.coverImage ||
    "https://getnovelize.com/screenshot.webp",
});
</script>

<template>
  <article>
    <SectionsPostHeader :post="post" :author="author" :category="category" />

    <!-- Article Content -->
    <UiContainer size="md" class="mt-16">
      <div
        class="mx-auto max-w-3xl prose prose-lg prose-gray prose-headings:font-serif prose-headings:text-parchment-900 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
      >
        <ContentRenderer :value="post" />
      </div>
    </UiContainer>

    <SectionsPostAuthor :author="author" />

    <SectionsPostRelatedPosts
      v-if="relatedPosts?.length"
      :posts="relatedPosts"
    />

    <SectionsGlobalCTA
      title="Inspired to write your own story?"
      description="Join our community of authors and start drafting your novel today."
      ctaText="Start Writing"
      ctaHref="https://app.getnovelize.com/register"
    />
  </article>
</template>
```

---

### Phase 4: Prose Component Styling

**Goal**: Update prose components with proper Tailwind styling (no `main.css` styling)

#### Tasks

1. **Update `app/components/content/ProseH1.vue`** - Add heading styles
2. **Update `app/components/content/ProseH2.vue`** - Add heading styles
3. **Update `app/components/content/ProseH3.vue`** - Add heading styles
4. **Update `app/components/content/ProseP.vue`** - Add paragraph styles
5. **Update `app/components/content/ProseA.vue`** - Add link styles (orange accent)
6. **Update `app/components/content/ProseBlockquote.vue`** - Add blockquote styles
7. **Update `app/components/content/ProsePre.vue`** - Add code block styles
8. **Update `app/components/content/ProseImg.vue`** - Add image styles with captions
9. **Update `app/components/content/ProseUl.vue`** and **`ProseOl.vue`** - Add list styles

**Styling Guidelines:**

- All styling via Tailwind classes (no external CSS)
- Use orange accent color for links and highlights
- Proper typography for long-form content
- Ensure readability on all devices

---

### Phase 5: Utility Functions

**Goal**: Helper functions for common tasks

#### Tasks

1. **Create `utils/formatDate.ts`**:

```typescript
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
```

2. **Create `utils/getExcerpt.ts`** (if needed):

```typescript
export function getExcerpt(post: any): string {
  // Extract text from excerpt AST if available
  if (post.excerpt?.children) {
    // ... extract text from children nodes
  }
  return post.description;
}
```

---

### Phase 6: Static Site Generation & Deployment

**Goal**: Ensure all blog routes are pre-rendered

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

---

### Phase 7: Nuxt Studio Setup

**Goal**: Enable visual editing for non-technical team members

#### Tasks

1. **Connect to Nuxt Studio**:
   - Follow [Studio Setup Docs](https://content.nuxt.com/docs/studio/setup)
   - Enable visual editing for markdown files
   - Configure content previews

2. **Configure Studio permissions**:
   - Set up GitHub integration
   - Configure branch protection
   - Set up preview deployments

3. **Document Studio workflow**:
   - How to create new posts
   - How to edit existing posts
   - How to add images
   - How to preview changes

---

## Technical Considerations

### TypeScript Integration

Nuxt Content v3 automatically generates TypeScript types:

```typescript
// Auto-generated types available
import type { Post } from "#content/types";

// Usage in components
const post: Post = await queryCollection("posts").first();
```

### Author Lookup Pattern

Posts reference authors via `authorId`, then lookup from team collection:

```typescript
const { data: team } = await useAsyncData("team", () =>
  queryCollection("team").first()
);

const author = computed(() => {
  return team.value?.find((member) => member.id === post.value.authorId);
});
```

### Category Lookup Pattern

Posts reference categories via `category` string, then lookup from categories collection:

```typescript
const { data: categories } = await useAsyncData("categories", () =>
  queryCollection("categories").first()
);

const categoryName = computed(() => {
  return categories.value?.find((cat) => cat.id === post.value.category)?.name;
});
```

### Image Optimization

1. **Use WebP format** for all blog images
2. **Optimize images** before uploading
3. **Store images** in `public/images/posts/`
4. **Reference in markdown**: `/images/posts/image-name.webp`

---

## Testing Checklist

### Functionality

- [ ] Blog index page loads with all published posts
- [ ] Individual post pages load with full content
- [ ] Related posts display correctly
- [ ] Drafts are excluded from production
- [ ] Author info displays correctly (from team.json)
- [ ] Category names display correctly (from categories.json)
- [ ] Excerpt displays correctly (from `<!--more-->` divider)
- [ ] Pagination works

### Responsive Design

- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Images scale properly
- [ ] Typography is readable at all sizes

### SEO

- [ ] Meta titles and descriptions from post frontmatter
- [ ] Open Graph tags are correct
- [ ] Article metadata is present
- [ ] Cover images display in social previews

### Performance

- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Images are optimized
- [ ] No layout shift

### Content

- [ ] All links work
- [ ] Images display correctly
- [ ] Prose components render properly
- [ ] Author info is accurate
- [ ] Dates format correctly

---

## Timeline Estimate

| Phase                      | Duration  | Priority |
| -------------------------- | --------- | -------- |
| Phase 1: Blog Components   | 4-6 hours | High     |
| Phase 2: Blog Index Page   | 2-3 hours | High     |
| Phase 3: Post Page         | 4-6 hours | High     |
| Phase 4: Prose Components  | 3-4 hours | High     |
| Phase 5: Utility Functions | 1 hour    | Medium   |
| Phase 6: Deployment        | 2-3 hours | High     |
| Phase 7: Nuxt Studio       | 2-3 hours | Medium   |

**Total Estimated Time**: 18-26 hours

---

## Success Metrics

- **Content**: 10+ published blog posts within first month
- **Performance**: Lighthouse score > 90
- **SEO**: Blog posts indexed by Google within 1 week
- **User Experience**: Mobile-friendly, fast load times, easy navigation

---

## Next Steps

1. ✅ **Phase 1 Complete**: Schema enhancement, test post created
2. **Start Phase 2**: Create blog section components (`blog/Home.vue`, `blog/List.vue`, `BlogPostCard.vue`)
3. **Continue to Phase 3**: Create post section components (`post/Header.vue`, `post/Author.vue`, `post/RelatedPosts.vue`)
4. **Update prose components** with Tailwind styling
5. **Test and deploy** MVP
6. **Set up Nuxt Studio** for team collaboration

---

## Resources

- [Nuxt Content v3 Documentation](https://content.nuxt.com/docs/getting-started)
- [Collections Guide](https://content.nuxt.com/docs/collections/define)
- [Query Utilities](https://content.nuxt.com/docs/query-utils/query-collection)
- [Markdown Excerpt Feature](https://content.nuxt.com/docs/files/markdown#excerpt)
- [Nuxt Studio Setup](https://content.nuxt.com/docs/studio/setup)

---

## File Structure

```
content/
├── team.json              # Centralized team data
├── categories.json        # Centralized categories
├── posts/
│   └── the-rebirth-of-novelize.md
└── seo.json              # Page-level SEO (not for posts)

app/
├── components/
│   ├── blog/
│   │   └── PostCard.vue
│   ├── sections/
│   │   ├── blog/
│   │   │   ├── Home.vue
│   │   │   └── List.vue
│   │   └── post/
│   │       ├── Header.vue
│   │       ├── Author.vue
│   │       └── RelatedPosts.vue
│   └── content/          # Prose components
│       ├── ProseH1.vue
│       ├── ProseH2.vue
│       └── ...
└── pages/
    └── blog/
        ├── index.vue
        └── [slug].vue
```
