<script setup>
const pricingFaqs = [
  {
    question: "How does the trial work?",
    answer:
      "You get full access for 17 days. If you cancel before the trial ends, you won't be charged.",
  },
  {
    question: "Do I need a credit card to try it?",
    answer:
      "Yes. A credit card is required to begin your trial. You won't be billed if you cancel before the trial ends.",
  },
  {
    question: "Who is Novelize for?",
    answer:
      "Hobby writers, fanfic authors, and novelists who want to finish their book.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. You can cancel in one click from your account settings.",
  },
  {
    question: "What happens to my writing if I cancel?",
    answer: "Your projects are always yours. You can export them anytime.",
  },
  {
    question: "Can I collaborate with others?",
    answer:
      "Not yet, but we're exploring options. For now, Novelize is best for solo writing.",
  },
  {
    question: "Is my work private?",
    answer:
      "Yes. Your projects are private by default. No algorithms, no censorship.",
  },
  {
    question: "Do you offer discounts for students or teachers?",
    answer:
      "Currently we keep pricing simple, but this may be added in the future.",
  },
  {
    question: "Do you have an app?",
    answer:
      "Novelize runs in your browser on desktop, tablet, or phone — no download needed.",
  },
];
</script>

<template>
  <SectionsGlobalHeader
    title="One Plan, Everything Included"
    description="No confusing tiers or hidden limits. Just simple, fair pricing that gives you full access to all of Novelize."
  />
  <SectionsPricing />
  <SectionsGlobalFAQ
    title="Frequently Asked Questions"
    description="Can't find the answer you're looking for?"
    supportLink="/contact"
    supportText="contact us"
    :faqs="pricingFaqs"
  />
  <SectionsGlobalCTA
    title="Everything you need, one simple plan"
    description="Get the full Novelize experience. Pay monthly, or save when you go annual. Cancel anytime."
    ctaText="Start your journey today"
    ctaHref="https://app.getnovelize.com/register"
  />
</template>
