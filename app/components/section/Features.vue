<!-- components/section/Features.vue -->
<script setup lang="ts">
import { computed } from "vue";
import Icon from "~/components/ui/Icon.vue";

interface FeatureItem {
  name: string;
  description: string;
  icon: string;
  href?: string;
}

interface FeatureContent {
  title?: string;
  description?: string;
  badge?: string;
  features: FeatureItem[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

interface Props {
  variant: "home" | "list" | "main-left" | "main-right";
  content: FeatureContent;
}

const props = defineProps<Props>();

const isHomeLayout = computed(() => props.variant === "home");
const isListLayout = computed(() => props.variant === "list");
const isMainLeftLayout = computed(() => props.variant === "main-left");
const isMainRightLayout = computed(() => props.variant === "main-right");
const hasImage = computed(
  () =>
    props.content.image && (isMainLeftLayout.value || isMainRightLayout.value)
);
</script>

<template>
  <!-- Home Layout -->
  <div v-if="isHomeLayout" class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2
          class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
        >
          {{ content.title }}
        </h2>
        <p class="mt-6 text-lg/8 text-gray-600">
          {{ content.description }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="feature in content.features"
            :key="feature.name"
            class="flex flex-col"
          >
            <dt class="text-base/7 font-semibold text-gray-900">
              <div
                class="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <Icon
                  :name="feature.icon"
                  :size="24"
                  class="size-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <p v-if="feature.href" class="mt-6">
                <a
                  :href="feature.href"
                  class="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- List Layout -->
  <div v-else-if="isListLayout" class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base/7 font-semibold text-indigo-600">
          {{ content.badge }}
        </h2>
        <p
          class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
        >
          {{ content.title }}
        </p>
        <p class="mt-6 text-lg/8 text-gray-700">
          {{ content.description }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in content.features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base/7 font-semibold text-gray-900">
              <div
                class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <Icon
                  :name="feature.icon"
                  :size="24"
                  class="size-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base/7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- Main Layout (Left/Right) -->
  <div
    v-else-if="isMainLeftLayout || isMainRightLayout"
    class="overflow-hidden py-24 sm:py-32"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <!-- Content Side -->
        <div
          :class="
            isMainLeftLayout ? 'lg:ml-auto lg:pt-4 lg:pl-4' : 'lg:pt-4 lg:pr-8'
          "
        >
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-indigo-600">
              {{ content.badge }}
            </h2>
            <p
              class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
            >
              {{ content.title }}
            </p>
            <p class="mt-6 text-lg/8 text-gray-600">
              {{ content.description }}
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none"
            >
              <div
                v-for="feature in content.features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-gray-900">
                  <Icon
                    :name="feature.icon"
                    :size="20"
                    class="absolute top-1 left-1 size-5 text-indigo-600"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Image Side -->
        <div
          :class="
            isMainLeftLayout
              ? 'flex items-start justify-end lg:order-first'
              : ''
          "
        >
          <img
            v-if="hasImage"
            :src="content.image?.src"
            :alt="content.image?.alt"
            :width="content.image?.width"
            :height="content.image?.height"
            :class="
              isMainLeftLayout
                ? 'w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 dark:hidden dark:ring-white/10'
                : 'w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 not-dark:hidden sm:w-228 md:-ml-4 lg:-ml-0 dark:ring-white/10'
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
