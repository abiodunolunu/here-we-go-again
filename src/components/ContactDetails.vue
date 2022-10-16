<script setup lang="ts">
import { useContactStore } from "@/stores/contact";

const { contactDetails } = useContactStore();

function removePrefix(
  value: string,
  type: typeof contactDetails[number]["type"]
) {
  if (type === "email") {
    return value.replace("mailto:", "");
  }
  if (type === "phoneNumber") {
    return value.replace("tel:", "");
  }
  return value;
}
</script>

<template>
  <div>
    <div
      v-for="contact in contactDetails"
      :key="contact.name"
      class="flex gap-3 items-center justify-center py-2"
    >
      <component :is="contact.icon" class="w-6" />

      <a
        target="_blank"
        :href="contact.link"
        class="text-blue-500 text-sm hover:underline"
        >{{ removePrefix(contact.link, contact.type) }}</a
      >
    </div>
  </div>
</template>

<style></style>
