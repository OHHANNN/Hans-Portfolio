<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-5 right-5 flex items-center justify-center bg-gray-950 text-white dark:text-gray-400 dark:ring p-3 rounded-full transition-all duration-300 hover:bg-gray-500 shadow-md"
    :class="{
      'opacity-100 translate-y-0': isVisible,
      'opacity-0 translate-y-5': !isVisible,
    }"
  >
    <Icon name="uil:arrow-up" size="20px" />
  </button>
</template>
