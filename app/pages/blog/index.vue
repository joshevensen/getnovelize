<script setup>
// For now, use static data to get the page working
const pageContent = ref({
  hero: {
    variant: "page",
    content: {
      badge: "From the blog",
      title: "Latest articles & news",
      description:
        "Stay up to date with the latest news and articles from our team.",
    },
  },
  blog: {
    variant: "list",
    content: {
      title: "From the blog",
      description: "Learn how to grow your business with our expert advice.",
      posts: [
        {
          id: 1,
          title: "Boost your conversion rate",
          href: "#",
          description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
          imageUrl:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
          date: "Mar 16, 2020",
          datetime: "2020-03-16",
          category: {
            title: "Marketing",
            href: "#",
          },
          author: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            imageUrl:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          },
        },
        {
          id: 2,
          title: "How to use search engine optimization to drive sales",
          href: "#",
          description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
          imageUrl:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
          date: "Mar 10, 2020",
          datetime: "2020-03-10",
          category: {
            title: "SEO",
            href: "#",
          },
          author: {
            name: "Lindsay Walton",
            role: "Front-end Developer",
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
    <SectionBlog
      v-if="pageContent.blog"
      :variant="pageContent.blog.variant"
      :content="pageContent.blog.content"
    />
    <SectionCTA v-if="pageContent.cta" :content="pageContent.cta" />
  </div>
  <div v-else class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"
      ></div>
      <p class="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
</template>
