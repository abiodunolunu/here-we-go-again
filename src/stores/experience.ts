import type { SingleExp } from "@/types/models";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useExperienceStore = defineStore("experience", () => {
  const myExperiences = ref<SingleExp[]>([
    {
      workplace: "Software Angels",
      location: "Tallinn, Estonia",
      position: "Front-end Developer",
      startDate: "Nov 2021",
      endDate: "June 2022",
      whatIDid: [
        "Worked alongside other frontend and backend developers and UI designers to build ahealth platform where users can have access to trained and certified medical doctors online.",
        "Facilitated code reviews and pair programming to produce clean, high-quality code.",
      ],
      projects: [
        {
          name: "HealPhant",
          link: "https://healphant.com",
        },
      ],
    },
    {
      workplace: "Novugrid Technologies",
      location: "Lagos, Nigeria",
      position: "Front-end Developer",
      startDate: "Feb 2021",
      endDate: "May 2022",
      whatIDid: [
        "I led the creation alongside other frontend developers and product designers to build a standard, maintainable UI Library that can be used across all projects/products.",
        "Led a frontend team that built a digital commerce platform for Nigerian sellers where users can set up their stores, and manages their sales and customers.",
        "Built an online logistic platform that manages on-demand and scheduled deliveries while tracking riders in real-time using while following and applying best practices",
        "Built a web application where users can create resumes, review other people's resumes, and take courses to become better candidates for their dream job",
        "Did code reviews, pair programming, and oversaw the creation of a continuous integration pipeline to ensure that the codebase is always up to date.",
      ],
      projects: [
        {
          name: "Noja360",
          link: "https://noja360.com",
        },
        {
          name: "Dispago",
          link: "https://www.dispago.com/",
        },
      ],
    },
    {
      workplace: "CardinalStone via Intelligent Innovations",
      location: "Lagos, Nigeria",
      position: "Front-end Developer",
      startDate: "Aug 2021",
      endDate: "Nov 2021",
      whatIDid: [
        "Worked as a member of the Frontend Engineering Team in revamping the Stock Trading Platform where users can trade both local (Nigerian Stocks) and Foreign (US Stocks)",
        "Worked extensively with backend developers to make sure all transactions are safe, secured and easy to implement, and more user-friendly",
        "Built Future proof reusable components for easy plug-and-play use.",
        "Performed detailed code reviews to improve code quality.",
        "Improved website navigation with clear and intuitive UX mapping.",
        "Enhanced front-end performance through image optimization and clean coding practices, accelerating load times.",
      ],
      projects: [
        {
          name: "Cardinal Stone Portal",
          link: "https://portal.cardinalstone.com/",
        },
      ],
    },
    {
      workplace: "Stanlab",
      location: "Lagos, Nigeria",
      position: "Front-end Developer",
      startDate: "Jan 2020",
      endDate: "Jan 2021",
      whatIDid: [
        "Deliver engaging user experience through optimization of images, code, and cross-browser compatibility, increasing page loads speeds by about 45%",
        "Expand features, refine code, and improve processes, producing smoother operations and enhancing user engagement",
        "Built single page application (SPA), responsive web design, UI using VueJs, Scss",
        "Ensure efficient web development by supporting designers and backend developers while resolving website performance issues.",
      ],
      projects: [
        {
          name: "StanlabVR",
          link: "https://www.stanlabvr.com/",
        },
      ],
    },
    {
      workplace: "Freshmarte",
      location: "Lagos, Nigeria",
      position: "Intern Front-end Developer",
      startDate: "May 2019",
      endDate: "Jan 2020",
      whatIDid: [
        "Worked under the wing of more experienced developers, where I learned VueJs, CSS Grid, CSS Flex, and CSS.",
        "Created custom websites by harnessing HTML, CSS, and JavaScript skills.",
      ],
    },
  ]);

  return {
    myExperiences,
  };
});
