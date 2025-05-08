import { AboutSection } from "../AboutSection"
import { HomeSection } from "../HomeSection"

interface ContentProps {
    className: string, 
}





export const Content = ({className = ""} : ContentProps) => {
    return(
        <>
            <div className={className}>
                <div id="main" className="flex flex-col justify-center items-center gap-[60px]">
                    <HomeSection />
                    <AboutSection/>
                </div>
            </div>
        </>
    )
}