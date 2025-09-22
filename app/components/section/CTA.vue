<script setup lang="ts">
interface CTAContent {
  title: string;
  description?: string;
  buttons: Array<{
    text: string;
    href: string;
    primary: boolean;
  }>;
}

interface Props {
  content: CTAContent;
}

defineProps<Props>();
</script>

<template>
  <div class="bg-indigo-700">
    <div class="px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
        >
          {{ content.title }}
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-indigo-200">
          {{ content.description }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            v-for="button in content.buttons"
            :key="button.text"
            :href="button.href"
            :class="
              button.primary
                ? 'rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:shadow-none'
                : 'text-sm/6 font-semibold text-white'
            "
          >
            {{ button.text }}
            <span v-if="!button.primary" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
