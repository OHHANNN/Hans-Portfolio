<script setup>
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

import sosialMedia from "~/data/sosialMedia";

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const toggleDarkMode = () => {
  colorMode.value = isDark.value ? "" : "dark";
};
</script>

<template>
  <header class="fixed top-0 left-0 w-full shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <NuxtLink to="/" class="text-lg font-bold text-gray-800 dark:text-white">
        H
      </NuxtLink>

      <!-- Menu -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink to="/about" class="nav-link">關於我</NuxtLink>
        <NuxtLink to="/projects" class="nav-link">作品</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">聯絡</NuxtLink>
      </nav>

      <div class="flex gap-2">
        <!-- Sosial Media -->
        <ol class="flex gap-2 text-[#121212] dark:text-gray-300">
          <li v-for="media in sosialMedia" :key="media.id">
            <Tooltip :text="media.name" position="bottom">
              <a :href="media.link" target="_blank" rel="noopener noreferrer">
                <Icon size="20px" :name="media.iconName" />
              </a>
            </Tooltip>
          </li>
        </ol>
        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDarkMode"
          class="flex items-center justify-center px-2 py-1 rounded-xs bg-gray-200 dark:bg-transparent"
        >
          <Icon
            :name="isDark ? 'ph:moon' : 'ph:sun'"
            size="20"
            :class="isDark ? 'text-white' : 'text-gray-800'"
          />
        </button>
      </div>
    </div>
  </header>
</template>
<!--
<style scoped>
.nav-link {
  @apply text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition;
}
</style> -->
