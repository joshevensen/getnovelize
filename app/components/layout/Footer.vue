<script setup>
const socialMenu = [
  {
    name: "Tumblr",
    href: "https://www.tumblr.com/novelize",
    icon: "IconBrandTumblr",
  },
  // {
  //   name: "Reddit",
  //   href: "#",
  //   icon: "IconBrandReddit",
  // },
  // {
  //   name: "Twitter/X",
  //   href: "#",
  //   icon: "IconBrandTwitter",
  // },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@novelize8804",
    icon: "IconBrandYoutube",
  },
];
</script>

<template>
  <footer>
    <UiContainer size="sm">
      <div class="md:flex md:items-center md:justify-between px-8">
        <div class="flex justify-center gap-x-6 md:order-2">
          <a
            v-for="item in socialMenu"
            :key="item.name"
            :href="item.href"
            class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
          >
            <span class="sr-only">{{ item.name }}</span>
            <UiIcon
              :name="item.icon"
              :size="24"
              class="size-6"
              aria-hidden="true"
            />
          </a>
        </div>
        <p
          class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400"
        >
          &copy; Novelize 2016 - {{ new Date().getFullYear() }}. All rights
          reserved.
          <a
            href="/privacy"
            class="ml-4 mr-1.5 text-gray-600 hover:text-gray-800"
          >
            Privacy Policy
          </a>
          <a href="/terms" class="text-gray-600 hover:text-gray-800">
            Terms of Service
          </a>
        </p>
      </div>
    </UiContainer>
  </footer>
</template>
