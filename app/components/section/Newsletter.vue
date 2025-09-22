<script setup>
import Icon from "~/components/ui/Icon.vue";

const content = {
  title: "Subscribe to our newsletter",
  description:
    "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.",
  form: {
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
  features: [
    {
      icon: "calendar",
      title: "Weekly articles",
      description:
        "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.",
    },
    {
      icon: "hand-stop",
      title: "No spam",
      description:
        "Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.",
    },
  ],
};
</script>

<template>
  <div class="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
      >
        <div class="max-w-xl lg:max-w-lg">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900">
            {{ content.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-600">
            {{ content.description }}
          </p>
          <div class="mt-6 flex max-w-md gap-x-4">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              :placeholder="content.form.placeholder"
            />
            <button
              type="submit"
              class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {{ content.form.buttonText }}
            </button>
          </div>
        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div
            v-for="feature in content.features"
            :key="feature.title"
            class="flex flex-col items-start"
          >
            <div class="rounded-md bg-white/50 p-2 ring-1 ring-gray-200">
              <Icon
                :name="feature.icon"
                :size="24"
                class="size-6 text-gray-600"
                aria-hidden="true"
              />
            </div>
            <dt class="mt-4 text-base font-semibold text-gray-900">
              {{ feature.title }}
            </dt>
            <dd class="mt-2 text-base/7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
