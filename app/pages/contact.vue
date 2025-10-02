<script setup>
const { data: seoData } = await useAsyncData("contact-seo", () =>
  queryCollection("seo").first()
);

useSeoMeta({
  title: seoData.value?.contact.title,
  description: seoData.value?.contact.description,
  ogTitle: seoData.value?.contact.title,
  ogDescription: seoData.value?.contact.description,
  ogImage: "https://getnovelize.com/screenshot.webp",
  ogUrl: "https://getnovelize.com/contact",
  twitterCard: "summary_large_image",
  twitterTitle: seoData.value?.contact.title,
  twitterDescription: seoData.value?.contact.description,
  twitterImage: "https://getnovelize.com/screenshot.webp",
});
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
