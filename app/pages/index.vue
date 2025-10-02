<script setup>
const { data: seoData } = await useAsyncData("home-seo", () =>
  queryCollection("seo").first()
);

useSeoMeta({
  title: seoData.value?.home.title,
  description: seoData.value?.home.description,
  ogTitle: seoData.value?.home.title,
  ogDescription: seoData.value?.home.description,
  ogImage: "https://getnovelize.com/screenshot.webp",
  ogUrl: "https://getnovelize.com",
  twitterCard: "summary_large_image",
  twitterTitle: seoData.value?.home.title,
  twitterDescription: seoData.value?.home.description,
  twitterImage: "https://getnovelize.com/screenshot.webp",
});
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
