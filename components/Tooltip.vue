<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  text: { type: String, required: true },
  position: { type: String, default: "top" }, // 支援 top, bottom, left, right
});

const tooltipPosition = ref("top");
const tooltipStyles = ref({});

onMounted(() => {
  setPosition(tooltipPosition.value);
});

// 當 `position` 改變時，更新 Tooltip 的位置
watch(
  () => props.position,
  (newPosition) => {
    tooltipPosition.value = newPosition;
    setPosition(tooltipPosition.value);
  }
);

// 設置 Tooltip 位置
function setPosition(position) {
  const tooltipElement = document.querySelector(".tooltip");
  const parentElement = tooltipElement?.parentElement;

  if (!parentElement || !tooltipElement) return;

  const parentRect = parentElement.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();

  const offset = 8; // 調整 Tooltip 與觸發元素的距離

  switch (position) {
    case "top":
      tooltipStyles.value = {
        bottom: `${parentRect.height + offset}px`,
        left: `${(parentRect.width - tooltipRect.width) / 2}px`,
      };
      if (parentRect.top - tooltipRect.height < 0) {
        // 如果超過螢幕邊界，則顯示在下方
        tooltipStyles.value = {
          top: `${parentRect.height + offset}px`,
          left: `${(parentRect.width - tooltipRect.width) / 2}px`,
        };
      }
      break;
    case "bottom":
      tooltipStyles.value = {
        top: `${parentRect.height + offset}px`,
        left: `${(parentRect.width - tooltipRect.width) / 2}px`,
      };
      if (parentRect.bottom + tooltipRect.height > window.innerHeight) {
        // 如果超過螢幕邊界，則顯示在上方
        tooltipStyles.value = {
          bottom: `${parentRect.height + offset}px`,
          left: `${(parentRect.width - tooltipRect.width) / 2}px`,
        };
      }
      break;
    // 其他方向的邏輯同理
  }
}
</script>

<template>
  <div class="relative group flex items-center justify-center">
    <slot />
    <!-- Tooltip 顯示區域 -->
    <div
      class="tooltip absolute w-max px-3 py-1 text-xs bg-white dark:bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ring shadow-xl ring-gray-900/5"
      :style="tooltipStyles"
    >
      {{ text }}
    </div>
  </div>
</template>
