<script setup lang="ts">
import { ref } from 'vue';
import Roulette from './components/Roulette.vue';
import Parallax from './components/Parallax.vue';
import Prize from './components/Prize.vue';

const spiningDelay = 5300;
const showYourWin = 1300;
const showYourWinShow = 500;

const spinCount = ref<number>(2);
const rouletteSpin = ref<boolean>(false);
const isShowYourWin = ref<boolean>(false);
const isYourWinLightAnimation = ref<boolean>(false);

const spinPlay = () => {
  if (!rouletteSpin.value) {
    rouletteSpin.value = true;

    setTimeout(() => {
      rouletteSpin.value = false;

      if (spinCount.value) {
        spinCount.value--;
      }

      setTimeout(() => {
        if (!spinCount.value) {
          isShowYourWin.value = true;

          setTimeout(() => {
            isYourWinLightAnimation.value = true;
          }, showYourWinShow);
        }
      }, showYourWin);
    }, spiningDelay);
  }
}

</script>

<template>
  <div class="relative max-w-[1400px] w-full mx-auto pt-10 px-5 text-white z-10 mobile-l:pt-2">
    <div class="relative mb-5 z-10 tablet:mb-8 mobile-l:mb-3">
      <a href="#" class="block max-w-[102px] mb-8 mx-auto tablet:mb-24 mobile-l:max-w-[80px] mobile-l:mb-2">
        <img class="mx-auto" src="./assets/images/logo.png" alt="logo">
      </a>
      <h1 class="text-[28px] leading-[1.4] font-bold text-white text-center mobile-l:text-[18px]">
        БОНУС ДО
        <span class=" text-[#DFB778]">35 000 РУБ</span>
        НОВЫМ ИГРОКАМ!
      </h1>
    </div>
    <div class="roulette-center flex flex-col justify-between items-center tablet:flex-row">
      <Prize :spinCount="spinCount" />
      <Roulette :spinCount="spinCount" :rouletteSpin="rouletteSpin" :isShowYourWin="isShowYourWin"
        :isYourWinLightAnimation="isYourWinLightAnimation" @spin-play="spinPlay" />
      <Parallax class="hidden tablet:block" />
      <div class="absolute top-[20%] overflow-hidden tablet:hidden mobile-l:top-[30%]">
        <img src="./assets/images/mobile-elements.png"
          class=" max-w-[initial] w-[117%] -translate-x-[3%] mobile-l:w-[145%] mobile-l:-translate-x-[15%]"
          alt="mobile elements">
      </div>
    </div>
    <div
      class="relative w-full max-w-[384px] mx-auto -translate-y-11 z-20 tablet:hidden mobile-l:max-w-[160px] mobile-l:-translate-y-8">
      <img src="./assets/images/lady.png" alt="lady tablet">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.roulette-center {

  &:before {
    content: "";
    display: flex;
    flex: 1 1 0%;
  }
}
</style>
