<script setup>
// For now, use static data to get the page working
const pageContent = ref({
  hero: {
    variant: "page",
    content: {
      badge: "About us",
      title: "Built by a developer, shaped by writers",
      description:
        "Novelize started as a simple side project to make writing easier. Today, it's grown into a family-run app used by thousands of storytellers around the world.",
    },
  },
  about: {
    badge: "About us",
    title: "On a mission to empower remote teams",
    description:
      "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam.",
    mission: {
      title: "Our mission",
      description1: "Faucibus commodo massa rhoncus, volutpat...",
      description2: "Et vitae blandit facilisi magna lacus commodo...",
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800&h=600&fit=crop",
        alt: "",
        class: "aspect-square overflow-hidden rounded-xl shadow-xl",
      },
    ],
    stats: {
      title: "The numbers",
      items: [
        { label: "Raised", value: "$150M" },
        { label: "Companies", value: "30K" },
      ],
    },
  },
  team: {
    title: "Our team",
    description:
      "We're a dynamic group of individuals who are passionate about what we do.",
    people: [
      {
        name: "Josh",
        role: "Founder, Developer",
        bio: "I've been a software engineer for over 10 years...",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        xUrl: "#",
        linkedinUrl: "#",
      },
    ],
  },
  cta: {
    title: "Novelize is built for writers like you. Ready to start your story?",
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
    <SectionAbout v-if="pageContent.about" :content="pageContent.about" />
    <SectionCTA v-if="pageContent.cta" :content="pageContent.cta" />
    <SectionTeam v-if="pageContent.team" :content="pageContent.team" />
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
