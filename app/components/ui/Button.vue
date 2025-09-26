<script setup lang="ts">
interface Props {
  href?: string;
  variant?: "default" | "inverted" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "md",
  type: "button",
  disabled: false,
});

const buttonClasses = computed(() => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-3.5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variantClasses = {
    default:
      "bg-orange-600 text-white shadow-sm hover:bg-orange-700 focus-visible:outline-orange-600",
    inverted:
      "bg-white text-orange-600 shadow-xs hover:bg-orange-50 focus-visible:outline-white dark:shadow-none",
    outline:
      "border border-orange-600 text-orange-600 bg-transparent hover:bg-orange-50 focus-visible:outline-orange-600",
    text: "text-orange-600 bg-transparent hover:bg-orange-50 focus-visible:outline-orange-600",
  };

  return [
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
  ].join(" ");
});
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    :disabled="disabled"
    :class="buttonClasses"
  >
    <slot>Button</slot>
  </component>
</template>
