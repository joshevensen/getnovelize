<script setup>
const features = [
  {
    name: "Your Words Are Safe",
    description:
      "Autosave, backups, and scene history mean you'll never lose progress. Your story stays private and under your control.",
    href: "#",
    icon: "IconShield",
  },
  {
    name: "Stay Organized, Without the Overwhelm",
    description:
      "Break your book into scenes, track characters and notes, and rearrange freely. It's structure that helps, not clutter that overwhelms.",
    href: "#",
    icon: "IconBook",
  },
  {
    name: "Write Anywhere, With Calm",
    description:
      "A distraction-free space that works on laptop, tablet, or phone. Wherever inspiration strikes, Novelize is there with a clean, cozy editor.",
    href: "#",
    icon: "IconDeviceMobile",
  },
];
</script>

<template>
  <UiContainer size="lg">
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
            class="flex items-center gap-x-3 text-xl/7 font-semibold text-parchment-900"
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
    <div class="mt-10 text-center">
      <UiButton href="/features" variant="text" size="lg">
        Learn about more features
        <UiIcon name="IconArrowRight" size="24" class="ml-2" />
      </UiButton>
    </div>
  </UiContainer>
</template>
