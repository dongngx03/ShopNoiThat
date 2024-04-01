import Aside from "@/components/admin/Aside"
import { ReactNode } from "react"


const DasboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full h-screen">
            <Aside />
            {children}
            
        </div>
    )
}

export default DasboardLayout