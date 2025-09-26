<script setup>
const people = [
  {
    name: "Josh",
    role: "Founder, Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "I've been a software engineer for over 10 years, and I built Novelize while I was learning PHP. I've been improving it ever since. My passion is user experience — creating software that feels simple and improves people's lives.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Melanie",
    role: "Marketing Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
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
    <div class="grid grid-cols-1 gap-20 xl:grid-cols-6">
      <div class="max-w-2xl xl:col-span-2">
        <h2
          class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white"
        >
          The Team
        </h2>
        <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
          We're a small family team, building Novelize together.
        </p>
      </div>
      <ul
        role="list"
        class="divide-y divide-gray-200 xl:col-span-4 dark:divide-gray-800"
      >
        <li
          v-for="person in people"
          :key="person.name"
          class="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row"
        >
          <img
            class="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
            :src="person.imageUrl"
            alt=""
          />
          <div class="max-w-xl flex-auto">
            <h3
              class="text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white"
            >
              {{ person.name }}
            </h3>
            <p class="text-base/7 text-gray-600 dark:text-gray-400">
              {{ person.role }}
            </p>
            <p class="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
              {{ person.bio }}
            </p>
            <ul role="list" class="mt-6 flex gap-x-6">
              <li>
                <a
                  :href="person.xUrl"
                  class="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <span class="sr-only">X</span>
                  <svg
                    class="size-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  :href="person.linkedinUrl"
                  class="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg
                    class="size-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </UiContainer>
</template>
