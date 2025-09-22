<script setup lang="ts">
import Icon from "~/components/ui/Icon.vue";

interface PricingContent {
  title: string;
  description: string;
  plan: {
    name: string;
    description: string;
    price: string;
    currency: string;
    period: string;
    features: string[];
    buttonText: string;
    buttonHref: string;
    disclaimer: string;
  };
}

interface Props {
  content: PricingContent;
}

defineProps<Props>();
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl sm:text-center">
        <h2
          class="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance"
        >
          {{ content.title }}
        </h2>
        <p
          class="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
        >
          {{ content.description }}
        </p>
      </div>
      <div
        class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
      >
        <div class="p-8 sm:p-10 lg:flex-auto">
          <h3 class="text-3xl font-semibold tracking-tight text-gray-900">
            {{ content.plan.name }}
          </h3>
          <p class="mt-6 text-base/7 text-gray-600">
            {{ content.plan.description }}
          </p>
          <div class="mt-10 flex items-center gap-x-4">
            <h4 class="flex-none text-sm/6 font-semibold text-indigo-600">
              What's included
            </h4>
            <div class="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            class="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            <li
              v-for="feature in content.plan.features"
              :key="feature"
              class="flex gap-x-3"
            >
              <Icon
                name="check"
                :size="20"
                class="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
          <div
            class="rounded-2xl bg-gray-50 py-10 text-center inset-ring inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
          >
            <div class="mx-auto max-w-xs px-8">
              <p class="text-base font-semibold text-gray-600">
                {{ content.plan.period }}
              </p>
              <p class="mt-6 flex items-baseline justify-center gap-x-2">
                <span
                  class="text-5xl font-semibold tracking-tight text-gray-900"
                  >{{ content.plan.price }}</span
                >
                <span
                  class="text-sm/6 font-semibold tracking-wide text-gray-600"
                  >{{ content.plan.currency }}</span
                >
              </p>
              <a
                :href="content.plan.buttonHref"
                class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >{{ content.plan.buttonText }}</a
              >
              <p class="mt-6 text-xs/5 text-gray-600">
                {{ content.plan.disclaimer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
