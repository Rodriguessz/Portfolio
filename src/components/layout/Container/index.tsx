import { ReactNode } from "react"

interface ContainerProps  {
    children: ReactNode
}


export const Container = ({ children } : ContainerProps) => {
    return(
        <>
            <div className="container h-screen p-4 m-auto grid-layout">
                {children}
            </div>
        </>
    )
}