<script setup>
definePageMeta({
  pageTransition: {
    name: "rotate",
  },
});

const { t } = useI18n();
</script>

<template>
  <div
    class="min-h-dvh flex items-center justify-center text-[#121212] dark:text-white"
  >
    {{ t("about") }}
  </div>
</template>
