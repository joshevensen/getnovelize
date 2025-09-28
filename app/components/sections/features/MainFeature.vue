<script setup lang="ts">
interface Props {
  variant: "left" | "right";
  title: string;
  description: string;
  features: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="overflow-hidden">
    <UiContainer>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <!-- Content -->
        <div
          :class="[
            'lg:pt-4 lg:col-span-3',
            variant === 'left' ? 'lg:pr-8' : 'lg:ml-auto lg:pl-4',
          ]"
        >
          <div class="lg:max-w-xl">
            <h2
              class="text-3xl/7 font-semibold text-parchment-900 leading-normal"
            >
              {{ title }}
            </h2>
            <p class="mt-4 text-lg/8 text-gray-700">
              {{ description }}
            </p>
            <dl
              class="mt-6 max-w-xl space-y-4 text-base/7 text-gray-600 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <UiIcon
                  :name="feature.icon"
                  class="absolute top-1 left-1 size-5 text-orange-600"
                  aria-hidden="true"
                />
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Image -->
        <div
          :class="[
            'lg:col-span-2',
            variant === 'right'
              ? 'flex items-start justify-end lg:order-first'
              : '',
          ]"
        >
          <img
            src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
            alt="Product screenshot"
            :class="[
              'w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228',
              variant === 'left' ? 'md:-ml-4 lg:-ml-0' : '',
            ]"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </UiContainer>
  </div>
</template>
