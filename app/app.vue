<template>
  <div class="font-sans antialiased">
    <NuxtRouteAnnouncer />
    <LayoutHeader />
    <NuxtPage />
    <SectionNewsletter />
    <LayoutFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Novelize",
  meta: [{ name: "description", content: "Simple Novel Writing App" }],
  htmlAttrs: {
    lang: "en",
    class: "bg-white",
  },
});
</script>
