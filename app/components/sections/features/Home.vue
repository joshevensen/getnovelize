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
  <UiContainer>
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2
        class="text-base/7 font-semibold text-orange-600 dark:text-orange-400"
      >
        For storytellers
      </h2>
      <p
        class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white"
      >
        Everything you need to write your story
      </p>
      <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
        A clean, focused writing space built for storytellers who want to create
        without distraction. Keep your notes close, protect your words, and turn
        your ideas into stories.
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="flex flex-col"
        >
          <dt
            class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900 dark:text-white"
          >
            <UiIcon
              :name="feature.icon"
              :size="24"
              class="size-6"
              aria-hidden="true"
            />
            {{ feature.name }}
          </dt>
          <dd
            class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400"
          >
            <p class="flex-auto">{{ feature.description }}</p>
            <p class="mt-6">
              <a
                :href="feature.href"
                class="text-sm/6 font-semibold text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
                >Learn more <span aria-hidden="true">→</span></a
              >
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </UiContainer>
</template>
