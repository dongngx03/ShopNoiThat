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
                            window.location.href = "/home"
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
                                <Button className="w-full">
                                    {
                                        isPending ? <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg> : "Sign in"
                                    }
                                </Button>
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