import { Timeline } from "@/components/ui/Timeline"
import { tabs } from "./helper"
import { Tabs } from "@/components/ui/Tabs"

import { motion } from "motion/react"

interface TimelineSectionProps {
    className?: string,
}


export const TimelineSection = ({ className = "" }: TimelineSectionProps) => {
    return (
        <>
            <section id="timeline" className="flex justify-between flex-col gap-10 md:mt-18 pt-8">
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        Educação & Experiência
                    </h2>
                    <p className="text-sm text-zinc-500">
                        Minha jornada
                    </p>
                </div>

                <div>
                    <Tabs tabs={tabs} />
                </div>
            </section>
        </>
    )



}
