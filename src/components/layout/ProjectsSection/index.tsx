

import { AnimatedProjects } from "@/components/ui/AnimatedProjects"
import { projects } from "./helper"


export const ProjectsSection = () => {
    return (
        <>
            <section id="projects" className="flex flex-col gap-10 md:mt-10 mb-20">
                <div className="flex flex-col gap-1 items-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            Projetos
                        </h2>
                        <p className="text-sm text-zinc-500">
                            Meus projetos pessoais
                        </p>
                </div>

                <div>
                    <AnimatedProjects projects={projects} autoplay={true}/>
                </div>
            </section>
        </>
    )



}