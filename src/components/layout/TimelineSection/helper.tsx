import { Timeline } from "@/components/ui/Timeline";
import { IconCalendarWeek } from "@tabler/icons-react";


export const experience = [
  {
    title: "Alstom",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2025 - Current</h4>

        </div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-zinc-300">
          -
        </p>
      </div>
    ),
  },

  {
    title: "Worklab Sistemas",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2024 - 2025</h4>

        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-zinc-300">
            Developed custom tools and new features using PHP, Laravel, and MySQL, resulting in faster and more reliable processes.
          </p>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-zinc-300">
            - Implemented a new interface layout, applying UI and UX concepts, using JavaScript, React, and Styled-components, significantly improving the end-user experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/filtersFeature.png"
            alt="Filters Feature project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />
          <img
            src="/dinamicTable.png"
            alt="Dinamic Table Project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />


        </div>
      </div>
    ),
  },
  {
    title: "Ybox",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2022 - 2024</h4>

        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-zinc-300">
            - Collaborated on supporting and customizing the company's internal platform to align with business needs using HTML, CSS ,Javascript and PHP.
          </p>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-zinc-300">
            - Utilized Google Tag Manager (GTM) to implement and configure scripts, tags, and events on websites, enhancing data analysis and optimizing online strategies.
          </p>
        </div>
      </div>
    ),
  },
];

export const education = [
  
  {
    title: "Explorer Bootcamp",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2024 - 2025</h4>

        </div>

        <div className="flex flex-col g-1">
          <p className="mb-6 text-xs font-normal text-neutral-800 md:text-sm dark:text-zinc-300">
            Rockeatseat
          </p>

          <p className="mb-6 text-xs font-normal text-neutral-800 md:text-sm dark:text-zinc-300">
            - HTML5, CSS3, JavaScript, Nodejs, Express.js, Knex.js, ReactJs, git, SQL, figma. 
          </p>
        </div>

        {/* <div className="grid grid-cols-2 gap-4">
          <img
            src="/filtersFeature.png"
            alt="Filters Feature project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />
          <img
            src="/dinamicTable.png"
            alt="Dinamic Table Project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />


        </div> */}
      </div>
    ),
  },

  {
    title: "Software Engineering",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2023 - 2027</h4>

        </div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-zinc-300">
          FIAP - Faculdade de Informática e Admnistração Paulista
        </p>
      </div>
    ),
  },

  {
    title: "Fullstack Web Development",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2020 - 2022</h4>

        </div>

        <div className="flex flex-col g-1">
          <p className="mb-6 text-xs font-normal text-neutral-800 md:text-sm dark:text-zinc-300">
            Senai - Ricardo Lerner
          </p>

          <p className="mb-6 text-xs font-normal text-neutral-800 md:text-sm dark:text-zinc-300">
            - HTML5, CSS3, JavaScript, Nodejs, Java, Vraptor, Springboot, git, MySQL, Oracle, Selenium, Networks.
          </p>
        </div>

        {/* <div className="grid grid-cols-2 gap-4">
          <img
            src="/filtersFeature.png"
            alt="Filters Feature project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />
          <img
            src="/dinamicTable.png"
            alt="Dinamic Table Project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />


        </div> */}
      </div>
    ),
  },
  

];

export const tabs = [
  {
    title: "Education",
    value: "edutcation",
    component: (
      <div>
        <Timeline data={education} />
      </div>
    ),
  },
  {
    title: "Experience",
    value: "experience",
    component: (
      <div>
        <Timeline data={experience} />

      </div>
    ),
  },

];