<script setup>
const people = [
  {
    name: "Josh",
    role: "Founder, Developer",
    imageUrl: "/josh.png",
    bio: "I've been a software engineer for over 10 years, and I built Novelize while I was learning PHP. I've been improving it ever since. My passion is user experience — creating software that feels simple and improves people's lives.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Melanie",
    role: "Marketing Specialist",
    imageUrl: "/melanie.png",
    bio: "Melanie is a writer and artist who lives on AO3 and Tumblr. They're passionate about helping writers find tips, tricks, and tools to succeed — and they bring that same energy to growing Novelize's community.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Benji",
    role: "Customer Support Specialist",
    imageUrl: "/benji.png",
    bio: "Benji discovered a love for helping people while volunteering at a local museum. Now they take care of our amazing users and test new features before release.",
    xUrl: "#",
    linkedinUrl: "#",
  },
];
</script>

<template>
  <UiContainer class="-mt-16">
    <h2
      class="text-4xl text-center font-semibold tracking-tight text-gray-900 sm:text-5xl"
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
            <h3 class="text-2xl font-semibold tracking-tight text-gray-900">
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
