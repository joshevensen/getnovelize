<script setup>
useHead({
  title: "Novelize",
  meta: [{ name: "description", content: "Simple Novel Writing App" }],
  htmlAttrs: {
    lang: "en",
    class: "bg-white dark:bg-gray-800",
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
