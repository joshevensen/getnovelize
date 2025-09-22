<script setup>
const { data: pageContent } = await useAsyncData("features-page", () =>
  queryCollection("pages").where("_path", "==", "/features").first()
);
</script>

<template>
  <SectionHero
    :variant="pageContent.hero.variant"
    :content="pageContent.hero.content"
  />
  <SectionFeatures
    v-for="(feature, index) in pageContent.features"
    :key="index"
    :variant="feature.variant"
    :content="feature.content"
  />
  <SectionCTA :content="pageContent.cta" />
</template>
