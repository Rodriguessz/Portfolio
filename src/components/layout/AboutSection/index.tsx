'use client'

import { easeInOut, motion } from "motion/react"
import { useTranslations } from "next-intl"

interface AboutSectionProps {
    className?: string,
}

export const AboutSection = ({ className = "" }: AboutSectionProps) => {

    const t = useTranslations("About")

    return (
        <section id="about" className={`flex flex-col items-center pt-8 ${className}`}>

            {/* Container de conteúdo com imagem + texto */}
            <div className="flex flex-col gap-5 md:flex-row md:gap-5 md:items-center w-full max-w-6xl">
                {/* Texto */}
                <div className="w-full md:w-[60%] flex flex-col justify-center items-center md:items-start gap-3 md:max-w-[600px] mt-10 md:mt-0">

                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            {t("title")}
                        </h2>
                        <p className="text-sm text-zinc-500">
                           {t("subtitle")}
                        </p>
                    </div>



                    <p className="leading-relaxed text-zinc-300 text-justify tracking-wide text-sm sm:text-base md:text-1xl" >
                        {t("content")}
                    </p>

                   
                </div>

                {/* Imagem animada */}
                <motion.div
                    className="md:w-[40%] w-full flex items-center justify-center md:justify-end"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: easeInOut }}>

                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-auto max-w-[250px]"
                    >
                        <defs>
                            <clipPath id="blobClip">
                                <path
                                    d="M43.1,-75C55.7,-67.2,65.9,-55.6,73.5,-42.5C81.1,-29.3,86,-14.7,87.4,0.8C88.8,16.3,86.7,32.6,79.3,45.9C71.8,59.2,59,69.6,44.9,76.1C30.8,82.5,15.4,85.1,0,85.1C-15.4,85.1,-30.7,82.5,-45,76.1C-59.2,69.7,-72.3,59.5,-80.1,46.2C-88,32.9,-90.6,16.4,-90,0.4C-89.3,-15.7,-85.3,-31.3,-77.5,-44.7C-69.7,-58,-58,-69.1,-44.4,-76.3C-30.8,-83.5,-15.4,-86.9,-0.1,-86.7C15.2,-86.5,30.4,-82.7,43.1,-75Z"
                                    transform="translate(100 100)"
                                />
                            </clipPath>
                        </defs>

                        {/* Fundo do blob */}
                        <path
                            fill="#F2F4F8"
                            d="M43.1,-75C55.7,-67.2,65.9,-55.6,73.5,-42.5C81.1,-29.3,86,-14.7,87.4,0.8C88.8,16.3,86.7,32.6,79.3,45.9C71.8,59.2,59,69.6,44.9,76.1C30.8,82.5,15.4,85.1,0,85.1C-15.4,85.1,-30.7,82.5,-45,76.1C-59.2,69.7,-72.3,59.5,-80.1,46.2C-88,32.9,-90.6,16.4,-90,0.4C-89.3,-15.7,-85.3,-31.3,-77.5,-44.7C-69.7,-58,-58,-69.1,-44.4,-76.3C-30.8,-83.5,-15.4,-86.9,-0.1,-86.7C15.2,-86.5,30.4,-82.7,43.1,-75Z"
                            transform="translate(100 100)"
                        />

                        {/* Imagem recortada pelo blob */}
                        <image
                            href="/macMemoji.webp"
                            x="16"
                            y="34"
                            width="170"
                            height="170"
                            preserveAspectRatio="xMidYMid meet"
                            clipPath="url(#blobClip)"
                        />
                    </svg>


                </motion.div>

            </div>
        </section>
    )
}
