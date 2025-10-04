<script setup lang="ts">
import type { Post, Author } from "./types";

interface Props {
  post: Post;
}

const props = defineProps<Props>();

// Fetch specific author based on the post's authorId
const { data: author } = await useAsyncData(
  `author-${props.post.authorId}`,
  () => queryCollection("team").where("id", "=", props.post.authorId).first()
);

// Computed property to format date
const formattedDate = computed(() => {
  const date = new Date(props.post.publishedAt);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
});

// Computed property to get excerpt text
const excerptText = computed(() => {
  if (props.post.excerpt?.children) {
    // Extract text from excerpt AST
    const extractText = (children: any[]): string => {
      return children
        .map((child) => {
          if (child.type === "text") return child.value;
          if (child.children) return extractText(child.children);
          return "";
        })
        .join("");
    };
    return extractText(props.post.excerpt.children);
  }
  return props.post.description;
});

// Computed property for post slug
const postSlug = computed(() => {
  return props.post._path.split("/").pop();
});
</script>

<template>
  <article class="flex max-w-xl flex-col items-start justify-between">
    <div class="flex items-center gap-x-4 text-xs">
      <time
        :datetime="post.publishedAt"
        class="text-gray-500 dark:text-gray-400"
      >
        {{ formattedDate }}
      </time>
    </div>

    <div class="group relative">
      <h3
        class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300"
      >
        <NuxtLink :to="`/blog/${postSlug}`">
          <span class="absolute inset-0" />
          {{ post.title }}
        </NuxtLink>
      </h3>
      <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">
        {{ excerptText }}
      </p>
    </div>

    <div class="relative mt-8 flex items-center gap-x-4">
      <img
        v-if="author?.image"
        :src="author.image"
        :alt="author.name"
        class="size-10 rounded-full bg-gray-50 dark:bg-gray-800"
      />
      <div class="text-sm/6">
        <p class="font-semibold text-gray-900 dark:text-white">
          {{ author?.name }}
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          {{ author?.role }}
        </p>
      </div>
    </div>
  </article>
</template>
