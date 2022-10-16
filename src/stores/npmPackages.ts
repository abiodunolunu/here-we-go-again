import { defineStore } from "pinia";
import { ref } from "vue";

export const useNpmPackagesStore = defineStore("npmPackages", () => {
  const myPackages = ref([
    {
      name: "vue3-star-ratings",
      description: "A simple, customizable component for star ratings",
      imageUrl:
        "https://res.cloudinary.com/abeydev/video/upload/e_loop/v1664604898/portfolio/Screen_Recording_2022-10-01_at_07.14.19_nzhwzy.gif",
      link: "https://www.npmjs.com/package/vue3-star-ratings",
      codeSandBox:
        "https://codesandbox.io/s/vue3starratings-demo-szmixi?file=/src/App.vue",
      githubRepo: "https://github.com/abiodunolunu/vue3-star-ratings",
    },
    {
      name: "radial-progress-vue3",
      description:
        "A simple, highly customizable, and easy to use radial progress bar.",
      imageUrl:
        "https://res.cloudinary.com/abeydev/video/upload/e_loop/v1664604589/portfolio/Screen_Recording_2022-10-01_at_07.09.05_vuu3yj.gif",
      link: "https://www.npmjs.com/package/radial-progress-vue3",
      codeSandBox:
        "https://codesandbox.io/s/radial-progress-vue3-gnrohd?file=/src/App.vue",
      githubRepo: "https://github.com/abiodunolunu/radial-progress-vue3",
    },
  ]);

  return {
    myPackages,
  };
});
