<script setup lang="ts">
const appConfig = useAppConfig();

if (appConfig.seo?.features) {
  useSeoMeta({
    title: appConfig.seo.features.title,
    description: appConfig.seo.features.description,
    ogTitle: appConfig.seo.features.title,
    ogDescription: appConfig.seo.features.description,
    ogImage: "https://getnovelize.com/screenshot.webp",
    ogUrl: "https://getnovelize.com/features",
    twitterCard: "summary_large_image",
    twitterTitle: appConfig.seo.features.title,
    twitterDescription: appConfig.seo.features.description,
    twitterImage: "https://getnovelize.com/screenshot.webp",
  });
}

// Your Words Are Safe features
const safetyFeatures = [
  {
    name: "Autosave",
    description: "Every keystroke saved automatically",
    icon: "IconDeviceFloppy",
  },
  {
    name: "Cloud Backups",
    description: "Cloud backups for peace of mind",
    icon: "IconCloudUpload",
  },
  {
    name: "Scene History",
    description: "Roll back with full scene history",
    icon: "IconHistory",
  },
];

// Stay Organized features
const organizationFeatures = [
  {
    name: "Scene Organization",
    description: "Scene and chapter organization",
    icon: "IconLayoutCards",
  },
  {
    name: "Notebook",
    description: "Notebook for characters, places, and notes",
    icon: "IconNotebook",
  },
  {
    name: "Drag & Drop",
    description: "Drag-and-drop to rearrange your story",
    icon: "IconArrowsMove",
  },
];

// Write Anywhere features
const writingFeatures = [
  {
    name: "Cross-Device",
    description: "Mobile and desktop friendly",
    icon: "IconDevices",
  },
  {
    name: "Distraction-Free",
    description: "Distraction-free writing mode",
    icon: "IconFocus2",
  },
  {
    name: "Dark Mode",
    description: "Dark mode for day or night writing",
    icon: "IconMoonStars",
  },
];
</script>

<template>
  <SectionsGlobalHeader
    title="Built for the Way You Write"
    description="From first idea to final draft, Novelize gives you the tools to stay focused, stay organized, and keep your story safe."
  />

  <SectionsFeaturesMain />

  <SectionsFeaturesList />
  <SectionsGlobalCTA
    title="See how it feels to write without distractions"
    description="All the tools you need to stay focused, organized, and motivated."
    ctaText="Try these tools free"
    ctaHref="https://app.getnovelize.com/register"
  />
</template>
