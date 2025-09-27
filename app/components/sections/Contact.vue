<script setup></script>

<template>
  <UiContainer size="sm">
    <div class="mx-auto max-w-xl">
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        class="space-y-6"
      >
        <div>
          <label for="name" class="block text-sm/6 font-semibold text-gray-900"
            >Name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="name"
              id="name"
              required
              autofocus
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm/6 font-semibold text-gray-900"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="_replyto"
              id="email"
              required
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
            />
          </div>
        </div>
        <div>
          <label
            for="message"
            class="block text-sm/6 font-semibold text-gray-900"
            >Message</label
          >
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="6"
              required
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
            />
          </div>
        </div>
        <UiButton type="submit" class="mt-8 block w-full" size="lg">
          Send Message
        </UiButton>
      </form>

      <div class="mt-6">
        <p class="text-base/7 text-gray-600">
          We don't have a big call center or outsourced support. It's just us —
          the same people who build and run Novelize. We try to answer within 24
          hours, but sometimes it might take a little longer.
        </p>
        <p class="mt-4 text-base/7 text-gray-600">
          Your words matter to us. Thanks for trusting us with your stories.
        </p>
      </div>
    </div>
  </UiContainer>
</template>
