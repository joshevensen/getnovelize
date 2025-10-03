<template>
  <h3
    :id="props.id"
    class="text-2xl font-semibold tracking-tight text-parchment-900 sm:text-3xl font-serif mb-4 mt-6 first:mt-0"
  >
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
      class="text-parchment-900 hover:text-orange-600 transition-colors"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
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
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h3))
);
</script>
