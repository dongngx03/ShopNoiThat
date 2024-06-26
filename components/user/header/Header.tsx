'use client'
import Link from "next/link"
import "./Header.css"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import Cookies from "js-cookie"


const Header = () => {

    const [user, setUser] = useState<any>({});
    useEffect(() => {
        const data: any = localStorage.getItem('user');
        setUser(JSON.parse(data))
    }, [])

    const Login = () => {
        window.location.href = "/sign-in"
    }

    const Logout = () => {
        localStorage.clear();
        // delete token
        Cookies.remove('token')
        toast("Logout successfully !!!", {
            description: "Đợi 1 lát để ra trang đăng nhập",
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        })
        setTimeout(() => window.location.href = "/sign-in", 2000)

    }

    return (
        <div>
            <header>
                <div className="container">
                    <div className="header-inner">
                        <a className="header-logo" href="">
                            <span>Furniro</span>
                        </a>
                        <nav className="main-menu">
                            <ul className="main-menu__list">
                                <li className="main-menu__item">
                                    <Link href="/home" className="main-menu__link">Home</Link>
                                </li>
                                <li className="main-menu__item">
                                    <Link href="/shop" className="main-menu__link">Shop</Link>
                                </li>
                                <li className="main-menu__item">
                                    <Link href="" className="main-menu__link">About</Link>
                                </li>
                                <li className="main-menu__item">
                                    <Link href="" className="main-menu__link">Contact</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="header-block">
                            <div className="user">
                                {
                                    user && <span>{user?.name}</span>
                                }
                            </div>
                            <div className="search">
                                <span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.4791 23.5L18.2096 18.257M21.1298 11.25C21.1298 13.8801 20.0779 16.4024 18.2054 18.2622C16.333 20.1219 13.7934 21.1667 11.1454 21.1667C8.49738 21.1667 5.95781 20.1219 4.08537 18.2622C2.21293 16.4024 1.16101 13.8801 1.16101 11.25C1.16101 8.61998 2.21293 6.09763 4.08537 4.2379C5.95781 2.37816 8.49738 1.33337 11.1454 1.33337C13.7934 1.33337 16.333 2.37816 18.2054 4.2379C20.0779 6.09763 21.1298 8.61998 21.1298 11.25V11.25Z" stroke="black" stroke-width="2" stroke-linecap="round" />
                                </svg></span>
                            </div>
                            <div className="cart">
                                {
                                    user ?
                                        <Link href="/cart"><svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.2166 19.1926H9.8222L10.6454 17.5273L24.3225 17.5027C24.785 17.5027 25.1815 17.1746 25.264 16.7207L27.1581 6.19062C27.2077 5.91445 27.1334 5.63008 26.9517 5.41406C26.8619 5.30775 26.7499 5.22211 26.6234 5.16309C26.4969 5.10407 26.3591 5.07308 26.2194 5.07227L8.8201 5.01484L8.67143 4.32031C8.57783 3.87734 8.17588 3.55469 7.71888 3.55469H3.46542C3.20767 3.55469 2.96049 3.65638 2.77823 3.8374C2.59598 4.01841 2.49359 4.26393 2.49359 4.51992C2.49359 4.77592 2.59598 5.02143 2.77823 5.20245C2.96049 5.38346 3.20767 5.48516 3.46542 5.48516H6.9315L7.58122 8.55312L9.18074 16.2449L7.12146 19.5836C7.01452 19.727 6.95011 19.8972 6.93551 20.075C6.92092 20.2528 6.95672 20.4312 7.03887 20.5898C7.20406 20.9152 7.53717 21.1203 7.90608 21.1203H9.635C9.26642 21.6065 9.06733 22.1988 9.06787 22.8074C9.06787 24.3551 10.3343 25.6129 11.8925 25.6129C13.4507 25.6129 14.7171 24.3551 14.7171 22.8074C14.7171 22.1977 14.5134 21.6043 14.15 21.1203H18.5852C18.2166 21.6065 18.0175 22.1988 18.018 22.8074C18.018 24.3551 19.2844 25.6129 20.8427 25.6129C22.4009 25.6129 23.6673 24.3551 23.6673 22.8074C23.6673 22.1977 23.4636 21.6043 23.1002 21.1203H26.2194C26.7534 21.1203 27.1912 20.6883 27.1912 20.1551C27.1896 19.8994 27.0862 19.6546 26.9036 19.4743C26.7211 19.294 26.4741 19.1927 26.2166 19.1926ZM9.22479 6.91797L25.0768 6.96992L23.5241 15.6051L11.0721 15.627L9.22479 6.91797ZM11.8925 23.6715C11.4135 23.6715 11.0225 23.2832 11.0225 22.8074C11.0225 22.3316 11.4135 21.9434 11.8925 21.9434C12.3715 21.9434 12.7625 22.3316 12.7625 22.8074C12.7625 23.0366 12.6708 23.2564 12.5077 23.4184C12.3445 23.5805 12.1232 23.6715 11.8925 23.6715ZM20.8427 23.6715C20.3636 23.6715 19.9727 23.2832 19.9727 22.8074C19.9727 22.3316 20.3636 21.9434 20.8427 21.9434C21.3217 21.9434 21.7126 22.3316 21.7126 22.8074C21.7126 23.0366 21.621 23.2564 21.4578 23.4184C21.2947 23.5805 21.0734 23.6715 20.8427 23.6715Z" fill="black" />
                                        </svg></Link>
                                        : ""
                                }
                            </div>
                            <div className="cart">
                                {
                                        user?.role ?
                                        <Link href="/admin/product/list">ADMIN</Link>
                                        : ""
                                }
                            </div>
                            <div className="wishlist">
                                {
                                    user ?
                                        <button onClick={Logout}><svg width="25" height="25" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="icon">
                                            <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z" />
                                        </svg></button>
                                        :
                                        <button onClick={Login}><svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.8059 9.99996V4.16663H24.1552V11.1666H21.8059M21.8059 15.8333H24.1552V13.5H21.8059M10.0595 11.1666C13.1958 11.1666 19.4566 12.73 19.4566 15.8333V19.3333H0.662476V15.8333C0.662476 12.73 6.92327 11.1666 10.0595 11.1666ZM10.0595 0.666626C11.3057 0.666626 12.5008 1.15829 13.3819 2.03346C14.2631 2.90863 14.7581 4.09562 14.7581 5.33329C14.7581 6.57097 14.2631 7.75795 13.3819 8.63312C12.5008 9.50829 11.3057 9.99996 10.0595 9.99996C8.81342 9.99996 7.61833 9.50829 6.73718 8.63312C5.85603 7.75795 5.36101 6.57097 5.36101 5.33329C5.36101 4.09562 5.85603 2.90863 6.73718 2.03346C7.61833 1.15829 8.81342 0.666626 10.0595 0.666626ZM10.0595 13.3833C6.57088 13.3833 2.89428 15.0866 2.89428 15.8333V17.1166H17.2248V15.8333C17.2248 15.0866 13.5482 13.3833 10.0595 13.3833ZM10.0595 2.88329C9.40533 2.88329 8.77791 3.14142 8.3153 3.60088C7.8527 4.06034 7.59282 4.68351 7.59282 5.33329C7.59282 5.98307 7.8527 6.60624 8.3153 7.0657C8.77791 7.52517 9.40533 7.78329 10.0595 7.78329C10.7138 7.78329 11.3412 7.52517 11.8038 7.0657C12.2664 6.60624 12.5263 5.98307 12.5263 5.33329C12.5263 4.68351 12.2664 4.06034 11.8038 3.60088C11.3412 3.14142 10.7138 2.88329 10.0595 2.88329Z" fill="black" />
                                        </svg>
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header