<script setup></script>

<template>
  <UiContainer size="md">
    <div class="mx-auto max-w-2xl">
      <div class="mb-12">
        <h2
          class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          How to reach us
        </h2>
        <p class="mt-4 text-base/7 text-gray-600 dark:text-gray-400">
          Email:
          <a
            href="mailto:support@getnovelize.com"
            class="font-semibold text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
            >support@getnovelize.com</a
          >
        </p>
        <p class="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
          Or use the form below (we'll reply as soon as we can).
        </p>
      </div>

      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        class="mx-auto"
      >
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="name"
              class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
              >Name</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                required
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-orange-500"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
              >Email</label
            >
            <div class="mt-2.5">
              <input
                type="email"
                name="_replyto"
                id="email"
                required
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
                rows="6"
                required
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-orange-500"
              />
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button
            type="submit"
            class="block w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500"
          >
            Send Message
          </button>
        </div>
      </form>

      <div class="mt-16 border-t border-gray-200 pt-12 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          What to expect
        </h3>
        <p class="mt-4 text-base/7 text-gray-600 dark:text-gray-400">
          We don't have a big call center or outsourced support. It's just us —
          the same people who build and run Novelize. We try to answer within 24
          hours, but sometimes it might take a little longer.
        </p>
        <p class="mt-4 text-base/7 text-gray-600 dark:text-gray-400">
          Your words matter to us. Thanks for trusting us with your stories.
        </p>
      </div>
    </div>
  </UiContainer>
</template>
