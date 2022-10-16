<script setup lang="ts">
import { useNpmPackagesStore } from "@/stores/npmPackages";
import CodeSandBoxIcon from "../components/icons/CodeSandBoxIcon.vue";
import GithubIcon from "../components/icons/GithubIcon.vue";
import NpmIcon from "../components/icons/NpmIcon.vue";

const { myPackages } = useNpmPackagesStore();
</script>

<template>
  <div>
    <h2 class="font-bold text-4xl glitch" data-text="NPM Packages">
      NPM Packages
    </h2>
    <div class="flex flex-wrap gap-10 mt-10">
      <div
        v-for="{
          name,
          link,
          imageUrl,
          description,
          codeSandBox,
          githubRepo,
        } in myPackages"
        :key="name"
        class="border rounded-md max-w-xs overflow-hidden"
      >
        <div class="h-36">
          <img :src="imageUrl" alt="demo" class="w-full h-full object-cover" />
        </div>
        <hr />
        <div class="px-5 py-4">
          <div class="grid gap-1">
            <p class="uppercase">{{ name }}</p>
            <p class="text-xs text-black opacity-50">{{ description }}</p>
          </div>
          <div class="flex gap-4 mt-4">
            <a :href="codeSandBox" class="text-xs flex items-center gap-1">
              <CodeSandBoxIcon class="h-5 fill-current" />CodeSandBox</a
            >
            <a :href="link" class="text-xs flex items-center gap-1">
              <NpmIcon class="h-5 fill-current" /> NPM
            </a>

            <a :href="githubRepo" class="text-xs flex items-center gap-1">
              <GithubIcon class="h-5 fill-current" /> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
