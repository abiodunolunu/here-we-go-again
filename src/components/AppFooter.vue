<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="text-sm flex justify-center items-center py-2 fixed bottom-0 w-full bg-black text-white font-mono"
  >
    <div class="text-sm">
      <p>Abeydev {{ currentYear }}</p>
    </div>
  </footer>
</template>

<style></style>
