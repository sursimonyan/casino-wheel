<script setup lang="ts">

interface IProps {
  spinCount: number;
}

const defaultSpinCount = 2;

const props = defineProps<IProps>();

</script>
<template>
  <div class="relative flex-1 flex items-center gap-5 mb-5 z-10 tablet:flex-col tablet:order-1 tablet:mb-[14px] mobile-l:gap-3 mobile-l:mb-[10px]">
    <div 
      class="prize relative origin-center w-[126px] h-[126px] mobile-l:w-[100px] mobile-l:h-[100px]"
      :class="props.spinCount < defaultSpinCount && 'prize__win'"
    >
      <div class="prize__front absolute top-0 left-0 w-full h-full">
        <img
          src="@/assets/images/prize.svg"
          alt="prize"
        >
      </div>
      <div class="prize__back absolute top-0 left-0 flex w-full h-full">
        <img
          class="absolute top-0 left-0 flex w-full h-full"
          src="@/assets/images/prize-win.svg"
          alt="prize"
        >
        <div class="m-auto text-center">
          <p class="golden-text text-2xl font-black leading-[1.24] mobile-l:text-xl">150</p>
          <p class="text-sm mobile-l:text-xs">Фриспинов</p>
        </div>
      </div>
    </div>
    <div 
      class="prize relative origin-center w-[126px] h-[126px] mobile-l:w-[100px] mobile-l:h-[100px]"
      :class="props.spinCount === 0 && 'prize__win'"
    >
      <div class="prize__front absolute top-0 left-0 w-full h-full">
        <img
          src="@/assets/images/prize.svg"
          alt="prize"
        >
      </div>
      <div class="prize__back absolute top-0 left-0 flex w-full h-full">
        <img
          class="absolute top-0 left-0 flex w-full h-full"
          src="@/assets/images/prize-win.svg"
          alt="prize"
        >
        <div class="m-auto text-center">
          <p class="golden-text text-2xl font-black leading-[130%] mobile-l:text-xl">+225%</p>
          <p class="text-sm mobile-l:text-xs">на депозит</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.prize {
  perspective: 126px;
  transform-style: preserve-3d;
  transition: transform 500ms linear;
  will-change: transform;

  &__win {
    transform: rotateY(180deg);
  }

  &__front {
    backface-visibility: hidden;
    transform: rotateY(0deg);
    z-index: 2;
  }

  &__back {
    transform: rotateY(0deg);

    div {
      transform: rotateY(180deg);
    }
  }
}
</style>
