<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  description: String,
});
</script>

<template>
  <div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <p
        v-if="subtitle"
        class="text-base font-semibold leading-7 text-indigo-600"
      >
        {{ subtitle }}
      </p>
      <h2
        class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
      >
        {{ title }}
      </h2>
      <p v-if="description" class="mt-6 text-lg leading-8 text-gray-600">
        {{ description }}
      </p>
    </div>
  </div>
</template>
