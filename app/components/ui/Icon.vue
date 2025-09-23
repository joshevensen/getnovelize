<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    description: "Name of the Tabler icon (e.g., 'home', 'user', 'settings')",
  },
  size: {
    type: [Number, String],
    default: 24,
    description: "Size of the icon in pixels",
  },
  color: {
    type: String,
    default: "currentColor",
    description: "Color of the icon",
  },
  stroke: {
    type: [Number, String],
    default: 1,
    description: "Stroke width of the icon",
  },
  class: {
    type: String,
    default: "",
    description: "Additional CSS classes",
  },
});

const iconStyle = computed(() => ({
  color: props.color,
  width: typeof props.size === "number" ? `${props.size}px` : props.size,
  height: typeof props.size === "number" ? `${props.size}px` : props.size,
}));

const iconClass = computed(() => {
  return `inline-block ${props.class || ""}`.trim();
});
</script>

<template>
  <svg
    :class="iconClass"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="stroke"
    stroke-linecap="round"
    stroke-linejoin="round"
    :style="iconStyle"
  >
    <circle cx="12" cy="12" r="10" />
    <text x="12" y="16" text-anchor="middle" font-size="8" fill="currentColor">
      {{ name.slice(0, 2) }}
    </text>
  </svg>
</template>
