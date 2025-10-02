<script setup>
const { data: seoData } = await useAsyncData("blog-seo", () =>
  queryCollection("seo").first()
);

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
    <h1>Blog</h1>
  </div>
</template>
