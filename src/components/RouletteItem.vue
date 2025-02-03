<script setup lang="ts">
import type { IRouletteItem } from '@/types/types';
import { computed } from 'vue';

const props = defineProps<IRouletteItem>();

const rotateDeg = computed(() => {
  return `transform: translateX(-50%) rotate(${props.index * 45}deg)`;
})

</script>

<template>
  <div
    class="rouletteitem absolute left-1/2 flex justify-center max-w-[210px] max-h-[238px] w-1/2 h-1/2 pt-5 px-3 text-xl text-white origin-bottom text-cebter mobile-l:pt-[14px]"
    :style="rotateDeg"
  >
    <div>
      <p class="golden-text text-2xl font-black leading-[1.3] mobile-l:text-base mobile-l:leading-[1.1]">{{ props.title }}</p>
      <p 
        v-if="props.subtitle"
        class="text-sm mobile-l:text-[10px] mobile-l:leading-[1]"
      >{{ props.subtitle }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.rouletteitem {
  clip-path: polygon(100% 0, 50% 100%, 0 0);
  
  &:nth-child(odd) {
    background: url("/src/assets/images/roulette/sector-light.png") center / contain no-repeat;
  }

  &:nth-child(even) {
    background: url("/src/assets/images/roulette/sector-light.png")center / contain no-repeat;
  }
}

</style>
