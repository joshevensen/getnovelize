<script setup lang="ts">
interface Props {
  size?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  class: "",
});

const containerClasses = computed(() => {
  const baseClasses = "mx-auto max-w-7xl px-6 sm:px-12 lg:px-18";

  const sizeClasses = {
    none: "",
    xs: "py-2",
    sm: "py-6 sm:py-8",
    md: "py-12 sm:py-20",
    lg: "py-16 sm:py-24",
    xl: "py-20 sm:py-32",
  };

  return [baseClasses, sizeClasses[props.size], props.class].join(" ");
});
</script>

<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>
