<script setup>
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const errorMessage = ref("");

const handleSubmit = async (event) => {
  event.preventDefault();
  isSubmitting.value = true;

  const formData = new FormData(event.target);

  try {
    const response = await fetch("https://app.getnovelize.com/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      isSubmitted.value = true;
      errorMessage.value = "";
      event.target.reset();
    } else {
      // Handle different types of errors
      if (response.status === 403) {
        errorMessage.value =
          "Access denied. Please contact support@getnovelize.com if this error persists.";
      } else if (data.errors) {
        // Handle validation errors
        const errorText = Object.values(data.errors).flat().join(", ");
        errorMessage.value = errorText;
      } else {
        errorMessage.value =
          data.message ||
          "There was an error sending your message. Please try again.";
      }
    }
  } catch (error) {
    errorMessage.value =
      "There was an error sending your message. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <UiContainer size="sm">
    <div class="mx-auto max-w-xl">
      <form @submit="handleSubmit" class="space-y-6">
        <div>
          <label
            for="name"
            class="block text-sm/6 font-semibold text-parchment-900"
            >Name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="name"
              id="name"
              required
              autofocus
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-parchment-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm/6 font-semibold text-parchment-900"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              required
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-parchment-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
            />
          </div>
        </div>
        <div>
          <label
            for="message"
            class="block text-sm/6 font-semibold text-parchment-900"
            >Message</label
          >
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="6"
              required
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-parchment-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
            />
          </div>
        </div>
        <UiButton
          type="submit"
          class="mt-8 block w-full"
          size="lg"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? "Sending..." : "Send Message" }}
        </UiButton>

        <div
          v-if="isSubmitted"
          class="mt-4 p-4 bg-green-50 border border-green-200 rounded-md"
        >
          <p class="text-green-800">
            Thank you! Your message has been sent successfully.
          </p>
        </div>

        <div
          v-if="errorMessage"
          class="mt-4 p-4 bg-red-50 border border-red-200 rounded-md"
        >
          <p class="text-red-800">
            {{ errorMessage }}
          </p>
        </div>
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
