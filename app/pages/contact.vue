<script setup>
// For now, use static data to get the page working
const pageContent = ref({
  hero: {
    variant: "page",
    content: {
      badge: "Contact us",
      title: "Get in touch",
      description:
        "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    },
  },
  contact: {
    title: "Contact sales",
    description:
      "Aute magna irure deserunt veniam aliqua magna enim voluptate.",
    form: {
      fields: [
        {
          name: "first-name",
          label: "First name",
          type: "text",
          autocomplete: "given-name",
          required: true,
        },
        {
          name: "last-name",
          label: "Last name",
          type: "text",
          autocomplete: "family-name",
          required: true,
        },
        {
          name: "company",
          label: "Company",
          type: "text",
          autocomplete: "organization",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          autocomplete: "email",
          required: true,
        },
        {
          name: "phone-number",
          label: "Phone number",
          type: "tel",
          autocomplete: "tel",
        },
        { name: "message", label: "Message", type: "textarea" },
      ],
      submitText: "Let's talk",
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
    <SectionContact v-if="pageContent.contact" :content="pageContent.contact" />
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
