<script setup>
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

import navList from "~/data/navList";
import sosialMedia from "~/data/sosialMedia";

const { locale, t, setLocale } = useI18n();
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const toggleDarkMode = () => {
  colorMode.value = isDark.value ? "" : "dark";
};

const toggleLanguage = () => {
  const newLocale = locale.value === "en" ? "zh" : "en";
  setLocale(newLocale);

  document.cookie = `i18n_redirected=${newLocale}; path=/; max-age=31536000`;
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
      <div class="hidden md:flex space-x-6">
        <NuxtLink
          v-for="list in navList"
          :key="list.id"
          :to="list.link"
          class="nav-link"
        >
          {{ t(list.name) }}
        </NuxtLink>
      </div>

      <div class="flex gap-2 items-center">
        <!-- Sosial Media -->
        <div class="flex gap-2 items-center text-[#121212] dark:text-gray-400">
          <div v-for="media in sosialMedia" :key="media.id">
            <Tooltip :text="media.name" position="bottom">
              <NuxtLink
                :href="media.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size="20px" :name="media.iconName" />
              </NuxtLink>
            </Tooltip>
          </div>
        </div>
        <ClientOnly>
          <!-- language -->
          <button
            @click="toggleLanguage"
            class="flex items-center justify-center px-2 py-1 rounded-xs text-gray-950 dark:text-gray-400 bg-gray-200 dark:bg-transparent"
          >
            {{ t(locale) }}
          </button>
          <!-- Dark Mode Toggle -->

          <button
            @click="toggleDarkMode"
            class="flex items-center justify-center px-2 py-1 rounded-xs bg-gray-200 dark:bg-transparent"
          >
            <Icon
              :name="isDark ? 'ph:moon' : 'ph:sun'"
              size="20"
              class="text-gray-950 dark:text-gray-400"
            />
          </button>
        </ClientOnly>
      </div>
    </div>
  </header>
</template>
