<script setup>
const stats = [
  {
    id: 1,
    name: "Novels Started",
    value: "12,300+",
  },
  {
    id: 2,
    name: "Notebook Entries",
    value: "39,000+",
  },
  {
    id: 3,
    name: "Active Users",
    value: "6,000+",
  },
  {
    id: 4,
    name: "Years Running",
    value: "8+",
  },
];
</script>

<template>
  <UiContainer>
    <div class="max-w-4xl mx-auto">
      <p class="mt-6 text-xl/8 text-gray-700">
        Scrivener had a 300+ page manual. Even as a software engineer, I found
        it overwhelming. So I built my own tool — something simple, focused, and
        easy to use.
      </p>
      <p class="mt-6 text-lg/8 text-gray-700">
        I opened it up in 2016, and Novelize has been a steady side business
        ever since. Nearly a decade later, my two oldest children have joined me
        to help turn Novelize into something bigger than it's ever been.
      </p>
      <p class="mt-6 text-lg/8 text-gray-700">
        We're a small family team, building Novelize together. What started as a
        personal project has grown into something we're all passionate about.
        We're not trying to be everything for everyone. Novelize won't replace
        publishing tools that you only use occasionally. What we do is focus on
        the one thing you do every day: <strong>write</strong>.
      </p>
    </div>
    <dl
      class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
    >
      <div
        v-for="stat in stats"
        :key="stat.id"
        class="flex flex-col bg-beige-400 p-8"
      >
        <dt class="text-sm/6 font-semibold text-gray-600">
          {{ stat.name }}
        </dt>
        <dd
          class="order-first text-3xl font-semibold tracking-tight text-gray-900"
        >
          {{ stat.value }}
        </dd>
      </div>
    </dl>
  </UiContainer>
</template>
