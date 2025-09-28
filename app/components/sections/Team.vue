<script setup>
const people = [
  {
    name: "Josh",
    role: "Founder, Developer",
    imageUrl: "/josh.png",
    bio: "Loves Dr Pepper and dad jokes almost as much as tinkering with code.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Melanie",
    role: "Marketing Specialist",
    imageUrl: "/melanie.png",
    bio: "Forever chasing new books and always talking about the next story idea.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Benji",
    role: "Customer Support Specialist",
    imageUrl: "/benji.png",
    bio: "Into psychology, animals, and helping writers feel at home here.",
    xUrl: "#",
    linkedinUrl: "#",
  },
];
</script>

<template>
  <UiContainer class="-mt-16">
    <h2
      class="text-4xl text-center font-semibold tracking-tight text-parchment-900 sm:text-5xl"
    >
      The Team
    </h2>
    <ul role="list" class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
      <li
        v-for="person in people"
        :key="person.name"
        class="flex flex-col items-center"
      >
        <div class="w-full flex items-center gap-6">
          <div
            class="w-16 h-16 overflow-hidden rounded-3xl border border-gray-400"
          >
            <img class="w-16" :src="person.imageUrl" :alt="person.name" />
          </div>
          <div>
            <h3
              class="text-2xl font-semibold tracking-tight text-parchment-900"
            >
              {{ person.name }}
            </h3>
            <p class="text-base/7 text-gray-600 font-semibold">
              {{ person.role }}
            </p>
          </div>
        </div>
        <p class="mt-4 text-base/7 text-gray-600">
          {{ person.bio }}
        </p>
      </li>
    </ul>
  </UiContainer>
</template>
