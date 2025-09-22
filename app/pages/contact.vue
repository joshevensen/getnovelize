<script setup>
const { data: pageContent } = await useAsyncData("contact-page", () =>
  queryCollection("pages").where("_path", "==", "/contact").first()
);
</script>

<template>
  <SectionHero
    :variant="pageContent.hero.variant"
    :content="pageContent.hero.content"
  />
  <SectionContact :content="pageContent.contact" />
  <SectionCTA :content="pageContent.cta" />
</template>
