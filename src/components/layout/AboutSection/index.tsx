import { TypewriterEffectSmooth } from "@/components/ui/TypeWriter"
import { DinamicText } from "@/components/ui/DinamicText"
import { Button } from "@/components/ui/Button"

import { IconMail, IconDownload } from "@tabler/icons-react"
import { MacbookScroll } from "@/components/ui/MacbookScroll"

import gif from "../../../assets/Digital transformation.gif"


interface AboutSectionProps {
    className?: string,
}

export const AboutSection = ({className = ""} : AboutSectionProps) => {
    return(
        <>
            <section className="flex justify-between items-center flex-col gap-4 p-8">
                <h2 className="text-3xl">About Me</h2>
                
                <div className="flex text-justify gap-10">
                <h2 className="text-3xl">About Me</h2>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam quidem dolores, ut neque vitae in temporibus doloremque nihil, nemo laboriosam perspiciatis totam aliquam aperiam ea assumenda esse nulla porro!</p>
                </div>
            </section>
        </>
    )


    
}