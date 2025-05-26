'use client'

import { TypewriterEffectSmooth } from "@/components/ui/TypeWriter"
import { DinamicText } from "@/components/ui/DinamicText"
import { Button } from "@/components/ui/Button"

import { IconMail, IconDownload } from "@tabler/icons-react"
import { easeInOut, motion } from "motion/react"

import { useLocale, useTranslations } from "next-intl"


interface HomeSectionProps {
    className?: string,
}

export const HomeSection = ({ className = "" }: HomeSectionProps) => {
    const locale = useLocale()
    const t = useTranslations('Home');

    const dinamicWords = {
        "pt": [
            {
                text: "Desenvolvedor",
            },
            {
                text: "Web",
            },
            {
                text: "Fullstack",
                className: "text-violet-500 dark:text-blue-500",

            },
        ],

        "en": [
            {
                text: "Fullstack",
            },
            {
                text: "Web",
            },
            {
                text: "Developer",
                className: "text-violet-500 dark:text-blue-500",

            },
        ]
    }
    let words = dinamicWords["pt"];
    if (locale == "en") words = dinamicWords["en"];

    return (
        <section id="home" className={`flex flex-col md:flex-row md:gap-5 md:items-center pt-8 mb-10 ${className}`}>

            {/* Imagem animada */}
            <motion.div
                className="md:w-[40%] w-full flex items-center justify-center md:justify-start"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: easeInOut }}
            >
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto max-w-[320px]"
                >
                    <path
                        fill="#F2F4F8"
                        d="M64.8,-37.6C75.6,-18.8,70,9.2,56.5,31.9C43,54.5,21.5,71.8,1.7,70.8C-18.1,69.8,-36.3,50.6,-46.9,29.6C-57.6,8.6,-60.8,-14.2,-51.7,-32C-42.6,-49.8,-21.3,-62.7,2.9,-64.4C27,-66,54.1,-56.4,64.8,-37.6Z"
                        transform="translate(100 100)"
                    />
                    <image
                        href="/memoji.webp"
                        x="31"
                        y="23"
                        width="150"
                        height="150"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </svg>
            </motion.div>

            {/* Texto e Ações */}
            <div className="w-full md:w-[60%] flex flex-col justify-center md:max-w-[600px]">
                <div id="introduction">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t('title')}</h1>
                    <TypewriterEffectSmooth words={words} className="mt-2 mb-0" />
                    <DinamicText
                        className="m-0"
                        words={t("slogan")}
                        duration={2.8}
                        filter={true}
                    />
                </div>

                <div id="actions" className="flex gap-6 mt-8">
                    <a href="#contact">
                        <Button className="dark:border-white border-zinc-300 border text-sm font-bold">
                            <IconMail className="text-xs font-light" />
                            <p>{t("contactButton")}</p>
                        </Button>
                    </a>

                    <a href="/cv_2025.pdf" download >
                        <Button className="dark:border-white border-zinc-300 border text-sm font-bold">
                            <IconDownload size={22} />
                            {t("cvButton")}
                        </Button>
                    </a>

                </div>
            </div>
        </section>
    )
}
