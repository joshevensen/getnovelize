<script setup>
// For now, use static data to get the page working
const pageContent = ref({
  hero: {
    variant: "home",
    content: {
      badge: "What's new",
      title: "Turn your ideas into stories",
      description:
        "A clean, focused writing space built for storytellers who want to create without distraction.",
      announcement: {
        badge: "What's new",
        text: "Just shipped v1.0",
        href: "#",
      },
      buttons: [
        { text: "Start your free 30-day trial", href: "#", primary: true },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
        alt: "Novelize app screenshot",
      },
    },
  },
  features: {
    variant: "home",
    content: {
      title: "Everything you need to focus on writing",
      description:
        "Novelize gives you just the right tools to protect your words, stay organized, and write wherever inspiration strikes.",
      features: [
        {
          name: "Write Without Fear",
          description:
            "Your stories are private by default, and we'll never censor your work.",
          icon: "shield-check",
          href: "#",
        },
        {
          name: "Stay Organized",
          description:
            "Keep track of your characters, plot points, and research all in one place.",
          icon: "book",
          href: "#",
        },
        {
          name: "Write Anywhere",
          description:
            "Access your stories from any device, anywhere inspiration strikes.",
          icon: "device-mobile",
          href: "#",
        },
      ],
    },
  },
  blog: {
    variant: "home",
    content: {
      featuredPost: {
        id: 1,
        title:
          "We're incredibly proud to announce we have secured $75m in Series B",
        href: "#",
        description: "Libero neque aenean tincidunt nec consequat tempor...",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        author: {
          name: "Michael Foster",
          href: "#",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        },
      },
      posts: [
        {
          id: 2,
          title: "Boost your conversion rate",
          href: "#",
          description: "Illo sint voluptas. Error voluptates culpa eligendi...",
          date: "Mar 10, 2020",
          datetime: "2020-03-16",
          author: {
            name: "Lindsay Walton",
            href: "#",
            imageUrl:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
          },
        },
      ],
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
    <SectionFeatures
      v-if="pageContent.features"
      :variant="pageContent.features.variant"
      :content="pageContent.features.content"
    />
    <SectionCTA v-if="pageContent.cta" :content="pageContent.cta" />
    <SectionBlog
      v-if="pageContent.blog"
      :variant="pageContent.blog.variant"
      :content="pageContent.blog.content"
    />
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
