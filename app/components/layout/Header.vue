<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [
  { name: "Pricing", href: "/pricing" },
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const loginUrl = "https://app.getnovelize.com/login";
const signupUrl = "https://app.getnovelize.com/register";

const mobileMenuOpen = ref(false);
</script>

<template>
  <header>
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 md:px-8"
      aria-label="Global"
    >
      <div class="flex md:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Novelize</span>
          <img class="h-8 w-auto" src="/logo.png" alt="Novelize" />
        </NuxtLink>
      </div>
      <div class="hidden md:flex md:gap-x-12">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-sm/6 font-semibold text-parchment-900"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
        <UiButton
          :href="loginUrl"
          variant="text"
          size="sm"
          class="hidden! md:block!"
          >Log in</UiButton
        >
        <UiButton :href="signupUrl" size="sm">Start Writing</UiButton>
      </div>
      <div class="flex md:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <UiIcon
            name="IconMenu2"
            :size="24"
            class="size-6"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
    <Dialog
      class="md:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800/10"
      >
        <div class="flex items-center gap-x-6">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Novelize</span>
            <img class="h-8 w-auto" src="/logo.png" alt="Novelize" />
          </NuxtLink>
          <UiButton :href="signupUrl" size="sm" class="ml-auto">
            Start Writing
          </UiButton>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <UiIcon name="IconX" :size="24" class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-parchment-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
                >Home
              </NuxtLink>
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-parchment-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
                >{{ item.name }}
              </NuxtLink>
            </div>
            <div class="py-6">
              <UiButton
                :href="loginUrl"
                variant="text"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 hover:bg-gray-50"
                >Log in</UiButton
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
