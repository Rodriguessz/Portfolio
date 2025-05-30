import { ContactForm } from "@/components/ui/ContactForm"
import { MovingTechs } from "@/components/ui/MovingTechs"

import { useTranslations } from "next-intl"



export const ContactSection = () => {
    const t = useTranslations("Contact")
    
    return (
        <>
            <section id="contact" className="flex justify-between flex-col gap-10 pt-8 mb-20">
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        {t("title")}
                    </h2>
                    <p className="text-sm text-zinc-500">
                     {t("subtitle")}
                    </p>
                </div>


                <div>
                    <ContactForm />
                </div>

            </section>
        </>
    )



}