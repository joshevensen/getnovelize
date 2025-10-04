<script setup lang="ts">
const appConfig = useAppConfig();

if (appConfig.seo?.blog) {
  useSeoMeta({
    title: appConfig.seo.blog.title,
    description: appConfig.seo.blog.description,
    ogTitle: appConfig.seo.blog.title,
    ogDescription: appConfig.seo.blog.description,
    ogImage: "https://getnovelize.com/screenshot.webp",
    ogUrl: "https://getnovelize.com/blog",
    twitterCard: "summary_large_image",
    twitterTitle: appConfig.seo.blog.title,
    twitterDescription: appConfig.seo.blog.description,
    twitterImage: "https://getnovelize.com/screenshot.webp",
  });
}
</script>

<template>
  <SectionsGlobalHeader
    title="From the Novelize Team"
    description="Updates, insights, and community highlights from the people building Novelize. Stay connected with the writing tool you trust."
  />
  <SectionsBlogList />
</template>
