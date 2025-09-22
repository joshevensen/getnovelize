<script setup>
const { data: pageContent } = await useAsyncData("blog-page", () =>
  queryCollection("pages").where("_path", "==", "/blog").first()
);
</script>

<template>
  <SectionHero
    :variant="pageContent.hero.variant"
    :content="pageContent.hero.content"
  />
  <SectionBlog
    :variant="pageContent.blog.variant"
    :content="pageContent.blog.content"
  />
  <SectionCTA :content="pageContent.cta" />
</template>
