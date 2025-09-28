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
    name: "Users Served",
    value: "6,000+",
  },
  {
    id: 4,
    name: "Years Running",
    value: "9+",
  },
];
</script>

<template>
  <UiContainer size="sm">
    <dl
      class="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
    >
      <div
        v-for="stat in stats"
        :key="stat.id"
        class="flex flex-col bg-parchment-300 p-8 gap-4"
      >
        <dt class="text-base/6 font-semibold text-gray-600">
          {{ stat.name }}
        </dt>
        <dd
          class="order-first text-5xl font-semibold tracking-tight text-parchment-900"
        >
          {{ stat.value }}
        </dd>
      </div>
    </dl>
  </UiContainer>
</template>
