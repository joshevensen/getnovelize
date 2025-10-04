<script setup lang="ts">
const appConfig = useAppConfig();

if (appConfig.seo?.about) {
  useSeoMeta({
    title: appConfig.seo.about.title,
    description: appConfig.seo.about.description,
    ogTitle: appConfig.seo.about.title,
    ogDescription: appConfig.seo.about.description,
    ogImage: "https://getnovelize.com/screenshot.webp",
    ogUrl: "https://getnovelize.com/about",
    twitterCard: "summary_large_image",
    twitterTitle: appConfig.seo.about.title,
    twitterDescription: appConfig.seo.about.description,
    twitterImage: "https://getnovelize.com/screenshot.webp",
  });
}
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
