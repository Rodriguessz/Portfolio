import { AboutSection } from "../AboutSection"
import { HomeSection } from "../HomeSection"
import { TimelineSection } from "../TimelineSection"

interface ContentProps {
    className: string, 
}





export const Content = ({className = ""} : ContentProps) => {
    return(
        <>
            <div className={className}>
                    <HomeSection />
                    <AboutSection/>
                    <TimelineSection />
            </div>
        </>
    )
}