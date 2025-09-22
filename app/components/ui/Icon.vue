<script setup>
import { computed, defineAsyncComponent } from "vue";

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

const IconComponent = computed(() => {
  if (!props.name) return null;

  // Convert kebab-case to PascalCase (e.g., 'user-plus' -> 'UserPlus')
  const iconName = props.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  // Create the full component name
  const componentName = `Icon${iconName}`;

  // Dynamically import the icon component
  return defineAsyncComponent(() =>
    import(`@tabler/icons-vue`)
      .then((module) => ({
        default: module[componentName] || module.IconQuestionMark,
      }))
      .catch(() => {
        // Fallback to a question mark icon if the icon doesn't exist
        return import(`@tabler/icons-vue`).then((module) => ({
          default: module.IconQuestionMark,
        }));
      })
  );
});

const iconStyle = computed(() => ({
  color: props.color,
  width: typeof props.size === "number" ? `${props.size}px` : props.size,
  height: typeof props.size === "number" ? `${props.size}px` : props.size,
}));
</script>

<template>
  <component
    v-if="IconComponent"
    :is="IconComponent"
    :size="size"
    :color="color"
    :stroke="stroke"
    :class="class"
    :style="iconStyle"
  />
  <span v-else class="text-red-500 text-sm"> Icon "{{ name }}" not found </span>
</template>
