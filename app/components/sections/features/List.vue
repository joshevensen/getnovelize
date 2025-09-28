<script setup>
const features = [
  {
    name: "Notebook & Worldbuilding",
    description:
      "Keep track of characters, locations, and lore without sticky notes or scattered docs. Everything lives alongside your manuscript.",
  },
  {
    name: "Scene-Based Writing",
    description:
      "Break your story into scenes you can write out of order, rearrange, and reshape as your draft evolves.",
  },
  {
    name: "Organize Mode",
    description:
      "Drag and drop chapters or scenes to restructure your novel with ease — no more clunky cut and paste.",
  },
  {
    name: "Outline Mode",
    description:
      "Summarize chapters and map the flow of your book. Great for planners who want a bird's-eye view.",
  },
  {
    name: "Scene History",
    description:
      "Go back to any previous version of a scene. Perfect for rewrites, experiments, or undoing late-night edits.",
  },
  {
    name: "Autosave & Backups",
    description:
      "Never lose a word. Every keystroke is saved instantly, with cloud backups for peace of mind.",
  },
  {
    name: "Cross-Device Access",
    description:
      "Write at your desk, on your laptop, or on your phone. Your work syncs everywhere you go.",
  },
  {
    name: "Distraction-Free Editor",
    description:
      "A clean, calm space that helps you focus on your words and nothing else.",
  },
  {
    name: "Word Count Goals",
    description:
      "Track your progress with daily and weekly targets. Build momentum and celebrate milestones.",
  },
  {
    name: "Weekly Progress Emails",
    description:
      "Get a gentle nudge in your inbox with updates on your writing streaks and achievements.",
  },
  {
    name: "Export Anytime",
    description:
      "Download your manuscript — scenes, chapters, notes, and all — to .docx whenever you're ready.",
  },
  {
    name: "Dark Mode",
    description:
      "Write comfortably day or night with themes that fit your mood and reduce eye strain.",
  },
];
</script>

<template>
  <UiContainer>
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5"
    >
      <div class="col-span-2">
        <h2 class="text-base/7 font-semibold text-orange-600">
          Supporting Features
        </h2>
        <p
          class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-parchment-900 sm:text-5xl"
        >
          More ways Novelize helps you write
        </p>
        <p class="mt-6 text-base/7 text-gray-700">
          Alongside the core features, Novelize includes a set of simple but
          powerful tools that keep your writing process smooth.
        </p>
      </div>
      <dl
        class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="relative pl-9"
        >
          <dt
            class="flex items-center gap-x-2 font-semibold text-parchment-900"
          >
            <UiIcon
              name="IconCheck"
              :size="24"
              class="size-6 text-orange-600"
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
