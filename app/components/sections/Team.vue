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
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Benji discovered a love for helping people while volunteering at a local museum. Now they take care of our amazing users and test new features before release.",
    xUrl: "#",
    linkedinUrl: "#",
  },
];
</script>

<template>
  <UiContainer>
    <h2
      class="text-4xl text-center font-semibold tracking-tight text-gray-900 sm:text-5xl"
    >
      The Team
    </h2>
    <p class="my-4 mx-auto max-w-4xl text-center text-lg/8 text-gray-600">
      We're a small family team, building Novelize together. What started as a
      personal project has grown into something we're all passionate about. My
      wife was the first to believe in the idea, and now our two oldest children
      have joined us to help shape Novelize's future.
    </p>
    <ul role="list" class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
      <li
        v-for="person in people"
        :key="person.name"
        class="flex flex-col items-center text-center"
      >
        <img
          class="aspect-4/5 w-42 border border-gray-400 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          :src="person.imageUrl"
          alt=""
        />
        <div class="mt-6">
          <h3 class="text-2xl font-semibold tracking-tight text-gray-900">
            {{ person.name }}
          </h3>
          <p class="text-base/7 text-gray-600 font-semibold">
            {{ person.role }}
          </p>
          <p class="mt-4 text-base/7 text-gray-600">
            {{ person.bio }}
          </p>
        </div>
      </li>
    </ul>
  </UiContainer>
</template>
