<script setup lang="ts">
interface AboutContent {
  badge: string;
  title: string;
  description: string;
  mission: {
    title: string;
    description1: string;
    description2: string;
  };
  images: Array<{
    src: string;
    alt: string;
    class: string;
  }>;
  stats: {
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  };
}

interface Props {
  content: AboutContent;
}

defineProps<Props>();
</script>

<template>
  <div class="overflow-hidden py-24 sm:py-32">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div class="max-w-4xl">
        <p class="text-base/7 font-semibold text-indigo-600">
          {{ content.badge }}
        </p>
        <h1
          class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
        >
          {{ content.title }}
        </h1>
        <p class="mt-6 text-xl/8 text-balance text-gray-700">
          {{ content.description }}
        </p>
      </div>
      <section
        class="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16"
      >
        <div class="lg:pr-8">
          <h2
            class="text-2xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ content.mission.title }}
          </h2>
          <p class="mt-6 text-base/7 text-gray-600">
            {{ content.mission.description1 }}
          </p>
          <p class="mt-8 text-base/7 text-gray-600">
            {{ content.mission.description2 }}
          </p>
        </div>
        <div class="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div
            class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8"
          >
            <div
              v-for="(image, index) in content.images"
              :key="index"
              :class="image.class"
            >
              <img
                :alt="image.alt"
                :src="image.src"
                class="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div class="max-lg:mt-16 lg:col-span-1">
          <p class="text-base/7 font-semibold text-gray-500">
            {{ content.stats.title }}
          </p>
          <hr class="mt-6 border-t border-gray-200" />
          <dl class="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div
              v-for="(item, index) in content.stats.items"
              :key="index"
              :class="[
                'flex flex-col gap-y-2',
                index < 2 ? 'border-b border-dotted border-gray-200 pb-4' : '',
                index === 2
                  ? 'max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4'
                  : '',
              ]"
            >
              <dt class="text-sm/6 text-gray-600">{{ item.label }}</dt>
              <dd
                class="order-first text-6xl font-semibold tracking-tight text-gray-900"
              >
                {{ item.value }}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  </div>
</template>
