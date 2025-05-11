import {
    IconBrandGithub,
    IconHome,
    IconUser,
    IconTimeline,
    IconCode,
  } from "@tabler/icons-react";



export const items = [
    {
        title: "Home",
        icon: (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#home",
      },

      {
        title: "About me",
        icon: (
          <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#about",
      },
   
      {
        title: "Education & Experience",
        icon: (
          <IconTimeline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#timeline",
      },

      {
        title: "Tech & Skills",
        icon: (
          <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#tech",
      },
      

]