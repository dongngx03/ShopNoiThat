'use client'
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import Swal from "sweetalert2"
import { Button } from "../ui/button"
import Cookies from 'js-cookie'; 

export type FormSignIn = {
    email: string,
    password: string
}

const SignIn = () => {

    const { register, handleSubmit, reset } = useForm<FormSignIn>()
    const { mutate, isPending } = useMutation({
        mutationFn: async (data: FormSignIn) => {
            try {
                const res = await axios.post('api/auth/sign-in', data)
                console.log(res);
                if (res.status === 200) {
                    // save user information locastrorage
                    localStorage.setItem('user', JSON.stringify(res.data?.user))
                    // save token cookie
                    Cookies.set('token', res.data?.token);
                    Swal.fire({
                        title: 'Thành công',
                        text: "đăng nhập thành công",
                        icon: 'success',
                    })
                        .then(() => {
                            if (res.data?.role === false) {
                                window.location.href = "/home"
                            } else {
                                window.location.href = "/admin/product/list"
                            }
                        })
                }

            } catch (err: any) {
                Swal.fire({
                    title: 'Lỗi ',
                    text: err.response.data,
                    icon: 'error',
                })

            }
        },
        onSuccess: () => {
        }
    })

    const onSubmit: SubmitHandler<FormSignIn> = (data: any) => {
        mutate(data)
        console.log(data);
    }
    return (
        <div>
            <div>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input {...register("email", { required: true })} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                </div>
                                <div className="mt-2">
                                    <input {...register("password", { required: true })} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <Button className="w-full">Sign in</Button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Chưa có tài khoản
                            <Link href="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn