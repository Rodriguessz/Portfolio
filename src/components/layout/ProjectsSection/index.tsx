

import { AnimatedProjects } from "@/components/ui/AnimatedProjects"
import { projectsPT, projectsEN } from "./helper"
import { useLocale, useTranslations } from "next-intl"


export const ProjectsSection = () => {
    const locale = useLocale()
    const t = useTranslations("Projects")

    let projects = projectsPT
    
    if(locale == "en") projects = projectsEN

    return (
        <>
            <section id="projects" className="flex flex-col gap-10 pt-8 mb-10">
                <div className="flex flex-col gap-1 items-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            {t("title")}
                        </h2>
                        <p className="text-sm text-zinc-500">
                            {t("subtitle")}
                        </p>
                </div>

                <div>
                    <AnimatedProjects projects={projects}/>
                </div>
            </section>
        </>
    )



}