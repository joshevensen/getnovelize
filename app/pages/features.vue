<script setup>
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

  <SectionsFeaturesLargeScreenshot />

  <!-- Your Words Are Safe -->
  <!-- <SectionsFeaturesMainFeature
    variant="left"
    title="Your Words Are Safe"
    description="Your story stays private, secure, and always in your control. Every keystroke is saved automatically, with cloud backups for peace of mind."
    :features="safetyFeatures"
  /> -->

  <!-- Stay Organized, Without the Overwhelm -->
  <!-- <SectionsFeaturesMainFeature
    variant="right"
    title="Stay Organized, Without the Overwhelm"
    description="It's structure without the clutter of bloated tools. Keep track of characters, research, and worldbuilding notes without breaking your writing flow."
    :features="organizationFeatures"
  /> -->

  <!-- Write Anywhere, With Calm -->
  <!-- <SectionsFeaturesMainFeature
    variant="left"
    title="Write Anywhere, With Calm"
    description="Wherever inspiration strikes, Novelize is there with a clean, cozy editor. A distraction-free space that works on phone, tablet, or laptop."
    :features="writingFeatures"
  /> -->

  <SectionsFeaturesList />
  <SectionsGlobalCTA
    title="See how it feels to write without distractions"
    description="All the tools you need to stay focused, organized, and motivated."
    ctaText="Try these tools free"
    ctaHref="https://app.getnovelize.com/register"
  />
</template>
