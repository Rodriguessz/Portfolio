import { MovingTechs } from "@/components/ui/MovingTechs"
import { items } from "./helper"
import { useTranslations } from "next-intl"



export const TechSection = () => {
    const t = useTranslations("Skills")
    return (
        <>
            <section id="tech" className="flex justify-between flex-col gap-10 md:mt-10 mb-20 pt-8">
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        {t("title")}
                    </h2>
                    <p className="text-sm text-zinc-500">
                     {t("subtitle")}
                    </p>
                </div>


                <div>
                  <MovingTechs  items={items}/>
                </div>

            </section>
        </>
    )



}