<script setup>
// For now, use static data to get the page working
const pageContent = ref({
  hero: {
    variant: "page",
    content: {
      badge: "Pricing",
      title: "Simple, transparent pricing",
      description:
        "Choose the perfect plan for your needs. No hidden fees, no surprises.",
    },
  },
  pricing: {
    title: "Simple no-tricks pricing",
    description:
      "Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.",
    plan: {
      name: "Lifetime membership",
      description:
        "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.",
      price: "$349",
      currency: "USD",
      period: "Pay once, own it forever",
      features: [
        "Private forum access",
        "Member resources",
        "Entry to annual conference",
        "Official member t-shirt",
      ],
      buttonText: "Get access",
      buttonHref: "#",
      disclaimer:
        "Invoices and receipts available for easy company reimbursement",
    },
  },
  faq: {
    title: "Frequently asked questions",
    description:
      "Can't find the answer you're looking for? Reach out to our customer support team.",
    faqs: [
      {
        question: "How do you make holy water?",
        answer:
          "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "What's the best thing about Switzerland?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
    ],
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
    <SectionPricing v-if="pageContent.pricing" :content="pageContent.pricing" />
    <SectionFAQ v-if="pageContent.faq" :content="pageContent.faq" />
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
