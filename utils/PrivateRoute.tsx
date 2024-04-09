'use client'
import { ReactNode, useState } from "react"
import { useRouter } from "next/navigation"

const PrivateRoute = ({ children }: { children: ReactNode }): any => {
    const router = useRouter()
    const [user] = useState(() => {
        return localStorage.getItem('user') || ""
    })
    if (!user) return router.push('/sign-in')
    if (!JSON.parse(user).role) return router.push('/home')
    return (
        <div>
            {children}
        </div>
    )
}

export default PrivateRoute