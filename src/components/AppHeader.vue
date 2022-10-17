<script setup lang="ts">
import { ref } from "vue";
import ContactDetails from "./ContactDetails.vue";
import Modal from "./Modal.vue";

const showModal = ref(false);
</script>

<template>
  <header class="py-5 px-8">
    <div class="flex justify-between items-center container mx-auto">
      <p class="name text-3xl font-bold">
        <router-link to="/"> Abeydev </router-link>
      </p>
      <ul class="flex items-center gap-2 text-sm text-blue-500">
        <li @click="showModal = true" class="cursor-pointer">Contact</li>
        <li>
          <a
            target="_blank"
            class="hover:underline hover:underline-offset-2"
            href="https://drive.google.com/file/d/1Mn4lPT_b8SZ-YdS8xk5imc8fGyKQmMpR/view?usp=sharing"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
    <Modal v-model="showModal">
      <ContactDetails />
    </Modal>
  </header>
</template>

<style scoped>
p.name {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
