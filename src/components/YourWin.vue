<template>
  <div
    class="yourwin absolute top-7 left-7 flex flex-col max-w-[416px] max-h-[416px] w-full h-full m-auto rounded-full overflow-hidden z-30 mobile-l:max-w-[300px] mobile-l:max-h-[300px] mobile-l:top-[13px] mobile-l:left-[13px]">
    <div class="pt-[50px] text-center z-10 mobile-l:pt-[26px]">
      <p class="mb-2 text-[32px] font-bold leading-[1.4] mobile-l:text-[22px]">Ваш выигрыш</p>
      <p class="golden-text mb-[18px] text-5xl font-black leading-[1.3] mobile-l:text-[34px]">150 ФС + 275%</p>
      <button class="relative h-10 px-[34px] text-sm buttun-gradiend rounded-lg z-[2] hover:mobile-l:h-10">Забрать приз</button>
      <div class="absolute -bottom-[5px] left-1/2 max-w-[336px] w-full -translate-x-1/2 mobile-l:max-w-[224px] mobile-l:bottom-0">
        <img src="@/assets/images/yourwin/yourwin-gift.png" alt="your win gift">
      </div>
    </div>
    <div class="absolute -bottom-[54%] left-1/2 w-[640px] h-[640px] -translate-x-1/2 mobile-l:-bottom-[100%]">
      <img class="yourwin__start_front absolute left-1/2 -translate-x-1/2 z-[3]" src="@/assets/images/yourwin/yourwin-animation-star-front.svg" alt="star ligth front">
      <img class="yourwin__start_back" src="@/assets/images/yourwin/yourwin-animation-star-back.svg" alt="star ligth back">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.yourwin {
  background: url('@/assets/images/yourwin/yourwin-bg.png') center no-repeat;

  &__start_front {
    mix-blend-mode: screen;  
  }
  
  &__start_back {
    animation: start-rotating 25s linear infinite;  
  }
}

@keyframes start-rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
