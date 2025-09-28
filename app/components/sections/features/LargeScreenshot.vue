<template>
  <UiContainer>
    <div class="relative overflow-hidden">
      <img
        src="/screenshot.webp"
        alt="App screenshot"
        class="mb-[-4%] rounded-xl shadow-2xl ring-1 ring-parchment-900/10"
      />
      <div class="relative" aria-hidden="true">
        <div
          class="absolute -inset-x-20 bottom-0 bg-linear-to-t from-parchment-200 pt-[7%]"
        />
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-10 lg:mt-16 lg:max-w-none">
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-parchment-500"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="flex flex-col px-6 first:pl-0 last:pr-0"
        >
          <dt
            class="flex items-center gap-x-3 text-xl/7 font-semibold text-gray-900"
          >
            <UiIcon
              :name="feature.icon"
              class="size-5 flex-none text-orange-600"
              aria-hidden="true"
            />
            {{ feature.name }}
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-lg/7 text-gray-600">
            <p class="flex-auto">{{ feature.description }}</p>
            <ul class="mt-4 space-y-2">
              <li
                v-for="bullet in feature.bullets"
                :key="bullet"
                class="flex items-start gap-2"
              >
                <UiIcon
                  name="IconCheck"
                  class="size-4 flex-none text-orange-600 mt-0.5"
                />
                <span class="text-sm/6 text-gray-600">{{ bullet }}</span>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </UiContainer>
</template>

<script setup>
const features = [
  {
    name: "Your Words Are Safe",
    description:
      "Autosave, backups, and scene history mean you'll never lose progress. Your story stays private, secure, and under your control.",
    icon: "IconShield",
    bullets: [
      "Every keystroke saved automatically",
      "Cloud backups for peace of mind",
      "Roll back with full scene history",
    ],
    href: "#",
  },
  {
    name: "Stay Organized, Without the Overwhelm",
    description:
      "Break your book into scenes, keep characters and notes in one place, and restructure as you go. It's structure that helps, not clutter that overwhelms.",
    icon: "IconBook",
    bullets: [
      "Scene and chapter organization",
      "Notebook for characters, places, and notes",
      "Drag-and-drop to rearrange your story",
    ],
    href: "#",
  },
  {
    name: "Write Anywhere, With Calm",
    description:
      "A distraction-free space that works on laptop, tablet, or phone. Wherever inspiration strikes, Novelize is there with a clean, cozy editor.",
    icon: "IconDeviceMobile",
    bullets: [
      "Mobile and desktop friendly",
      "Distraction-free writing mode",
      "Dark mode for day or night writing",
    ],
    href: "#",
  },
];
</script>
