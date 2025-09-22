<!-- components/section/Blog.vue -->
<script setup lang="ts">
import { computed } from "vue";

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
  title?: string; // For list layout
  description?: string; // For list layout
  featuredPost?: BlogPost; // For home layout
  posts: BlogPost[];
}

interface Props {
  variant: "home" | "list";
  content: BlogContent;
}

const props = defineProps<Props>();

const isHomeLayout = computed(() => props.variant === "home");
const isListLayout = computed(() => props.variant === "list");
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
          :datetime="content.featuredPost?.datetime"
          class="block text-sm/6 text-gray-600"
          >{{ content.featuredPost?.date }}</time
        >
        <h2
          id="featured-post"
          class="mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
        >
          {{ content.featuredPost?.title }}
        </h2>
        <p class="mt-4 text-lg/8 text-gray-600">
          {{ content.featuredPost?.description }}
        </p>
        <div
          class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col"
        >
          <div class="flex">
            <a
              :href="content.featuredPost?.href"
              class="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500"
              aria-describedby="featured-post"
              >Continue reading <span aria-hidden="true">&rarr;</span></a
            >
          </div>
          <div class="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
            <a
              :href="content.featuredPost?.author.href"
              class="flex gap-x-2.5 text-sm/6 font-semibold text-gray-900"
            >
              <img
                :src="content.featuredPost?.author.imageUrl"
                alt=""
                class="size-6 flex-none rounded-full bg-gray-50"
              />
              {{ content.featuredPost?.author.name }}
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
