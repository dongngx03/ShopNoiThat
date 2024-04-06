import "./Cart.css"

const Cart = () => {
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
                                <tr>
                                    <td>
                                        <div className="product__image">
                                            <img src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZVLMSCsNnxY2OPMfYgUJers1mhfBg~pRfxNlc~2-7VHGtexhrBYlYB2f6kZEvHyxpMkd3vfmw0qKsM-cAqxU7IBxquDDVB7Ij6pOHBJWTp68L8vt0N1kfA-R6u-41UA5InnmbTO0bZtq1dd5wxvTaYj0U~EOD7-ZlYSMLG6wk2OD9VR6X6WfwFZ3vVOco2HI3sF0x824~9BLh9so9aoJTGWeB4cRlS2lxP4MSTH3Ri1~sdOhoBXfB6KfZfj8Ev-70h-8TCf3ap-GE-tXbsDbOanwg0RLlOFfYYfnNkOCiAlnyKq91RZEGbBkYqy0dB9h3Q7gk0Jyz9UTWzkOL8HmQ__"
                                                alt="" />
                                        </div>
                                    </td>
                                    <td>
                                        <span className="product__name">Asgaard sofa</span>
                                    </td>

                                    <td>
                                        <span className="product__price">25.000.000đ</span>
                                    </td>

                                    <td>
                                        <div className="product__quantity">
                                            <span>1</span>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="subtotal">25.000.000đ</span>
                                    </td>

                                    <td>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z"
                                                fill="#B88E2F" />
                                        </svg>
                                    </td>
                                </tr>
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
                                25.000.000đ
                            </span>
                        </div>

                        <div className="total-price">
                            <span className="price__title">
                                subtotal
                            </span>
                            <span className="price__real">
                                25.000.000đ
                            </span>
                        </div>

                        <button className="btn-checkout">Check Out</button>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Cart