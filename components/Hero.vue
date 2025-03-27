<script setup>
const { t } = useI18n();
</script>

<template>
  <div
    id="hero"
    class="h-full md:h-[60dvh] overflow-hidden relative flex items-center"
  >
    <div
      class="container mx-auto flex items-stretch justify-between gap-3 md:flex-row flex-col z-10"
    >
      <div class="relative w-full flex items-center justify-center">
        <div class="relative w-6/12">
          <NuxtImg
            src="/img/avatar.webp"
            :alt="t('hero.title')"
            class="w-full h-full rounded-full object-left-bottom object-cover"
          />
        </div>
      </div>

      <div
        class="w-full flex flex-col justify-center text-[#121212] text-center md:text-left"
      >
        <h1 class="text-5xl font-bold dark:text-gray-100">
          {{ t("hero.title") }}
        </h1>
        <h3 class="text-2xl font-medium text-gray-500 pt-3">
          {{ t("hero.subtitle") }} <br />
          <span class="text-[15px]" style="letter-spacing: 3px">{{
            t("hero.subheading")
          }}</span>
        </h3>
      </div>
    </div>
  </div>
</template>
