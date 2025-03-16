<script setup>
import hero from "~/data/hero";
</script>

<template>
  <div id="hero" class="py-8 h-dvh overflow-hidden relative">
    <div
      class="container mx-auto flex items-stretch justify-between gap-3 md:flex-row flex-col z-10"
    >
      <div class="w-full flex items-center justify-center">
        <NuxtImg
          :src="hero.image"
          :alt="hero.name"
          class="w-6/12 h-3w-6/12 rounded-xl object-left-bottom object-contain"
        />
      </div>

      <div
        class="w-full flex flex-col justify-center text-[#121212] text-center md:text-left"
      >
        <h1 class="text-5xl font-bold dark:text-gray-100">{{ hero.title }}</h1>
        <h3 class="text-xl font-medium text-gray-500 pt-3">
          {{ hero.subtitle }} <br />
          {{ hero.subheading }}
        </h3>
      </div>
    </div>
  </div>
</template>
