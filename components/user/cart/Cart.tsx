'use client'

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import "./Cart.css"
import cartApi from "@/service/cartApi"
import { formatNumberWithCommas } from "@/utils"
import useCartMutation from "@/utils/useCartMutation"
import { toast } from "sonner"
import Loading from "@/components/loading/loading"
import { useState } from "react"
import Link from "next/link"



const Cart = () => {
    const [subTotal, setSubTotal] = useState<number>(0)
    const user = JSON.parse(localStorage.getItem("user") as any)
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery({
        queryKey: ["CART"],
        queryFn: async () => {
            const data = await cartApi.getCartOneUser(user._id)
            setSubTotal(data?.data.reduce((total: any, curr: any) => total + curr?.mainPrice * curr?.quantity, 0))
            return data
        }
    })

    //console.log(data);
    // const tt = data?.data.reduce((total: any, curr: any) => total + curr?.mainPrice * curr?.quantity, 0)

    const Increment = useCartMutation({
        action: "INCREMENT",
        onSuccess: () => {
            toast("increment quantity successfully!", {
                description: "Tăng số lượng cart rồi !",
                action: {
                    label: "Ẩn",
                    onClick: () => console.log("Ẩn"),
                },
            })
        }
    })
    const Decrement = useCartMutation({
        action: "DECREMENT",
        onSuccess: () => {
            toast("decrement quantity successfully!", {
                description: "Giảm số lượng cart rồi !",
                action: {
                    label: "Ẩn",
                    onClick: () => console.log("Ẩn"),
                },
            })
        }
    })

    const DeleteCart = useMutation({
        mutationFn: async (id: string) => {
            try {
                await cartApi.delete(id)
            } catch (error) {
                console.log(error);

            }
        },
        onSuccess: () => {
            toast("delete successFully!!")
            queryClient.invalidateQueries({ queryKey: ['CART'] })
        }
    })

    console.log(subTotal);


    if (isLoading) return <><Loading /></>
    return (
        <div>
            <section className="banner">
                <img src="https://images.pexels.com/photos/6347968/pexels-photo-6347968.jpeg?auto=compress&cs=tinysrgb&w=1440"
                    alt="" />
                <div className="banner-opacity">
                    <span className="banner-opacity__title">Shop</span>
                    <div className="banner-opacity__link">
                        <a href="">Home</a>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                        </svg>
                        <p>Cart</p>
                    </div>
                </div>
            </section>

            <section className="cart">
                <div className="container">
                    <div className="list-cart">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Product</th>
                                    <th >Price</th>
                                    <th>Quantity</th>
                                    <th colSpan={2}>Subtotal</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data?.data.length !== 0
                                        ?
                                        data?.data?.map((item: any, index: number) => (
                                            <tr>
                                                <td>
                                                    <div className="product__image ">
                                                        <img src={item?.product_id?.image[0]}
                                                            alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="product__name">{item?.product_id?.name}</span>
                                                </td>

                                                <td>
                                                    <span className="product__price">{formatNumberWithCommas(parseInt(item?.mainPrice))}đ</span>
                                                </td>

                                                <td>
                                                    <div className="">
                                                        <button
                                                            className="w-[40px] h-[40px] border"
                                                            onClick={() => Decrement.mutate(item?._id)}
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="w-[40px] h-[40px] border"
                                                            value={item?.quantity}
                                                        />

                                                        <button
                                                            className="w-[40px] h-[40px] border"
                                                            onClick={() => Increment.mutate(item?._id)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>

                                                <td>
                                                    <span className="subtotal">{formatNumberWithCommas(parseInt(item?.mainPrice) * parseInt(item.quantity))} đ</span>
                                                </td>

                                                <td>
                                                    <button onClick={() => toast("Delete cart ?", {
                                                        description: "Bạn chắc chắn muốn xóa !",
                                                        action: {
                                                            label: "Xóa",
                                                            onClick: () => {
                                                                DeleteCart.mutate(item?._id)
                                                            },
                                                        },
                                                    })}>
                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z"
                                                                fill="#B88E2F" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                        : <span>chưa có sản phẩm nào trong giỏ hàng </span>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="carttotal">
                        <span className="total__title">
                            Cart Totals
                        </span>

                        <div className="subtotal-price">
                            <span className="price__title">
                                subtotal
                            </span>
                            <span className="price__real">
                                {formatNumberWithCommas(subTotal)}đ
                            </span>
                        </div>

                        <div className="total-price">
                            <span className="price__title">
                                subtotal
                            </span>
                            <span className="price__real">
                                {formatNumberWithCommas(subTotal)}đ
                            </span>
                        </div>

                        <button
                            className="btn-checkout z-1"
                            onClick={() => window.location.href = "/order"}
                        >
                            Checkout
                        </button>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Cart