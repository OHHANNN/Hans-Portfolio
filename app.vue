<script setup>
const { finalizePendingLocaleChange } = useI18n();

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange();
};
</script>

<template>
  <NuxtLayout class="bg-gray-100 dark:bg-gray-950">
    <NuxtPage
      :transition="{
        name: 'my',
        mode: 'out-in',
        onBeforeEnter,
      }"
    />
  </NuxtLayout>
</template>

<style>
.my-enter-active,
.my-leave-active {
  transition: opacity 0.3s;
}
.my-enter,
.my-leave-active {
  opacity: 0;
}
</style>
