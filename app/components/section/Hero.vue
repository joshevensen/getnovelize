<!-- components/section/Hero.vue -->
<script setup lang="ts">
import { computed } from "vue";
import Icon from "~/components/ui/Icon.vue";

interface HeroContent {
  badge: string;
  title: string;
  description: string;
  // Optional fields for home variant
  announcement?: {
    badge: string;
    text: string;
    href: string;
  };
  buttons?: Array<{
    text: string;
    href: string;
    primary: boolean;
  }>;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

interface Props {
  variant: "home" | "page";
  content: HeroContent;
}

const props = defineProps<Props>();

const isHomeVariant = computed(() => props.variant === "home");
const hasAnnouncement = computed(
  () => props.content.announcement && isHomeVariant.value
);
const hasButtons = computed(() => props.content.buttons && isHomeVariant.value);
const hasImage = computed(() => props.content.image && isHomeVariant.value);
</script>

<template>
  <!-- Home Hero Layout -->
  <div
    v-if="isHomeVariant"
    class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40"
  >
    <div class="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
      <!-- Announcement Banner -->
      <div v-if="hasAnnouncement" class="mt-24 sm:mt-32 lg:mt-16">
        <a :href="content.announcement.href" class="inline-flex space-x-6">
          <span
            class="rounded-full bg-indigo-50 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/20 ring-inset"
          >
            {{ content.announcement.badge }}
          </span>
          <span
            class="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600"
          >
            <span>{{ content.announcement.text }}</span>
            <Icon
              name="chevron-right"
              :size="20"
              class="size-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </a>
      </div>

      <!-- Main Content -->
      <h1
        class="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl"
      >
        {{ content.title }}
      </h1>
      <p
        class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
      >
        {{ content.description }}
      </p>

      <!-- Buttons -->
      <div v-if="hasButtons" class="mt-10 flex items-center gap-x-6">
        <a
          v-for="button in content.buttons"
          :key="button.text"
          :href="button.href"
          :class="
            button.primary
              ? 'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              : 'text-sm/6 font-semibold text-gray-900'
          "
        >
          {{ button.text }}
          <span v-if="!button.primary" aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <!-- Hero Image -->
    <div
      v-if="hasImage"
      class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32"
    >
      <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
        <img
          :src="content.image.src"
          :alt="content.image.alt"
          :width="content.image.width"
          :height="content.image.height"
          class="w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
        />
      </div>
    </div>
  </div>

  <!-- Page Hero Layout -->
  <div v-else class="px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <p class="text-base/7 font-semibold text-indigo-600">
        {{ content.badge }}
      </p>
      <h2
        class="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
      >
        {{ content.title }}
      </h2>
      <p
        class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
      >
        {{ content.description }}
      </p>
    </div>
  </div>
</template>
