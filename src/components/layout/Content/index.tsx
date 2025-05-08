
'use client'
import { AboutSection } from "../AboutSection"
import { HomeSection } from "../HomeSection"
import { TimelineSection } from "../TimelineSection"
import React, { use, useRef } from "react";

interface ContentProps {
    className: string, 
}


export const Content = ({className = ""} : ContentProps) => {

    const scrollRef = useRef<HTMLDivElement>(null); 

    return(
        <>
            <div className={className}>
                    <HomeSection />
                    <AboutSection/>
                    <TimelineSection scrollContainerRef={scrollRef}/>
                    <AboutSection/>

            </div>
        </>
    )
}