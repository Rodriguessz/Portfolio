import { ReactNode } from "react"

interface ContainerProps  {
    children: ReactNode
}


export const Container = ({ children } : ContainerProps) => {
    return(
        <>
            <div className="container flex flex-col min-h-screen max-w-6xl m-auto p-9 gap-28">
                {children}
            </div>
        </>
    )
}