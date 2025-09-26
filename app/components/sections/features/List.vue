<script setup>
const features = [
  {
    name: "Organize by Scenes",
    description:
      "Break your story into smaller pieces you can rearrange, expand, or edit on their own. Perfect for non-linear writing and episodic storytelling.",
  },
  {
    name: "Autosave & Backups",
    description:
      "Every keystroke is saved automatically. Even if your computer crashes or you lose connection, your words are safe and waiting when you return.",
  },
  {
    name: "Multiple Modes",
    description:
      "Switch between outline, write, and organize views. Each mode gives you just the tools you need for that stage of the process.",
  },
  {
    name: "Dark/Light Themes",
    description:
      "Write comfortably, day or night. Choose the theme that fits your environment and keep your eyes relaxed.",
  },
  {
    name: "Grammar Plugin Support",
    description:
      "Connect Novelize with tools like Grammarly or ProWritingAid for real-time editing feedback while you write.",
  },
  {
    name: "Export Anytime",
    description:
      "Download your story as a Word document whenever you want. Simple, fast, and yours to keep.",
  },
];
</script>

<template>
  <UiContainer>
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5"
    >
      <div class="col-span-2">
        <h2
          class="text-base/7 font-semibold text-orange-600 dark:text-orange-400"
        >
          Supporting Features
        </h2>
        <p
          class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white"
        >
          More ways Novelize helps you write
        </p>
        <p class="mt-6 text-base/7 text-gray-700 dark:text-gray-300">
          Alongside the core features, Novelize includes a set of simple but
          powerful tools that keep your writing process smooth.
        </p>
      </div>
      <dl
        class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16 dark:text-gray-400"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="relative pl-9"
        >
          <dt class="font-semibold text-gray-900 dark:text-white">
            <UiIcon
              name="IconCheck"
              :size="24"
              class="size-6"
              aria-hidden="true"
            />
            {{ feature.name }}
          </dt>
          <dd class="mt-2">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </UiContainer>
</template>
