<script setup>
const pricingFaqs = [
  {
    question: "Is there a free plan?",
    answer:
      "No. Novelize is a paid service. But you can try everything with a 30-day free trial, no credit card required.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "Nope. Novelize works right in your browser on desktop, tablet, or phone.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Just log into your account and cancel with one click. You'll keep access through the end of your billing period, and you can come back anytime.",
  },
  {
    question: "What happens to my writing if I cancel?",
    answer:
      "Your projects stay in your account. You can always log back in to view them or export your stories.",
  },
  {
    question: "Do legacy subscribers keep their old pricing?",
    answer:
      "Yes. If you signed up on a legacy plan, your original price is locked in for life.",
  },
];
</script>

<template>
  <SectionsGlobalHeader
    title="Simple, affordable pricing"
    description="One plan with everything included. No hidden tiers, no surprises."
  />
  <SectionsPricing />
  <SectionsGlobalFAQ
    title="Frequently Asked Questions"
    description="Have questions about Novelize pricing?"
    supportLink="/contact"
    supportText="contact us"
    :faqs="pricingFaqs"
  />
  <SectionsGlobalCTA />
</template>
