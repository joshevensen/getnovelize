# Component Consolidation Plan: Reduce Duplication & Improve Reusability

## Overview

Identify and consolidate similar section components to reduce duplication, improve maintainability, and create more flexible, reusable components.

## Current State Analysis

### Potential Consolidation Opportunities

#### 1. Hero Components

**Current:** `HeroHome.vue` + `HeroPage.vue`
**Similarities:**

- Both have badge, title, description
- Similar layout structure
- Same styling patterns

**Differences:**

- `HeroHome` has announcement banner, buttons, image
- `HeroPage` is simpler (centered, no image)
- Different layouts (split vs centered)

**Consolidation Strategy:**

- Create single `Hero.vue` component with `variant` prop
- Use conditional rendering for different layouts
- Maintain type safety with union types

#### 2. Feature Components

**Current:** `FeatureHome.vue` + `FeatureList.vue` + `FeatureMainLeft.vue` + `FeatureMainRight.vue`
**Similarities:**

- All display features with icons, names, descriptions
- Similar data structure (name, description, icon)
- Common styling patterns

**Differences:**

- Layout: grid vs list vs split-screen
- Number of features displayed
- Image positioning (left/right/none)

**Consolidation Strategy:**

- Create single `Features.vue` component with layout variants
- Use `layout` prop to control rendering
- Support different grid configurations

#### 3. Blog Components

**Current:** `BlogHome.vue` + `BlogList.vue`
**Similarities:**

- Both display blog posts with similar data structure
- Same post properties: title, description, date, author
- Common styling patterns for post cards

**Differences:**

- `BlogHome` has featured post + list layout (split design)
- `BlogList` has grid layout with images and categories
- Different post data structure (BlogList has imageUrl, category, role)
- Different visual layouts (featured vs grid)

**Consolidation Strategy:**

- Create single `Blog.vue` component with layout variants
- Use `layout` prop to control rendering (`home` vs `list`)
- Support optional featured post for home layout
- Flexible post data structure to accommodate both formats

## Phase 1: Hero Component Consolidation

### 1.1 Create Unified Hero Interface

```typescript
// types/hero-content.ts
interface HeroContent {
  variant: "home" | "page";
  badge: string;
  title: string;
  description: string;
  // Optional fields for home variant
  announcement?: {
    badge: string;
    text: string;
    href: string;
  };
  buttons?: Array<{
    text: string;
    href: string;
    primary: boolean;
  }>;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}
```

### 1.2 Create Unified Hero Component

```vue
<!-- components/section/Hero.vue -->
<script setup lang="ts">
import { computed } from "vue";
import Icon from "~/components/ui/Icon.vue";

interface Props {
  content: HeroContent;
}

const props = defineProps<Props>();

const isHomeVariant = computed(() => props.content.variant === "home");
const hasAnnouncement = computed(
  () => props.content.announcement && isHomeVariant.value
);
const hasButtons = computed(() => props.content.buttons && isHomeVariant.value);
const hasImage = computed(() => props.content.image && isHomeVariant.value);
</script>

<template>
  <!-- Home Hero Layout -->
  <div
    v-if="isHomeVariant"
    class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40"
  >
    <div class="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
      <!-- Announcement Banner -->
      <div v-if="hasAnnouncement" class="mt-24 sm:mt-32 lg:mt-16">
        <a :href="content.announcement.href" class="inline-flex space-x-6">
          <span
            class="rounded-full bg-indigo-50 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/20 ring-inset"
          >
            {{ content.announcement.badge }}
          </span>
          <span
            class="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600"
          >
            <span>{{ content.announcement.text }}</span>
            <Icon
              name="chevron-right"
              :size="20"
              class="size-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </a>
      </div>

      <!-- Main Content -->
      <h1
        class="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl"
      >
        {{ content.title }}
      </h1>
      <p
        class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
      >
        {{ content.description }}
      </p>

      <!-- Buttons -->
      <div v-if="hasButtons" class="mt-10 flex items-center gap-x-6">
        <a
          v-for="button in content.buttons"
          :key="button.text"
          :href="button.href"
          :class="
            button.primary
              ? 'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              : 'text-sm/6 font-semibold text-gray-900'
          "
        >
          {{ button.text }}
          <span v-if="!button.primary" aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <!-- Hero Image -->
    <div
      v-if="hasImage"
      class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32"
    >
      <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
        <img
          :src="content.image.src"
          :alt="content.image.alt"
          :width="content.image.width"
          :height="content.image.height"
          class="w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
        />
      </div>
    </div>
  </div>

  <!-- Page Hero Layout -->
  <div v-else class="px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <p class="text-base/7 font-semibold text-indigo-600">
        {{ content.badge }}
      </p>
      <h2
        class="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
      >
        {{ content.title }}
      </h2>
      <p
        class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
      >
        {{ content.description }}
      </p>
    </div>
  </div>
</template>
```

### 1.3 Update Page Components

```vue
<!-- pages/index.vue -->
<script setup>
const heroContent = {
  variant: "home",
  badge: "What's new",
  title: "Turn your ideas into stories",
  description: "A clean, focused writing space built for storytellers...",
  announcement: {
    badge: "What's new",
    text: "Just shipped v1.0",
    href: "#",
  },
  buttons: [{ text: "Start your free 30-day trial", href: "#", primary: true }],
  image: {
    src: "https://example.com/app-screenshot.png",
    alt: "Novelize app screenshot",
  },
};
</script>

<template>
  <SectionHero :content="heroContent" />
  <!-- ... other sections -->
</template>
```

```vue
<!-- pages/about.vue -->
<script setup>
const heroContent = {
  variant: "page",
  badge: "About us",
  title: "Built by a developer, shaped by writers",
  description: "Novelize started as a simple side project...",
};
</script>

<template>
  <SectionHero :content="heroContent" />
  <!-- ... other sections -->
</template>
```

## Phase 2: Feature Components Consolidation

### 2.1 Create Unified Feature Interface

```typescript
// types/feature-content.ts
interface FeatureItem {
  name: string;
  description: string;
  icon: string;
  href?: string;
}

interface FeatureContent {
  layout: "home" | "list" | "main-left" | "main-right";
  title?: string;
  description?: string;
  badge?: string;
  features: FeatureItem[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}
```

### 2.2 Create Unified Feature Component

```vue
<!-- components/section/Features.vue -->
<script setup lang="ts">
import { computed } from "vue";
import Icon from "~/components/ui/Icon.vue";

interface Props {
  content: FeatureContent;
}

const props = defineProps<Props>();

const isHomeLayout = computed(() => props.content.layout === "home");
const isListLayout = computed(() => props.content.layout === "list");
const isMainLeftLayout = computed(() => props.content.layout === "main-left");
const isMainRightLayout = computed(() => props.content.layout === "main-right");
const hasImage = computed(
  () =>
    props.content.image && (isMainLeftLayout.value || isMainRightLayout.value)
);
</script>

<template>
  <!-- Home Layout -->
  <div v-if="isHomeLayout" class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2
          class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
        >
          {{ content.title }}
        </h2>
        <p class="mt-6 text-lg/8 text-gray-600">
          {{ content.description }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="feature in content.features"
            :key="feature.name"
            class="flex flex-col"
          >
            <dt class="text-base/7 font-semibold text-gray-900">
              <div
                class="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <Icon
                  :name="feature.icon"
                  :size="24"
                  class="size-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <p v-if="feature.href" class="mt-6">
                <a
                  :href="feature.href"
                  class="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- List Layout -->
  <div v-else-if="isListLayout" class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base/7 font-semibold text-indigo-600">
          {{ content.badge }}
        </h2>
        <p
          class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
        >
          {{ content.title }}
        </p>
        <p class="mt-6 text-lg/8 text-gray-700">
          {{ content.description }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in content.features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base/7 font-semibold text-gray-900">
              <div
                class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <Icon
                  :name="feature.icon"
                  :size="24"
                  class="size-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base/7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- Main Layout (Left/Right) -->
  <div
    v-else-if="isMainLeftLayout || isMainRightLayout"
    class="overflow-hidden py-24 sm:py-32"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <!-- Content Side -->
        <div
          :class="
            isMainLeftLayout ? 'lg:ml-auto lg:pt-4 lg:pl-4' : 'lg:pt-4 lg:pr-8'
          "
        >
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-indigo-600">
              {{ content.badge }}
            </h2>
            <p
              class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
            >
              {{ content.title }}
            </p>
            <p class="mt-6 text-lg/8 text-gray-600">
              {{ content.description }}
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none"
            >
              <div
                v-for="feature in content.features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-gray-900">
                  <Icon
                    :name="feature.icon"
                    :size="20"
                    class="absolute top-1 left-1 size-5 text-indigo-600"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Image Side -->
        <div
          :class="
            isMainLeftLayout
              ? 'flex items-start justify-end lg:order-first'
              : ''
          "
        >
          <img
            v-if="hasImage"
            :src="content.image.src"
            :alt="content.image.alt"
            :width="content.image.width"
            :height="content.image.height"
            :class="
              isMainLeftLayout
                ? 'w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 dark:hidden dark:ring-white/10'
                : 'w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 not-dark:hidden sm:w-228 md:-ml-4 lg:-ml-0 dark:ring-white/10'
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
```

## Phase 3: Blog Component Consolidation

### 3.1 Create Unified Blog Interface

```typescript
// types/blog-content.ts
interface BlogAuthor {
  name: string;
  href: string;
  imageUrl: string;
  role?: string; // Optional for BlogList layout
}

interface BlogPost {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  author: BlogAuthor;
  // Optional fields for list layout
  imageUrl?: string;
  category?: {
    title: string;
    href: string;
  };
}

interface BlogContent {
  layout: "home" | "list";
  title?: string; // For list layout
  description?: string; // For list layout
  featuredPost?: BlogPost; // For home layout
  posts: BlogPost[];
}
```

### 3.2 Create Unified Blog Component

```vue
<!-- components/section/Blog.vue -->
<script setup lang="ts">
import { computed } from "vue";

interface Props {
  content: BlogContent;
}

const props = defineProps<Props>();

const isHomeLayout = computed(() => props.content.layout === "home");
const isListLayout = computed(() => props.content.layout === "list");
const hasFeaturedPost = computed(
  () => props.content.featuredPost && isHomeLayout.value
);
</script>

<template>
  <!-- Home Layout (Featured + List) -->
  <div v-if="isHomeLayout" class="py-24 sm:py-32">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8"
    >
      <!-- Featured Post -->
      <article
        v-if="hasFeaturedPost"
        class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg"
      >
        <time
          :datetime="content.featuredPost.datetime"
          class="block text-sm/6 text-gray-600"
          >{{ content.featuredPost.date }}</time
        >
        <h2
          id="featured-post"
          class="mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
        >
          {{ content.featuredPost.title }}
        </h2>
        <p class="mt-4 text-lg/8 text-gray-600">
          {{ content.featuredPost.description }}
        </p>
        <div
          class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col"
        >
          <div class="flex">
            <a
              :href="content.featuredPost.href"
              class="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500"
              aria-describedby="featured-post"
              >Continue reading <span aria-hidden="true">&rarr;</span></a
            >
          </div>
          <div class="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
            <a
              :href="content.featuredPost.author.href"
              class="flex gap-x-2.5 text-sm/6 font-semibold text-gray-900"
            >
              <img
                :src="content.featuredPost.author.imageUrl"
                alt=""
                class="size-6 flex-none rounded-full bg-gray-50"
              />
              {{ content.featuredPost.author.name }}
            </a>
          </div>
        </div>
      </article>

      <!-- Recent Posts List -->
      <div
        class="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0"
      >
        <div class="-my-12 divide-y divide-gray-900/10">
          <article v-for="post in content.posts" :key="post.id" class="py-12">
            <div class="group relative max-w-xl">
              <time
                :datetime="post.datetime"
                class="block text-sm/6 text-gray-600"
                >{{ post.date }}</time
              >
              <h2
                class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600"
              >
                <a :href="post.href">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </a>
              </h2>
              <p class="mt-4 text-sm/6 text-gray-600">
                {{ post.description }}
              </p>
            </div>
            <div class="mt-4 flex">
              <a
                :href="post.author.href"
                class="relative flex gap-x-2.5 text-sm/6 font-semibold text-gray-900"
              >
                <img
                  :src="post.author.imageUrl"
                  alt=""
                  class="size-6 flex-none rounded-full bg-gray-50"
                />
                {{ post.author.name }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

  <!-- List Layout (Grid with Images) -->
  <div v-else-if="isListLayout" class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl"
        >
          {{ content.title }}
        </h2>
        <p class="mt-2 text-lg/8 text-gray-600">
          {{ content.description }}
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in content.posts"
          :key="post.id"
          class="flex flex-col items-start justify-between"
        >
          <div class="relative w-full">
            <img
              v-if="post.imageUrl"
              :src="post.imageUrl"
              alt=""
              class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
            />
            <div
              class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10"
            />
          </div>
          <div class="flex max-w-xl grow flex-col justify-between">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-gray-500">{{
                post.date
              }}</time>
              <a
                v-if="post.category"
                :href="post.category.href"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >{{ post.category.title }}</a
              >
            </div>
            <div class="group relative grow">
              <h3
                class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600"
              >
                <a :href="post.href">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                {{ post.description }}
              </p>
            </div>
            <div
              class="relative mt-8 flex items-center gap-x-4 justify-self-end"
            >
              <img
                :src="post.author.imageUrl"
                alt=""
                class="size-10 rounded-full bg-gray-100"
              />
              <div class="text-sm/6">
                <p class="font-semibold text-gray-900">
                  <a :href="post.author.href">
                    <span class="absolute inset-0" />
                    {{ post.author.name }}
                  </a>
                </p>
                <p v-if="post.author.role" class="text-gray-600">
                  {{ post.author.role }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
```

### 3.3 Update Page Components

```vue
<!-- pages/index.vue -->
<script setup>
const blogContent = {
  layout: "home",
  featuredPost: {
    id: 1,
    title:
      "We're incredibly proud to announce we have secured $75m in Series B",
    href: "#",
    description: "Libero neque aenean tincidunt nec consequat tempor...",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      href: "#",
      imageUrl: "https://example.com/michael.jpg",
    },
  },
  posts: [
    {
      id: 2,
      title: "Boost your conversion rate",
      href: "#",
      description: "Illo sint voluptas. Error voluptates culpa eligendi...",
      date: "Mar 10, 2020",
      datetime: "2020-03-16",
      author: {
        name: "Lindsay Walton",
        href: "#",
        imageUrl: "https://example.com/lindsay.jpg",
      },
    },
    // ... more posts
  ],
};
</script>

<template>
  <SectionHero :content="heroContent" />
  <SectionTestimonials :content="testimonialsContent" />
  <SectionFeatures :content="featuresContent" />
  <SectionBlog :content="blogContent" />
  <SectionCTA :content="ctaContent" />
</template>
```

```vue
<!-- pages/blog/index.vue -->
<script setup>
const blogContent = {
  layout: "list",
  title: "From the blog",
  description: "Learn how to grow your business with our expert advice.",
  posts: [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description: "Illo sint voluptas. Error voluptates culpa eligendi...",
      imageUrl: "https://example.com/post1.jpg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl: "https://example.com/michael.jpg",
      },
    },
    // ... more posts
  ],
};
</script>

<template>
  <SectionHero :content="heroContent" />
  <SectionBlog :content="blogContent" />
</template>
```

## Phase 4: Implementation Steps

### Step 1: Hero Component Consolidation

- [ ] Create `types/hero-content.ts` interface
- [ ] Create unified `components/section/Hero.vue`
- [ ] Update `pages/index.vue` to use new Hero component
- [ ] Update `pages/about.vue` to use new Hero component
- [ ] Update `pages/features.vue` to use new Hero component
- [ ] Update `pages/contact.vue` to use new Hero component
- [ ] Update `pages/pricing.vue` to use new Hero component
- [ ] Delete `components/section/HeroHome.vue`
- [ ] Delete `components/section/HeroPage.vue`
- [ ] Test all pages with new Hero component

### Step 2: Feature Component Consolidation

- [ ] Create `types/feature-content.ts` interface
- [ ] Create unified `components/section/Features.vue`
- [ ] Update pages to use new Features component with appropriate layouts
- [ ] Delete `components/section/FeatureHome.vue`
- [ ] Delete `components/section/FeatureList.vue`
- [ ] Delete `components/section/FeatureMainLeft.vue`
- [ ] Delete `components/section/FeatureMainRight.vue`
- [ ] Test all feature sections

### Step 3: Blog Component Consolidation

- [ ] Create `types/blog-content.ts` interface
- [ ] Create unified `components/section/Blog.vue`
- [ ] Update `pages/index.vue` to use new Blog component (home layout)
- [ ] Update `pages/blog/index.vue` to use new Blog component (list layout)
- [ ] Delete `components/section/BlogHome.vue`
- [ ] Delete `components/section/BlogList.vue`
- [ ] Test all blog sections

### Step 4: Content Migration Integration

- [ ] Update content JSON files to use new component structure
- [ ] Update TypeScript interfaces in content migration plan
- [ ] Ensure Nuxt Studio schemas support new component structure

## Benefits of Consolidation

### 1. Reduced Code Duplication

- **Before:** 4 feature components with similar logic
- **After:** 1 feature component with layout variants
- **Before:** 2 hero components with overlapping functionality
- **After:** 1 hero component with variant support
- **Before:** 2 blog components with similar post structures
- **After:** 1 blog component with layout variants

### 2. Improved Maintainability

- Single source of truth for each component type
- Easier to update styling and behavior
- Consistent patterns across all variants

### 3. Better Type Safety

- Unified interfaces for each component type
- Clear variant definitions
- Better IntelliSense support

### 4. Enhanced Flexibility

- Easy to add new layout variants
- Consistent prop structure
- Reusable across different contexts

### 5. Simplified Content Management

- Fewer component types to manage in Nuxt Studio
- Consistent content structure
- Easier for content editors to understand

## Migration Strategy

### Phase 1: Hero Components (Low Risk)

- Start with Hero consolidation as it's most straightforward
- Clear separation between home and page variants
- Minimal impact on existing functionality

### Phase 2: Feature Components (Medium Risk)

- More complex due to multiple layout variations
- Requires careful testing of all layout combinations
- May need iteration based on specific use cases

### Phase 3: Blog Components (Low Risk)

- Similar to hero consolidation - clear layout variants
- Well-defined data structures
- Minimal impact on existing functionality

### Phase 4: Integration Testing

- Test all pages with new components
- Verify content migration compatibility
- Ensure Nuxt Studio schemas work correctly

## Rollback Plan

- Keep original components as backup during transition
- Use feature flags to switch between old/new components
- Maintain parallel component structure during testing
- Gradual migration with fallback options

## Success Metrics

- **Code Reduction:** 8 components → 3 components (62% reduction)
- **Maintainability:** Single source of truth for each component type
- **Type Safety:** Unified interfaces with clear variant definitions
- **Performance:** Reduced bundle size from fewer component files
- **Developer Experience:** Consistent patterns and better IntelliSense
