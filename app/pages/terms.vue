<script lang="ts" setup>
const { data: page } = await useAsyncData("terms-content", () => {
  return queryCollection("legal").path("/legal/terms").first();
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
