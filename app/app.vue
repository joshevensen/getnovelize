<script setup>
useHead({
  title: "Novelize",
  meta: [{ name: "description", content: "Simple Novel Writing App" }],
  htmlAttrs: {
    lang: "en",
    class: "bg-parchment-200",
  },
});
</script>

<template>
  <div class="font-sans antialiased">
    <NuxtRouteAnnouncer />
    <LayoutHeader />
    <NuxtPage />
    <LayoutFooter />
  </div>
</template>
