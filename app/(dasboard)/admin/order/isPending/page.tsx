"use client"

import { Button } from "@/components/ui/button"
import orderApi from "@/service/orderApi"
import { formatNumberWithCommas } from "@/utils"
import { useQuery } from "@tanstack/react-query"

const IspendingPage = () => {
    
    const { data } = useQuery({
        queryKey : ["ORDER"],
        queryFn : async () => {
            try {
                return await orderApi.getAll()
            } catch (error) {
                console.log(error);
                
            }
        }
    })

    console.log(data);
    
    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="w-full h-screen relative overflow-auto  p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="w-full">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        stt
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        User
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        priceTotal
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        city
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        optionChage
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((e : any, index : number) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                { index +1}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {e.user_id.name}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {formatNumberWithCommas(parseInt(e.priceTotal))}đ
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {e.phone}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {e.city}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {e.status}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <Button>Chấp nhận</Button>
                                            </th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className='w-full flex justify-between items-center p-5 '>
                        <nav aria-label="Page navigation example">
                            <ul className="flex items-center -space-x-px h-10 text-base">
                                <li>
                                    <button
                                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <span className="sr-only">Next</span>
                                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IspendingPage