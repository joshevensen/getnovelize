<template>
  <UiContainer size="md">
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
            >First name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-orange-500"
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
            >Last name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-orange-500"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-orange-500"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
            >Message</label
          >
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-orange-500"
            />
          </div>
        </div>
        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <div
              class="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-orange-600 transition-colors duration-200 ease-in-out has-checked:bg-orange-600 has-focus-visible:outline-2 dark:bg-white/5 dark:inset-ring-white/10 dark:outline-orange-500 dark:has-checked:bg-orange-500"
            >
              <span
                class="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5"
              />
              <input
                type="checkbox"
                class="absolute inset-0 appearance-none focus:outline-hidden"
                aria-label="Agree to policies"
                id="agree-to-policies"
                name="agree-to-policies"
              />
            </div>
          </div>
          <label
            class="text-sm/6 text-gray-600 dark:text-gray-400"
            for="agree-to-policies"
          >
            By selecting this, you agree to our
            {{ " " }}
            <a
              href="#"
              class="font-semibold whitespace-nowrap text-orange-600 dark:text-orange-400"
              >privacy policy</a
            >.
          </label>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          class="block w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500"
        >
          Let's talk
        </button>
      </div>
    </form>
  </UiContainer>
</template>
