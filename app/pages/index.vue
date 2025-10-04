<script setup lang="ts">
const appConfig = useAppConfig();

if (appConfig.seo?.home) {
  useSeoMeta({
    title: appConfig.seo.home.title,
    description: appConfig.seo.home.description,
    ogTitle: appConfig.seo.home.title,
    ogDescription: appConfig.seo.home.description,
    ogImage: "https://getnovelize.com/screenshot.webp",
    ogUrl: "https://getnovelize.com",
    twitterCard: "summary_large_image",
    twitterTitle: appConfig.seo.home.title,
    twitterDescription: appConfig.seo.home.description,
    twitterImage: "https://getnovelize.com/screenshot.webp",
  });
}
</script>

<template>
  <SectionsHero />
  <SectionsCredibility />
  <SectionsFeaturesHome />
  <SectionsGlobalCTA
    title="Ready to start your book?"
    description="Join thousands of writers drafting their stories in Novelize."
    ctaText="Start your novel today"
    ctaHref="https://app.getnovelize.com/register"
  />
</template>
