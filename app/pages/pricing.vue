<script setup>
const { data: pageContent } = await useAsyncData("pricing-page", () =>
  queryCollection("pages").where("_path", "==", "/pricing").first()
);
</script>

<template>
  <SectionHero
    :variant="pageContent.hero.variant"
    :content="pageContent.hero.content"
  />
  <SectionPricing :content="pageContent.pricing" />
  <SectionFAQ :content="pageContent.faq" />
  <SectionCTA :content="pageContent.cta" />
</template>
