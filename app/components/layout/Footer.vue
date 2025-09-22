<script setup>
import { computed } from "vue";
import Icon from "~/components/ui/Icon.vue";

const { data: companyData } = await useAsyncData("company-footer", () =>
  queryCollection("company").first()
);
const { data: menus } = await useAsyncData("menus-footer", () =>
  queryCollection("menus").first()
);
</script>

<template>
  <footer class="">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav
        class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        aria-label="Footer"
      >
        <a
          v-for="item in menus.footer"
          :key="item.name"
          :href="item.href"
          class="text-gray-600 text-lg hover:text-gray-900"
          >{{ item.name }}</a
        >
      </nav>
      <div class="mt-6 flex justify-center gap-x-10">
        <a
          v-for="item in menus.social"
          :key="item.name"
          :href="item.href"
          class="text-gray-600 hover:text-gray-800"
        >
          <span class="sr-only">{{ item.name }}</span>
          <Icon
            :name="item.icon"
            :size="24"
            class="size-6"
            aria-hidden="true"
          />
        </a>
      </div>
      <p class="mt-10 text-center text-sm/6 text-gray-600">
        &copy; {{ companyData.name }} {{ companyData.yearStart }} -
        {{ new Date().getFullYear() }}. All rights reserved. &nbsp;
        <a
          v-for="item in menus.copyright"
          :key="item.name"
          :href="item.href"
          class="mx-4 text-gray-600 hover:text-gray-800"
          >{{ item.name }}</a
        >
      </p>
    </div>
  </footer>
</template>
