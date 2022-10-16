<script setup lang="ts">
import gsap from "gsap";
import { ref, watch } from "vue";
interface Props {
  modelValue: boolean;
  persist?: boolean;
}
interface Emits {
  (e: "close"): void;
  (event: "update:modelValue", value: boolean): void;
}
const props = withDefaults(defineProps<Props>(), {
  persist: false,
});
const emit = defineEmits<Emits>();

const modalRef = ref<HTMLDivElement>();

const playPersistAnimation = (el: HTMLElement) => {
  const tl = gsap.timeline({
    defaults: { duration: 0.1 },
  });
  tl.to(el, {
    scale: 0.99,
  }).to(el, {
    scale: 1,
  });
};

watch(
  () => props.modelValue,
  (currentValue) => {
    if (currentValue) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  },
  {
    immediate: true,
  }
);

const beforeEnter = (el: HTMLElement) => {
  el.style.opacity = "0";
  el.style.transformOrigin = "50% 50%";
};

const enter = (el: HTMLElement) => {
  gsap.to(el, {
    // scaleY: 1,
    opacity: 1,
    duration: 0.5,
  });
};

const leave = (el: HTMLElement, done: any) => {
  console.log({ done });
  gsap.to(el, {
    // scaleY: 0,
    opacity: 0,
    duration: 0.5,
    onComplete: done,
  });
};

const tryToExit = (e: Event) => {
  const target = e.target as HTMLDivElement;

  if (props.persist) {
    playPersistAnimation(target.children[0] as HTMLElement);
  } else {
    emit("update:modelValue", false);
  }
};

const close = () => {
  emit("update:modelValue", false);
};
</script>

<template>
  <teleport to="#modal-root">
    <Transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center select-none"
        ref="modalRef"
        v-if="modelValue"
        @click.self="tryToExit"
      >
        <div class="relative w-full max-w-md">
          <div
            class="modal-content bg-white rounded-md p-4 select-auto max-h-[80vh] overflow-auto relative"
          >
            <slot />
          </div>
          <button
            class="absolute -top-10 right-0 bg-white h-8 w-8 rounded-full"
            @click="close"
          >
            X
          </button>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped></style>
