import Footer from "@/components/user/footer/Footer"
import Header from "@/components/user/header/Header"
import { ReactNode } from "react"


const ShopLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default ShopLayout