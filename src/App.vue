<script setup lang="ts">
import gsap from "gsap";
import { RouterView } from "vue-router";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

const beforeEnter = (el: HTMLElement) => {
  el.style.transform = `translateY(320px)`;
  el.style.opacity = "0";
};

const enter = (el: HTMLElement, done: any) => {
  gsap.to(el, {
    duration: 0.75,
    translateY: 0,
    opacity: 1,
    onComplete: done,
  });
};
const leave = (el: HTMLElement, done: any) => {
  gsap.to(el, {
    duration: 0.75,
    translateY: 320,
    opacity: 0,
    onComplete: done,
  });
};
</script>

<template>
  <div>
    <app-header />
    <div class="container mx-auto my-20 px-8">
      <router-view v-slot="{ Component }">
        <transition
          appear
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <app-footer />
  </div>
</template>

<style scoped></style>
