<script setup>
const { data: seoData } = await useAsyncData("about-seo", () =>
  queryCollection("seo").first()
);

useSeoMeta({
  title: seoData.value?.about.title,
  description: seoData.value?.about.description,
  ogTitle: seoData.value?.about.title,
  ogDescription: seoData.value?.about.description,
  ogImage: "https://getnovelize.com/screenshot.webp",
  ogUrl: "https://getnovelize.com/about",
  twitterCard: "summary_large_image",
  twitterTitle: seoData.value?.about.title,
  twitterDescription: seoData.value?.about.description,
  twitterImage: "https://getnovelize.com/screenshot.webp",
});
</script>

<template>
  <SectionsGlobalHeader
    title="Every Story Has a Beginning"
    description="We built the writing space we wanted for ourselves — a clean, reliable place to focus on the story."
  />
  <SectionsAbout />
  <SectionsGlobalCTA
    title="Ready to start your story?"
    description="Join thousands of writers already drafting in Novelize."
    ctaText="Start Writing Today"
    ctaHref="https://app.getnovelize.com/register"
  />
</template>
