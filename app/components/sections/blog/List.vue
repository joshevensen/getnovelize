<script setup lang="ts">
import type { Post } from "./types";

const { data: posts } = await useAsyncData("blog-posts", async () =>
  queryCollection("posts").all()
);
</script>

<template>
  <UiContainer>
    <div class="mx-auto max-w-2xl">
      <div
        class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16"
      >
        <SectionsBlogExcerpt
          v-for="post in (posts as unknown as Post[]) || []"
          :key="post._id"
          :post="post"
        />
      </div>
    </div>
  </UiContainer>
</template>
