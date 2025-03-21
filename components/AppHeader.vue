<script setup>
import { useColorMode } from "@vueuse/core";
import { computed, ref, onMounted, onUnmounted } from "vue";

import navList from "~/data/navList";
import sosialMedia from "~/data/sosialMedia";

const { locale, t, setLocale } = useI18n();
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const isFixed = ref(false);
const isVisible = ref(true);
const lastScrollY = ref(0);
const headerHeight = ref(0);

const updateHeaderState = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < headerHeight.value) {
    isFixed.value = false;
    isVisible.value = true;
  } else {
    isFixed.value = true;
    isVisible.value = currentScrollY < lastScrollY.value;
  }

  lastScrollY.value = currentScrollY;
};

const toggleDarkMode = () => {
  colorMode.value = isDark.value ? "" : "dark";
};

const toggleLanguage = () => {
  const newLocale = locale.value === "en" ? "zh" : "en";
  setLocale(newLocale);

  document.cookie = `i18n_redirected=${newLocale}; path=/; max-age=31536000`;
};

onMounted(() => {
  const header = document.querySelector("header");
  if (header) {
    headerHeight.value = header.offsetHeight;
  }
  window.addEventListener("scroll", updateHeaderState);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateHeaderState);
});
</script>

<template>
  <header
    id="appHeader"
    class="w-full transition-all duration-300 bg-white dark:bg-gray-950 shadow-[0_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.1)]"
    :class="{
      'fixed top-0 left-0 w-full z-50': isFixed,
      '-translate-y-full': isFixed && !isVisible,
      'translate-y-0': isFixed && isVisible,
    }"
  >
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

      <div class="flex gap-2 items-stretch">
        <!-- Sosial Media -->
        <Tooltip
          v-for="media in sosialMedia"
          :key="media.id"
          class="text-[#121212] dark:text-gray-400"
          :text="media.name"
          position="bottom"
        >
          <NuxtLink
            :href="media.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center"
          >
            <Icon size="20px" :name="media.iconName" />
          </NuxtLink>
        </Tooltip>

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

  <!-- 佔位元素，避免內容位移 -->
  <div v-if="isFixed" :style="{ height: `${headerHeight}px` }"></div>
</template>
