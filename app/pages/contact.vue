<script setup lang="ts">
const appConfig = useAppConfig();

if (appConfig.seo?.contact) {
  useSeoMeta({
    title: appConfig.seo.contact.title,
    description: appConfig.seo.contact.description,
    ogTitle: appConfig.seo.contact.title,
    ogDescription: appConfig.seo.contact.description,
    ogImage: "https://getnovelize.com/screenshot.webp",
    ogUrl: "https://getnovelize.com/contact",
    twitterCard: "summary_large_image",
    twitterTitle: appConfig.seo.contact.title,
    twitterDescription: appConfig.seo.contact.description,
    twitterImage: "https://getnovelize.com/screenshot.webp",
  });
}
</script>

<template>
  <SectionsGlobalHeader
    title="Talk to the Team"
    description="Have a question, need help, or just want to share your story? We'd love to hear from you."
  />
  <SectionsContact />
  <SectionsGlobalCTA
    title="Want to dive right in?"
    description="While you wait for a reply, you can start writing your novel today."
    ctaText="Start Writing Now"
    ctaHref="https://app.getnovelize.com/register"
  />
</template>
