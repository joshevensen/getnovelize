<script setup>
const { data: pageContent } = await useAsyncData("about-page", () =>
  queryCollection("pages").where("_path", "==", "/about").first()
);
</script>

<template>
  <SectionHero
    :variant="pageContent.hero.variant"
    :content="pageContent.hero.content"
  />
  <SectionAbout :content="pageContent.about" />
  <SectionCTA :content="pageContent.cta" />
  <SectionTeam :content="pageContent.team" />
</template>
