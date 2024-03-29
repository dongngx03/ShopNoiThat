"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

const Providers = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient)
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ToastContainer />
        </QueryClientProvider>
    )
}

export default Providers