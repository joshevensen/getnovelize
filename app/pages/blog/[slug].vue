<script setup>
// For now, use static data to get the page working
const pageContent = ref({
  hero: {
    variant: "page",
    content: {
      badge: "Blog Post",
      title: "Dynamic Blog Post Title",
      description: "This is a dynamic blog post description.",
    },
  },
  cta: {
    title: "Ready to start your story?",
    description:
      "Join hundreds of writers who use Novelize to stay organized, focused, and inspired.",
    buttons: [
      { text: "Start your free 30-day trial", href: "#", primary: true },
    ],
  },
});
</script>

<template>
  <div v-if="pageContent">
    <SectionHero
      v-if="pageContent.hero"
      :variant="pageContent.hero.variant"
      :content="pageContent.hero.content"
    />
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h1
            class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            Blog Post
          </h1>
          <p class="mt-6 text-lg text-gray-600">
            This is where the blog post content would go. For now, this is
            placeholder content.
          </p>
        </div>
      </div>
    </div>
    <SectionCTA v-if="pageContent.cta" :content="pageContent.cta" />
  </div>
  <div v-else class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"
      ></div>
      <p class="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
</template>
