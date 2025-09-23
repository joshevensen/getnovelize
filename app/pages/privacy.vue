<script lang="ts" setup>
const { data: page } = await useAsyncData("privacy-content", () => {
  return queryCollection("legal").path("/legal/privacy").first();
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
