<script setup>
const { data: pageContent } = await useAsyncData("home-page", () =>
  queryCollection("pages").where("_path", "==", "/home").first()
);
</script>

<template>
  <SectionHero
    :variant="pageContent.hero.variant"
    :content="pageContent.hero.content"
  />
  <SectionTestimonials :content="pageContent.testimonials" />
  <SectionFeatures
    :variant="pageContent.features.variant"
    :content="pageContent.features.content"
  />
  <SectionCTA :content="pageContent.cta" />
  <SectionBlog
    :variant="pageContent.blog.variant"
    :content="pageContent.blog.content"
  />
</template>
