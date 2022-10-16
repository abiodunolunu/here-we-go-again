<script setup lang="ts">
import { useExperienceStore } from "@/stores/experience";
import gsap from "gsap";

const { myExperiences } = useExperienceStore();

const beforeEnter = (el: HTMLElement) => {
  el.style.opacity = "0";
  el.style.transform = `translateY(1rem)`;

  return undefined;
};

const enter = (el: HTMLElement, done: any) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    onComplete: done,
    ease: "bounce.out",
    delay: +(el.dataset["index"] as string) * 0.4,
  });

  return undefined;
};
</script>

<template>
  <div>
    <h2 class="font-bold text-4xl glitch" data-text="Work Experience">
      Work Experience
    </h2>
    <TransitionGroup
      tag="div"
      @before-enter="beforeEnter"
      @enter="enter"
      appear
      class="mt-10"
    >
      <div
        class="exp px-4 pb-4 text-sm"
        v-for="(exp, idx) in myExperiences"
        :key="idx"
        :data-index="idx"
      >
        <div class="flex justify-between items-start">
          <p class="font-medium">
            {{ exp.workplace }}
            <span class="block text-xs text-black text-opacity-50 font-normal">
              {{ exp.startDate }} - {{ exp.endDate }}</span
            >
          </p>

          <p>{{ exp.position }}</p>
        </div>

        <ul>
          <li v-for="did in exp.whatIDid" :key="did" class="text-xs mb-2">
            ☞ {{ did }}
          </li>
        </ul>

        <div class="mt-4" v-if="exp.projects && exp.projects.length">
          <p class="text-sm font-light">Projects i worked on:</p>
          <ul class="grid gap-1 mt-2">
            <li v-for="pro in exp.projects" :key="pro.name" class="text-xs">
              ☞
              <a
                :href="pro.link"
                class="text-blue-500 hover:underline hover:underline-offset-2"
                >{{ pro.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.exp {
  @apply border-l relative;
}

.exp::before {
  content: "";
  @apply absolute top-0 -left-1 h-2 w-2 rounded-full border bg-white;
}

.exp:last-of-type::after {
  @apply absolute bottom-0 -left-1 h-2 w-2 rounded-full border bg-white;
  content: "";
}
</style>
