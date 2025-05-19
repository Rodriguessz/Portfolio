
import { Timeline } from "@/components/ui/Timeline"
import { tabsPT, tabsEN} from "./helper"
import { Tabs } from "@/components/ui/Tabs"

import { motion } from "motion/react"
import { useLocale, useTranslations } from "next-intl"

interface TimelineSectionProps {
    className?: string,
}


export const TimelineSection = ({ className = "" }: TimelineSectionProps) => {
    const locale = useLocale()
    const t = useTranslations("Timeline")
    let tabs = tabsPT
    if(locale == "en") tabs = tabsEN 


    return (
        <>
            <section id="timeline" className="flex justify-between flex-col gap-10 md:mt-18 pt-8">
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        {t("title")}
                    </h2>
                    <p className="text-sm text-zinc-500">
                        {t("subtitle")}
                    </p>
                </div>

                <div>
                    <Tabs tabs={tabs} />
                </div>
            </section>
        </>
    )



}
