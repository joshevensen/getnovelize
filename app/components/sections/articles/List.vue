<script setup lang="ts">
import type { Article } from "./types";

// Fetch all articles
const { data: articles } = await useAsyncData("articles", async () =>
  queryCollection("articles").all()
);
</script>

<template>
  <UiContainer>
    <div class="mx-auto max-w-2xl">
      <div
        class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 dark:border-gray-700"
      >
        <SectionsArticlesExcerpt
          v-for="article in (articles as unknown as Article[]) || []"
          :key="article._id"
          :article="article"
        />
      </div>
    </div>
  </UiContainer>
</template>
