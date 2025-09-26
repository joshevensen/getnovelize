<template>
  <header>
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Novelize</span>
          <img class="h-8 w-auto dark:hidden" src="/logo.png" alt="Novelize" />
          <img
            class="h-8 w-auto not-dark:hidden"
            src="/logo.png"
            alt="Novelize"
          />
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >{{ item.name }}</a
        >
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
        <a
          href="#"
          class="hidden text-sm/6 font-semibold text-gray-900 lg:block dark:text-white"
          >Log in</a
        >
        <a
          href="#"
          class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500"
          >Sign up</a
        >
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
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
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800/10 dark:bg-gray-800 dark:sm:ring-gray-100/10"
      >
        <div class="flex items-center gap-x-6">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Novelize</span>
            <img
              class="h-8 w-auto dark:hidden"
              src="/logo.png"
              alt="Novelize"
            />
            <img
              class="h-8 w-auto not-dark:hidden"
              src="/logo.png"
              alt="Novelize"
            />
          </a>
          <a
            href="#"
            class="ml-auto rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500"
            >Sign up</a
          >
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <UiIcon name="IconX" :size="24" class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >Log in</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [
  { name: "Pricing", href: "/pricing" },
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const mobileMenuOpen = ref(false);
</script>
