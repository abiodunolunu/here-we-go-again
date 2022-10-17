<script setup lang="ts">
import ContactDetails from "@/components/ContactDetails.vue";
import Modal from "@/components/Modal.vue";
import gsap from "gsap";
import SplitType from "split-type";
import { onMounted, ref } from "vue";

onMounted(() => {
  const text = new SplitType("#info", { types: "words, chars" });

  gsap.from(text.chars, {
    duration: 0.1,
    // opacity: 0,
    scale: 0,
    y: -20,
    rotationX: 20,
    transformOrigin: "0% 50% -50",
    ease: "bounce.out",
    stagger: 0.02,
    fontSize: 0,
    onComplete: () => text.revert(),
  });
});

const showContactModal = ref(false);
</script>

<template>
  <main class="grid gap-10">
    <section class="">
      <h1
        class="text-4xl sm:text-6xl font-bold glitch text-black font-mono my-2"
        data-text="I'm Abiodun Olunu"
        id="name"
      >
        I'm Abiodun Olunu
      </h1>
      <p class="info" id="info">
        I am a self-taught front-end developer who is well versed in and uses
        modern frontend technologies like <span>VueJs</span>,
        <span>ReactJs</span>, <span>Svelte</span>, <span>TypeScript</span>, and
        sometimes do a bit of server-side scripting with <span>Node.js</span>,
        <span>Express</span> , <span>MongoDB</span>, <span>GraphQL</span>,
        <span>WebSockets</span>. Started March 2018, Since then, I've worked in
        various sectors such as Education, Health, Fintech and Commerce, being a
        frontend engineer in all of them. I watch anime 🤡, and sometimes biking
        🚴‍♂️. If you are looking for a Frontend developer to help bring your ideas
        to life, work on an existing project, or join a team of developers? I am
        currently available to take on any project.
      </p>
    </section>

    <section>
      <p class="info leading-10">
        You can see my
        <span class="btn">
          <router-link :to="{ name: 'experience' }">
            ☞ Work Time Line
          </router-link> </span
        >,
        <span class="btn">
          <router-link :to="{ name: 'npm-packages' }">
            ☞ NPM Packages
          </router-link></span
        >, and
        <span class="btn" @click="showContactModal = true"> ☞ Contact me</span>
        here.
      </p>
    </section>
    <modal v-model="showContactModal">
      <contact-details />
    </modal>
  </main>
</template>

<style scoped>
p.info {
  @apply leading-8 text-sm;
  span {
    @apply text-blue-600 rounded-[0.25rem]  font-mono;

    &.btn {
      @apply underline underline-offset-2 cursor-pointer font-semibold;
    }
  }
}
.my-name {
  animation: expand 5000ms ease-in-out ease-in-out;
}

@keyframes expand {
  0% {
    letter-spacing: -5px;
  }

  50% {
    letter-spacing: 0px;
  }

  70% {
    letter-spacing: 5px;
  }

  100% {
    letter-spacing: 0px;
  }
}
</style>
