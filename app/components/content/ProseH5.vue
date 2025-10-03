<template>
  <h5
    :id="props.id"
    class="text-lg font-semibold tracking-tight text-parchment-900 sm:text-xl font-serif mb-3 mt-5 first:mt-0"
  >
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
      class="text-parchment-900 hover:text-orange-600 transition-colors"
    >
      <slot />
    </a>
    <slot v-else />
  </h5>
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
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h5))
);
</script>
