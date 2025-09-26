<script setup>
const faqs = [
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
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];
</script>

<template>
  <UiContainer>
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-5">
        <h2
          class="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl dark:text-white"
        >
          Frequently asked questions
        </h2>
        <p
          class="mt-4 text-base/7 text-pretty text-gray-600 dark:text-gray-400"
        >
          Can't find the answer you're looking for? Reach out to our
          <a
            href="#"
            class="font-semibold text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
            >customer support</a
          >
          team.
        </p>
      </div>
      <div class="mt-10 lg:col-span-7 lg:mt-0">
        <dl class="space-y-10">
          <div v-for="faq in faqs" :key="faq.question">
            <dt class="text-base/7 font-semibold text-gray-900 dark:text-white">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </UiContainer>
</template>
