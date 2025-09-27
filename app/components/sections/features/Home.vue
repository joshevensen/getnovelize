<script setup>
const features = [
  {
    name: "Write Without Fear",
    description:
      "Your stories are private by default, and we'll never censor your work. Every word you write is saved automatically and backed up securely, so you don't have to worry about losing progress. Write freely, knowing your stories belong to you alone until you decide to share them.",
    href: "#",
    icon: "IconShield",
  },
  {
    name: "Characters & Worldbuilding",
    description:
      "Keep all your characters, research, and worldbuilding notes right where you write. No more scattered documents or lost details — everything is organized in one place. The Notebook makes it easy to track relationships, lore, and story rules while staying in your flow.",
    href: "#",
    icon: "IconBook",
  },
  {
    name: "Write Anywhere, Distraction-Free",
    description:
      "Write on your laptop, tablet, or phone — Novelize works wherever inspiration strikes. The editor is clean, uncluttered, and customizable with dark or light mode. Focus on your words, not on menus or distractions.",
    href: "#",
    icon: "IconDeviceMobile",
  },
];
</script>

<template>
  <UiContainer class="mt-0">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="flex flex-col"
        >
          <dt
            class="flex items-center gap-x-3 text-xl/7 font-semibold text-gray-900"
          >
            <UiIcon
              :name="feature.icon"
              :size="24"
              class="size-6"
              aria-hidden="true"
            />
            {{ feature.name }}
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
            <p class="flex-auto">{{ feature.description }}</p>
          </dd>
        </div>
      </dl>
    </div>
    <div class="mt-16 text-center">
      <UiButton href="/features" variant="text" size="lg">
        Learn about more features
        <UiIcon name="IconArrowRight" size="24" class="ml-2" />
      </UiButton>
    </div>
  </UiContainer>
</template>
