import EmailIcon from "@/components/icons/EmailIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import GitLabIcon from "@/components/icons/GitlabIcon.vue";
import IphoneIcon from "@/components/icons/IphoneIcon.vue";
import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
import NpmIcon from "@/components/icons/NpmIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";

import { defineStore } from "pinia";
import { shallowRef } from "vue";

export const useContactStore = defineStore("contact", () => {
  const contactDetails = [
    {
      name: "Twitter",
      link: "https://twitter.com/abeydev",
      icon: shallowRef(TwitterIcon),
      type: "url",
    },
    {
      name: "LinkedIn",
      link: "https://linkedIn.com/in/abiodunolunu",
      icon: shallowRef(LinkedInIcon),
      type: "url",
    },
    {
      name: "Gitlab",
      link: "https://gitlab.com/abiodunolunu",
      icon: shallowRef(GitLabIcon),
      type: "url",
    },
    {
      name: "Github",
      link: "https://github.com/abiodunolunu",
      icon: shallowRef(GithubIcon),
      type: "url",
    },
    {
      name: "NPM",
      link: "https://www.npmjs.com/~abeydev",
      icon: shallowRef(NpmIcon),
      type: "url",
    },
    {
      name: "Email",
      link: "mailto:abiodunolunu@gmail.com",
      icon: shallowRef(EmailIcon),
      type: "email",
    },
    {
      name: "Phone number",
      link: "tel:+2349032025737",
      icon: shallowRef(IphoneIcon),
      type: "phoneNumber",
    },
  ];

  return {
    contactDetails,
  };
});
