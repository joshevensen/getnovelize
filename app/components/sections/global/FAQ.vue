<script setup lang="ts">
interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  title?: string;
  description?: string;
  supportLink?: string;
  supportText?: string;
  faqs: FAQ[];
}

const props = withDefaults(defineProps<Props>(), {
  title: "Frequently asked questions",
  description: "Can't find the answer you're looking for?",
  supportLink: "#",
  supportText: "customer support",
});
</script>

<template>
  <UiContainer>
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-5">
        <h2
          class="text-3xl font-semibold tracking-tight text-pretty text-parchment-900 sm:text-4xl"
        >
          {{ props.title }}
        </h2>
        <p class="mt-4 text-base/7 text-pretty text-gray-600">
          {{ props.description }} Reach out to our
          <a
            :href="props.supportLink"
            class="font-semibold text-orange-600 hover:text-orange-500"
            >{{ props.supportText }}</a
          >
          team.
        </p>
      </div>
      <div class="mt-10 lg:col-span-7 lg:mt-0">
        <dl class="space-y-10">
          <div v-for="faq in props.faqs" :key="faq.question">
            <dt class="text-base/7 font-semibold text-parchment-900">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 text-base/7 text-gray-600">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </UiContainer>
</template>
