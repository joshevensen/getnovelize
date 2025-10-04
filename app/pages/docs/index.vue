<script setup lang="ts">
const appConfig = useAppConfig();

if (appConfig.seo?.docs) {
  useSeoMeta({
    title: appConfig.seo.docs.title,
    description: appConfig.seo.docs.description,
    ogTitle: appConfig.seo.docs.title,
    ogDescription: appConfig.seo.docs.description,
    ogImage: "https://getnovelize.com/screenshot.webp",
    ogUrl: "https://getnovelize.com/docs",
    twitterCard: "summary_large_image",
    twitterTitle: appConfig.seo.docs.title,
    twitterDescription: appConfig.seo.docs.description,
    twitterImage: "https://getnovelize.com/screenshot.webp",
  });
}
</script>

<template>
  <SectionsGlobalHeader
    title="Writing Articles & Tips"
    description="Practical advice, writing techniques, and insights to help you become a better writer and finish your stories."
  />
  <SectionsArticlesList />
</template>
