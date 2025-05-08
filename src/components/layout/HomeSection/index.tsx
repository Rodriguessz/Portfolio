import { TypewriterEffectSmooth } from "@/components/ui/TypeWriter"
import { DinamicText } from "@/components/ui/DinamicText"
import { Button } from "@/components/ui/Button"

import { words } from "./helper"

import { IconMail, IconDownload } from "@tabler/icons-react"


interface HomeSectionProps {
    className?: string,
}

export const HomeSection = ({className = ""} : HomeSectionProps) => {
    return(
        <>
            <section className="flex justify-center w-full flex-col p-8">
                <div className="md:flex">

                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">Hi, I'm Enzo!</h1>
                        <TypewriterEffectSmooth words={words} className="mt-2 mb-0"/>
                        <DinamicText className="m-0" words="Turning complexity into simple, elegant solutions — through code." duration={2.8} filter={true} />
                        
                        
                        <div id="actions" className="flex gap-6 mt-8">

                            <Button className="border-white border text-sm font-bold">
                                <p>Contact me</p>
                                <IconMail className="text-xs font-light"/>
                            </Button>

                            <Button className="border-white border">
                                Download CV
                                <IconDownload  size={22}/>
                            </Button>
                            
                        </div>
                        
                    </div>

                    
                    
                </div>
                
            </section>
        </>
    )


    
}