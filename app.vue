<script setup></script>

<template>
  <NuxtLayout class="bg-gray-100 dark:bg-gray-950">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
