<script setup lang="ts">
interface FAQContent {
  title: string;
  description: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

interface Props {
  content: FAQContent;
}

defineProps<Props>();
</script>

<template>
  <div class="">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <h2
            class="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
          >
            {{ content.title }}
          </h2>
          <p class="mt-4 text-base/7 text-pretty text-gray-600">
            {{ content.description }}
          </p>
        </div>
        <div class="mt-10 lg:col-span-7 lg:mt-0">
          <dl class="space-y-10">
            <div v-for="faq in content.faqs" :key="faq.question">
              <dt class="text-base/7 font-semibold text-gray-900">
                {{ faq.question }}
              </dt>
              <dd class="mt-2 text-base/7 text-gray-600">
                {{ faq.answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
