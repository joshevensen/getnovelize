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
  title: "Nuxt App",
  meta: [{ name: "description", content: "Nuxt App" }],
  htmlAttrs: {
    lang: "en",
    class: "bg-white dark:bg-gray-900",
  },
});
</script>
