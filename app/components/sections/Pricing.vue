<script setup>
const includedFeatures = [
  "Unlimited projects",
  "Scene-based writing",
  "Worldbuilding Notebook",
  "Access on any device",
  "Distraction-free editor",
  "Autosave & backups",
  "Grammar plugin support",
  "Export anytime",
];
</script>

<template>
  <UiContainer size="sm">
    <div
      class="mx-auto mt-16 max-w-2xl bg-parchment-50 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
    >
      <div class="p-8 sm:p-10 lg:flex-auto">
        <p class="text-xl/7 text-gray-600">
          One plan with everything included. No hidden tiers, no surprises.
          <strong class="text-orange-600"
            >Start with a 17-day free trial.</strong
          >
        </p>
        <div class="mt-5 flex items-center gap-x-4">
          <h4 class="flex-none text-sm/6 font-semibold text-orange-600">
            What's included
          </h4>
          <div class="h-px flex-auto bg-parchment-300" />
        </div>
        <ul
          role="list"
          class="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-4"
        >
          <li
            v-for="feature in includedFeatures"
            :key="feature"
            class="flex gap-x-3"
          >
            <UiIcon
              name="IconCheck"
              :size="24"
              class="size-6 text-orange-600"
              aria-hidden="true"
            />
            {{ feature }}
          </li>
        </ul>
      </div>
      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
        <div
          class="rounded-2xl bg-parchment-200 py-6 text-center inset-ring inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10"
        >
          <div class="mx-auto max-w-sm px-8">
            <p class="text-6xl font-semibold text-gray-600">$9/month</p>
            <p class="my-4 text-2xl font-semibold text-gray-600">or</p>
            <p class="text-6xl font-semibold text-gray-600">$65/year</p>
            <UiButton
              href="https://app.getnovelize.com/register"
              class="mt-10 block w-full"
            >
              Start writing today
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </UiContainer>
</template>
