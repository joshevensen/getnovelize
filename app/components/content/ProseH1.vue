<template>
  <h1
    :id="props.id"
    class="text-4xl font-bold tracking-tight text-parchment-900 sm:text-5xl font-serif mb-6 mt-8 first:mt-0"
  >
    <a
      v-if="generate"
      :href="`#${props.id}`"
      class="text-parchment-900 hover:text-orange-600 transition-colors"
    >
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === "boolean" &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h1))
);
</script>
