interface AboutSectionProps {
    className?: string,
}

export const AboutSection = ({className = ""} : AboutSectionProps) => {
    return(
        <>
            <section className="flex justify-between flex-col gap-4 p-8">
                <h2 className="text-3xl">About Me</h2>
                
                <div className="flex text-justify gap-10">

                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam quidem dolores, ut neque vitae in temporibus doloremque nihil, nemo laboriosam perspiciatis totam aliquam aperiam ea assumenda esse nulla porro!</p>
                    </div>
                </div>
            </section>
        </>
    )


    
}