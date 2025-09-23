<script setup>
// For now, use static data to get the page working
const pageContent = ref({
  hero: {
    variant: "page",
    content: {
      badge: "Features",
      title: "Everything you need to get started",
      description:
        "Check out all the features and tools we provide to help you build amazing applications.",
    },
  },
  features: [
    {
      variant: "main-right",
      content: {
        badge: "Deploy faster",
        title: "A better workflow",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        features: [
          {
            name: "Push to deploy.",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            icon: "cloud-upload",
          },
          {
            name: "SSL certificates.",
            description:
              "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
            icon: "lock",
          },
          {
            name: "Database backups.",
            description:
              "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
            icon: "server",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
          alt: "Product screenshot",
          width: 2432,
          height: 1442,
        },
      },
    },
    {
      variant: "main-left",
      content: {
        badge: "Deploy faster",
        title: "A better workflow",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        features: [
          {
            name: "Push to deploy.",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            icon: "cloud-upload",
          },
          {
            name: "SSL certificates.",
            description:
              "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
            icon: "lock",
          },
          {
            name: "Database backups.",
            description:
              "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
            icon: "server",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
          alt: "Product screenshot",
          width: 2432,
          height: 1442,
        },
      },
    },
    {
      variant: "list",
      content: {
        badge: "Features",
        title: "Everything you need to deploy your app",
        description:
          "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.",
        features: [
          {
            name: "Push to deploy",
            description:
              "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
            icon: "cloud-upload",
          },
          {
            name: "SSL certificates",
            description:
              "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
            icon: "lock",
          },
          {
            name: "Simple queues",
            description:
              "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
            icon: "refresh",
          },
          {
            name: "Advanced security",
            description:
              "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
            icon: "fingerprint",
          },
        ],
      },
    },
  ],
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
    <SectionFeatures
      v-if="pageContent.features"
      v-for="(feature, index) in pageContent.features"
      :key="index"
      :variant="feature.variant"
      :content="feature.content"
    />
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
