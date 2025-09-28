<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

defineProps<Props>();
</script>

<template>
  <UiContainer size="xs" class="max-w-[90rem]!">
    <div class="bg-orange-600 sm:rounded-4xl px-6 lg:px-8 py-10 sm:py-12">
      <div class="text-center">
        <h2
          class="mx-auto max-w-6xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
        >
          {{ title }}
        </h2>
        <p
          class="mx-auto mt-6 max-w-5xl text-3xl/8 text-pretty text-orange-200"
        >
          {{ description }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <UiButton :href="ctaHref" variant="inverted" size="lg">
            {{ ctaText }}
          </UiButton>
        </div>
      </div>
    </div>
  </UiContainer>
</template>
