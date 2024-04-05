'use client'

import React, { ReactNode, useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import useProductQurey from '@/utils/useProductQuery'
import { formatNumberWithCommas } from '@/utils'
import { Skeleton } from '../ui/skeleton'

const ProductList = () => {
    const [page, setPage] = useState<number>(1)
    const { data, isLoading } = useProductQurey(false, 3, page)

    console.log(data);

    if (isLoading) return <div>
        <div className="">
            <div className="p-4 sm:ml-64">
                <div className="w-full h-screen relative overflow-auto  p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="w-full h-full">
                        <div className='w-full flex justify-center'>
                            <Skeleton className="h-[60px] w-[450px] rounded-xl" />
                        </div>
                        <div className="space-y-2 mt-1">
                            <Skeleton className="h-[42px] w-full" />
                            <Skeleton className="h-[117px] w-full" />
                            <Skeleton className="h-[117px] w-full" />
                            <Skeleton className="h-[117px] w-full" />
                        </div>
                        <div className=' w-full flex justify-between items-center p-5 '>
                            <Skeleton className="h-[42px] w-[180px]" />
                            <Skeleton className="h-[42px] w-[42px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    return (
        <div>
            <div className="">
                <div className="p-4 sm:ml-64">
                    <div className="w-full h-screen relative overflow-auto  p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <div className="w-full">
                            <div className='p-3 flex gap-5 justify-center items-center'>
                                <span>Muốn thêm Sản Phẩm mới ?</span>
                                <Link href="/admin/product/add">
                                    <Button>Add New</Button>
                                </Link>
                            </div>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            stt
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Color
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            image
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            option
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        data?.data.map((item: any, index: number) => (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index + 1}
                                                </th>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item?.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    <div className={`w-[40px] h-[40px] rounded-full border bg-[${item?.color}]`}></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <img
                                                        className='w-[100px] h-[100px] relative overflow-hidden object-contain'
                                                        src={item?.image[0]}
                                                        alt=""
                                                    />
                                                </td>
                                                <td className="px-6 py-4">
                                                    {formatNumberWithCommas(parseInt(item?.price))}đ
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item?.category_id?.name}
                                                </td>
                                                <td className="px-6 py-4 ">
                                                    <Button variant="destructive" className='mr-2'>Delete</Button>
                                                    <Button >update</Button>
                                                </td>
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
                                            onClick={() => {
                                                if (page === 1) {
                                                    setPage(data?.totalPage)
                                                } else {
                                                    setPage(page + -1)
                                                }
                                            }}
                                        >
                                            <span className="sr-only">Previous</span>
                                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                            </svg>
                                        </button>
                                    </li>
                                    {(() => {
                                        const buttonList: JSX.Element[] = [];
                                        for (let i = 0; i < data?.totalPage; i++) {
                                            buttonList.push(<li>
                                                <button
                                                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                    onClick={() => setPage(i + 1)}

                                                >
                                                    {i + 1}
                                                </button>
                                            </li>)
                                        }
                                        return buttonList
                                    })()}
                                    <li>
                                        <button
                                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            onClick={() => {
                                                if (page === data?.totalPage) {
                                                    setPage(1)
                                                } else {
                                                    setPage(page +1)
                                                }
                                            }}
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
                                <span>page {page + "/" + data?.totalPage}</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductList