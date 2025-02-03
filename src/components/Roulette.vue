<script setup lang="ts">
import YourWin from './YourWin.vue';
import RouletteElements from './RouletteElements.vue';
import SpinButton from './SpinButton.vue';

interface IProps {
  spinCount: number;
  rouletteSpin: boolean;
  isShowYourWin: boolean;
  isYourWinLightAnimation: boolean;
}

const props = defineProps<IProps>();

const emit = defineEmits(['spin-play']);

const winBonus = () => {
  emit('spin-play');
}

</script>

<template>
    <div class="roulette relative flex w-[474px] h-[474px] z-20 mobile-l:max-w-[326px] mobile-l:max-h-[326px] mobile-l:overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full flex">
        <img
          src="@/assets/images/roulette/roulette.png"
          class="absolute top-0 left-0 max-w-[474px] max-h-[474px] w-full h-full z-[2] mobile-l:top-0 mobile-l:left-0 mobile-l:overflow-hidden"
          alt="roulette main"
        >
        <div>
          <img
            class="roulette__light absolute top-3 left-3 w-[calc(100%_-_24px)] h-[calc(100%_-_24px)] z-[2] mobile-l:hidden"
            src="@/assets/images/roulette/light.svg"
            alt="light 1"
          >
          <img
            class="roulette__light hidden absolute top-[10px] left-[10px] max-w-none w-[306px] h-[306px] z-[2] mobile-l:block"
            src="@/assets/images/roulette/light-mobile.svg"
            alt="light 1"
          >
          <img
            class="roulette__win_section absolute top-[30px] left-1/2 -translate-x-1/2 z-10 mobile-l:w-[144px] mobile-l:top-[20px]"
            src="@/assets/images/roulette/roulette-win-section.png"
            alt="win section"
          >
        </div>
        <div 
          class="roulette__star absolute top-0 left-0 z-20"
          :class="{'roulette__star_animation': !props.spinCount}"
        >
          <img src="@/assets/images/roulette/win-animation.svg" alt="light">
        </div>
        <SpinButton 
          :class="props.rouletteSpin && 'cursor-default hover:brightness-100'"
          @click="winBonus"
        >
        {{ spinCount }}
        </SpinButton>
      </div>
      <YourWin 
        v-if="props.isShowYourWin"
        class="opacity-0"
        :class="{'roulette__yourwin': props.isYourWinLightAnimation}"
      />
      <RouletteElements 
        :spinCount="props.spinCount"
        :rouletteSpin="props.rouletteSpin"
      />
    </div>
</template>

<style lang="scss" scoped>

.roulette {
  background-image: url('/src/assets/images/roulette/roulette-reflections.png');
  
  @media screen and (max-width: 576px) {
    background-size: cover;
  }

  &__light {
    animation: roulette-lights-rotate 40s linear infinite, 
               roulette-lights-pining 1000ms linear infinite alternate;
  }

  &__star {
    transform: scale(0);

    &_animation {
      animation: win-animation 1500ms ease-out 1s;
    }

    img {

      @media screen and (max-width: 576px) {
        transform: scale(0.65);
      }
    }
  }

  &__yourwin {
    opacity: 1;
    transition: opacity 500ms;
  }
}

@keyframes roulette-lights-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes roulette-lights-pining {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes win-animation {
  0% {
    transform: scale(0) rotate(0deg);
  }
  
  60% {
    transform: scale(1.5) rotate(-30deg);
    opacity: 1;
  }
  
  100% {
    transform: rotate(-30deg);
    opacity: 0;
  }
}

</style>
