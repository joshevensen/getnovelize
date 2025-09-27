<script setup lang="ts">
interface Props {
  badge?: string;
  title: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  badge: "",
  description: "",
});
</script>

<template>
  <UiContainer size="md" class="-mb-20">
    <div class="mx-auto max-w-2xl text-center">
      <p v-if="props.badge" class="text-base/7 font-semibold text-orange-600">
        {{ props.badge }}
      </p>
      <h2
        class="mt-2 text-5xl font-semibold tracking-tight text-orange-600 sm:text-7xl"
      >
        {{ props.title }}
      </h2>
      <p
        v-if="props.description"
        class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
      >
        {{ props.description }}
      </p>
    </div>
  </UiContainer>
</template>
