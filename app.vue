<script setup>
import { useColorMode } from "@vueuse/core";

const colorMode = useColorMode();
</script>

<template>
  <div
    :class="{ dark: colorMode === 'dark' }"
    class="bg-white dark:bg-gray-950"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
