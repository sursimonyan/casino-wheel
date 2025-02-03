<template>
  <button class="relative m-auto z-10 hover:brightness-110">
    <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold mobile-l:text-base mobile-l:">
      <slot></slot>
    </span>
    <img class="mobile-l:w-[135px]" src="@/assets/images/roulette/spin.png" alt="spin">
  </button>
</template>
