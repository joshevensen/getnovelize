<script setup>
const includedFeatures = [
  "Unlimited projects",
  "Scene-based writing and organization",
  "Notebook for characters, worldbuilding, and research",
  "Access on any device",
  "Distraction-free editor with dark & light modes",
  "Autosave & backups",
  "Grammar plugin support",
  "Export anytime",
];
</script>

<template>
  <UiContainer size="sm">
    <div
      class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none dark:bg-gray-700/50 dark:ring-white/10"
    >
      <div class="p-8 sm:p-10 lg:flex-auto">
        <h3
          class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          Novelize Pro
        </h3>
        <p class="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
          One plan with everything included. No hidden tiers, no surprises.
          Start with a 30-day free trial, no credit card required.
        </p>
        <div class="mt-10 flex items-center gap-x-4">
          <h4
            class="flex-none text-sm/6 font-semibold text-orange-600 dark:text-orange-400"
          >
            What's included
          </h4>
          <div class="h-px flex-auto bg-gray-100 dark:bg-white/10" />
        </div>
        <ul
          role="list"
          class="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6 dark:text-gray-300"
        >
          <li
            v-for="feature in includedFeatures"
            :key="feature"
            class="flex gap-x-3"
          >
            <Icon
              name="IconCheck"
              :size="24"
              class="size-6"
              aria-hidden="true"
            />
            {{ feature }}
          </li>
        </ul>
      </div>
      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
        <div
          class="rounded-2xl bg-gray-50 py-10 text-center inset-ring inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 dark:bg-gray-800 dark:inset-ring-white/10"
        >
          <div class="mx-auto max-w-xs px-8">
            <p class="text-base font-semibold text-gray-600 dark:text-gray-400">
              $9 / month or $65 / year
            </p>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Save 40% with annual billing
            </p>
            <p class="mt-6 flex items-baseline justify-center gap-x-2">
              <span
                class="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >$9</span
              >
              <span
                class="text-sm/6 font-semibold tracking-wide text-gray-600 dark:text-gray-400"
                >/month</span
              >
            </p>
            <a
              href="https://app.getnovelize.com/register"
              class="mt-10 block w-full rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:shadow-none dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500"
              >Start your free 30-day trial</a
            >
            <p class="mt-6 text-xs/5 text-gray-600 dark:text-gray-400">
              30-day free trial • No credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  </UiContainer>
</template>
