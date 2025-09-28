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
  <UiContainer>
    <div class="mx-auto max-w-5xl">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
        <div class="lg:col-span-3">
          <h3
            class="text-3xl font-semibold tracking-tight text-parchment-900 mb-4"
          >
            Our Story
          </h3>

          <p class="mt-6 text-lg/8 text-gray-700">
            We were tired of juggling sticky notes, scattered docs, and tools
            that weren't built for novelists. So we built the writing space we
            wanted for ourselves — a clean, reliable place to focus on the
            story.
          </p>
          <p class="mt-6 text-lg/8 text-gray-700">
            That space grew into Novelize, now trusted by thousands of writers
            around the world. For over 9 years, we've been helping hobby
            writers, fanfic authors, and novelists finish their stories with
            focus, organization, and peace of mind.
          </p>
          <p class="mt-6 text-lg/8 text-gray-700">
            From our early days serving a small community of dedicated writers
            to now supporting over 6,000 users with 12,300+ novels started,
            we've stayed true to our mission: keep you writing. Whether you're
            drafting your first fanfic or your tenth novel, we're here to
            provide the simple, reliable tools you need.
          </p>
          <p class="mt-6 text-lg/8 text-gray-700">
            After more than 8 years, the mission is still the same: keep you
            writing. We believe every story matters, and we're committed to
            giving writers the space they need to bring their ideas to life.
          </p>

          <div class="mt-8 pt-8 border-t border-parchment-500">
            <h3
              class="text-2xl font-semibold tracking-tight text-parchment-900 mb-4"
            >
              Our Mission
            </h3>
            <p class="text-lg/8 text-gray-700 mb-6">
              To help every writer — from hobbyists to fanfic authors to
              novelists — finish their stories with focus, organization, and
              peace of mind.
            </p>

            <div class="mt-8 pt-8 border-t border-parchment-500">
              <h4
                class="text-2xl font-semibold tracking-tight text-parchment-900 mb-3"
              >
                Our Values
              </h4>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-start gap-3">
                  <UiIcon
                    name="IconCheck"
                    class="size-5 flex-none text-orange-600 mt-0.5"
                  />
                  <span
                    ><strong>Simplicity:</strong> A clean, focused editor
                    without clutter</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <UiIcon
                    name="IconCheck"
                    class="size-5 flex-none text-orange-600 mt-0.5"
                  />
                  <span
                    ><strong>Reliability:</strong> Autosave, cloud sync, and
                    stability you can trust</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <UiIcon
                    name="IconCheck"
                    class="size-5 flex-none text-orange-600 mt-0.5"
                  />
                  <span
                    ><strong>Encouragement:</strong> Feels cozy, validating, not
                    intimidating</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <UiIcon
                    name="IconCheck"
                    class="size-5 flex-none text-orange-600 mt-0.5"
                  />
                  <span
                    ><strong>Identity Fit:</strong> Built for hobby and fanfic
                    writers without judgment</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h2
            class="text-2xl font-semibold tracking-tight text-parchment-900 sm:text-3xl"
          >
            The Team
          </h2>
          <ul role="list" class="mt-6 space-y-10">
            <li
              v-for="(person, index) in people"
              :key="person.name"
              class="flex items-start gap-4"
            >
              <div
                class="w-12 h-12 overflow-hidden rounded-2xl border border-gray-400 flex-shrink-0"
              >
                <img class="w-12" :src="person.imageUrl" :alt="person.name" />
              </div>
              <div>
                <h3
                  class="text-lg font-semibold tracking-tight text-parchment-900"
                >
                  {{ person.name }}
                </h3>
                <p class="text-sm/6 text-gray-600 font-semibold">
                  {{ person.role }}
                </p>
                <p class="mt-2 text-sm/6 text-gray-600">
                  {{ person.bio }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </UiContainer>
</template>
