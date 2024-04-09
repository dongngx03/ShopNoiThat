import Aside from "@/components/admin/Aside"
import PrivateRoute from "@/utils/PrivateRoute"
import { ReactNode } from "react"


const DasboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full h-screen">
            <PrivateRoute>
                <Aside />
                {children}
            </PrivateRoute>
        </div>
    )
}

export default DasboardLayout