<script setup>
import { defineAsyncComponent, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
    description:
      "Name of the Tabler icon component (e.g., 'IconHome', 'IconUser', 'IconBrandTumblrFilled')",
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
    default: 2,
    description: "Stroke width of the icon",
  },
  class: {
    type: String,
    default: "",
    description: "Additional CSS classes",
  },
});

// Dynamically import the icon component
const IconComponent = defineAsyncComponent(async () => {
  try {
    // Import the specific icon from @tabler/icons-vue
    const iconModule = await import(`@tabler/icons-vue`);
    const iconName = props.name.startsWith("Icon")
      ? props.name
      : `Icon${props.name}`;

    if (iconModule[iconName]) {
      return iconModule[iconName];
    } else {
      // Fallback to a default icon if the requested one doesn't exist
      console.warn(`Icon ${iconName} not found in @tabler/icons-vue`);
      return iconModule.IconQuestionMark || iconModule.IconCircle;
    }
  } catch (error) {
    console.error(`Failed to load icon ${props.name}:`, error);
    // Return a fallback icon
    const { IconCircle } = await import("@tabler/icons-vue");
    return IconCircle;
  }
});

const iconProps = computed(() => ({
  size: props.size,
  color: props.color,
  stroke: props.stroke,
  class: props.class,
}));
</script>

<template>
  <component :is="IconComponent" v-bind="iconProps" />
</template>
