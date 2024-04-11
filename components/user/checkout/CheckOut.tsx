"use client"

import { use, useState } from "react"
import "./CheckOut.css"
import { useRouter } from "next/navigation"
import { useMutation, useQuery } from "@tanstack/react-query"
import cartApi from "@/service/cartApi"
import { formatNumberWithCommas } from "@/utils"
import { SubmitHandler, useForm } from "react-hook-form"
import orderApi from "@/service/orderApi"
import { toast } from "sonner"
import Loading from "@/components/loading/loading"

type FormCheckout = {
    phone: string,
    city: string,
    district: string,
    wards: string,
    addressDetail: string
}

const CheckOut = (): any => {
    const router = useRouter()
    const [priceTotal, setPriceTotal] = useState<number>(0);
    const [user] = useState<any>(() => {
        return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as any) : ""
    })
    if (!user) return router.push("/sign-in")


    const { data, isLoading } = useQuery({
        queryKey: ["CART"],
        queryFn: async () => {
            try {
                const { data } = await cartApi.getCartOneUser(user._id)
                setPriceTotal(data?.reduce((total: any, curr: any) => total + curr?.mainPrice * curr?.quantity, 0))
                return data
            } catch (error) {
                console.log(error);
            }
        }
    })

    const { mutate } = useMutation({
        mutationFn: async (data: any) => {
            try {
                await orderApi.add(data)
            } catch (error) {
                console.log(error);
            }
        },
        onSuccess: () => {
            toast("Đặt hàng thành công !!")
            router.push("/cart")
        }
    })

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormCheckout>();

    const onSubmit: SubmitHandler<FormCheckout> = (dataForm) => {
        console.log(dataForm);

        const productList = data?.map((e: any) => {
            return {
                product_id: e.product_id._id,
                quantity: e.quantity,
                price: e.mainPrice
            }
        })

        const newOrder = {
            ...dataForm,
            user_id: user._id,
            priceTotal: priceTotal,
            productList: productList,
            status: "isPending"

        }
        console.log(newOrder);
        mutate(newOrder)


    }

    if(isLoading) return <><Loading /></>
    return (
        <div>
            <section className="checkout">
                <form onSubmit={handleSubmit(onSubmit)} className="container">
                    <div className="section-input-list">
                        <span className="input__title">
                            Billing details
                        </span>

                        <div className="input-country">
                            <label >Phone number</label>
                            <input
                                type="text"
                                {...register("phone")}
                            />
                        </div>

                        <div className="input-street">
                            <label >City</label>
                            <input
                                type="text"
                                {...register("city")}
                            />
                        </div>

                        <div className="input-city">
                            <label >District</label>
                            <input
                                type="text"
                                {...register("district")}
                            />
                        </div>

                        <div className="input-province">
                            <label >wards</label>
                            <input
                                type="text"
                                {...register("wards")}
                            />
                        </div>
                        <div className="input-province">
                            <label >adressDetail</label>
                            <input
                                type="text"
                                {...register("addressDetail")}
                            />
                        </div>


                    </div>

                    <div className="section-total">
                        <div className="total-header">
                            <div className="header-title">
                                <span>Product</span>
                                <span>Subtotal</span>
                            </div>


                            {
                                data?.map((item: any, index: number) => (
                                    <div className="header-price">
                                        <span>{item?.product_id?.name} x {item?.quantity}</span>
                                        <span>{formatNumberWithCommas(parseInt(item?.quantity) * parseInt(item?.mainPrice))}đ</span>
                                    </div>
                                ))
                            }
                            <div className="header-total">
                                <span>PriceTotal</span>
                                <span>{formatNumberWithCommas(parseInt(priceTotal as any))} đ</span>
                            </div>
                        </div>

                        <div className="total-body">
                            <div className="body-checkbox">
                                <input type="checkbox" checked />
                                <span>Direct Bank Transfer</span>
                            </div>
                            <span className="body-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                            <div className="body-checkbox1">
                                <input type="checkbox" />
                                <span>Direct Bank Transfer</span>
                            </div>

                            <div className="body-checkbox1">
                                <input type="checkbox" />
                                <span>Cash On Delivery</span>
                            </div>

                            <span className="body-text2">
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                            </span>

                            <div className="body-btn">
                                <button className="btn-end">Place order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default CheckOut