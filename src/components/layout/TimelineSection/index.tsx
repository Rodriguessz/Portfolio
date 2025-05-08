import { Timeline } from "@/components/ui/Timeline"
import { data } from "./helper"

interface TimelineSectionProps {
    className?: string,
}


export const TimelineSection = ({className = ""} : TimelineSectionProps) => {
    return(
        <>
            <section className="flex justify-between flex-col gap-4 p-8">
                <h2 className="text-3xl">Timeline</h2>
                <Timeline data={data}/>
            </section>
        </>
    )


    
}