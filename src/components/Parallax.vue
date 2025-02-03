<script setup lang="ts">
import { computed } from 'vue';
import { useMediaQuery, useMouse } from '@vueuse/core';

const isMobileL = useMediaQuery('(min-width: 880px)');

const { x, y } = useMouse();

const parallaxTinyIcons = computed(() => {
  return `transform: translate(-50%, -50%) translate3d(${x.value * -1 / 40}px, ${y.value * -1 / 40}px, 0)`;
});

const parallaxSmallIcons = computed(() => {
  return `transform: translate(-50%, -50%) translate3d(${x.value * -1 / 30}px, ${y.value * -1 / 30}px, 0)`;
});

const parallaxMediumIcons = computed(() => {
  return `transform: translate(-50%, -50%) translate3d(${x.value * -1 / 20}px, ${y.value * -1 / 20}px, 0)`;
});

const parallaxBigIcons = computed(() => {
  return `transform: translate(-50%, -50%) translate3d(${x.value * -1 / 10}px, ${y.value * -1 / 10}px, 0)`;
});

const parallaxLady = computed(() => {
  return `transform: translateY(40px) translate3d(${x.value * -1 / 40}px, ${y.value * -1 / 40}px, 0)`;
});

</script>

<template>
  <div
    v-if="isMobileL" 
    class="absolute top-0 left-0 w-full h-[100vh]"
  >
    <img
      src="@/assets/images/parallax/parallax-tiny-icons.png"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
      alt="parallax small icons"
      :style="parallaxTinyIcons"
    >
    <img
      src="@/assets/images/parallax/parallax-small-icons.png"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
      alt="parallax small icons"
      :style="parallaxSmallIcons"
    >
    <img
      src="@/assets/images/parallax/parallax-medium-icons.png"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]"
      alt="parallax medium icons"
      :style="parallaxMediumIcons"
    >
    <img
      src="@/assets/images/parallax/parallax-big-icons.png"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[4]"
      alt="parallax big icons"
      :style="parallaxBigIcons"
    >
    <div 
      class="absolute bottom-0 left-0 max-w-[500px] w-[35vw] z-10 overflow-hidden"
      :style="parallaxLady"
    >
      <img src="@/assets/images/lady.png" alt="lady">
    </div>
  </div>
</template>
