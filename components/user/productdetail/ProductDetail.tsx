import "./ProductDetail.css"

const ProductDetail = () => {
    return (
        <div>
            <section className="productdetail">
                <div className="container">
                    <div className="section-list-img">
                        <div className="img-list">
                            <div className="img-list__item">
                                <img src="https://s3-alpha-sig.figma.com/img/e8e6/980e/c9e9224b3002d53824688ecee9c882c5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOA6l0gi3XhMhB3pK-br-hW6rtSmrUS03kcg-P8TNDpRGkGJKcNcBraZJHE~y~YbhkZzpOHU0TrvcZDhhUqK--aAzD~H77MSeb4OgywukrNcI2apBIFoP8p5oeJTSPF2sSvUy2Y58mWfEQ00QuCcqoPHlimOfax2tXKKX9Kr4x-6-Eq2MRK7rYGQAyqYjumUNMWyo7wS7QFLsNHiyHuGRxiqX~Ks9TIu~TT5DRW3PaZOahUajbZbxWWVugS7BpKVhhnFWIVPZLMrMdR16e0HzBEAxkHZSeCAvYYQ9P8p26y0XzjBkyGKYb~2dKeVYYZFfltd5HOOkraAyi4ngOAYpw__" alt="" />
                            </div>
                            <div className="img-list__item">
                                <img src="https://s3-alpha-sig.figma.com/img/e8e6/980e/c9e9224b3002d53824688ecee9c882c5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOA6l0gi3XhMhB3pK-br-hW6rtSmrUS03kcg-P8TNDpRGkGJKcNcBraZJHE~y~YbhkZzpOHU0TrvcZDhhUqK--aAzD~H77MSeb4OgywukrNcI2apBIFoP8p5oeJTSPF2sSvUy2Y58mWfEQ00QuCcqoPHlimOfax2tXKKX9Kr4x-6-Eq2MRK7rYGQAyqYjumUNMWyo7wS7QFLsNHiyHuGRxiqX~Ks9TIu~TT5DRW3PaZOahUajbZbxWWVugS7BpKVhhnFWIVPZLMrMdR16e0HzBEAxkHZSeCAvYYQ9P8p26y0XzjBkyGKYb~2dKeVYYZFfltd5HOOkraAyi4ngOAYpw__" alt="" />
                            </div>
                            <div className="img-list__item">
                                <img src="https://s3-alpha-sig.figma.com/img/e8e6/980e/c9e9224b3002d53824688ecee9c882c5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOA6l0gi3XhMhB3pK-br-hW6rtSmrUS03kcg-P8TNDpRGkGJKcNcBraZJHE~y~YbhkZzpOHU0TrvcZDhhUqK--aAzD~H77MSeb4OgywukrNcI2apBIFoP8p5oeJTSPF2sSvUy2Y58mWfEQ00QuCcqoPHlimOfax2tXKKX9Kr4x-6-Eq2MRK7rYGQAyqYjumUNMWyo7wS7QFLsNHiyHuGRxiqX~Ks9TIu~TT5DRW3PaZOahUajbZbxWWVugS7BpKVhhnFWIVPZLMrMdR16e0HzBEAxkHZSeCAvYYQ9P8p26y0XzjBkyGKYb~2dKeVYYZFfltd5HOOkraAyi4ngOAYpw__" alt="" />
                            </div>
                            <div className="img-list__item">
                                <img src="https://s3-alpha-sig.figma.com/img/e8e6/980e/c9e9224b3002d53824688ecee9c882c5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOA6l0gi3XhMhB3pK-br-hW6rtSmrUS03kcg-P8TNDpRGkGJKcNcBraZJHE~y~YbhkZzpOHU0TrvcZDhhUqK--aAzD~H77MSeb4OgywukrNcI2apBIFoP8p5oeJTSPF2sSvUy2Y58mWfEQ00QuCcqoPHlimOfax2tXKKX9Kr4x-6-Eq2MRK7rYGQAyqYjumUNMWyo7wS7QFLsNHiyHuGRxiqX~Ks9TIu~TT5DRW3PaZOahUajbZbxWWVugS7BpKVhhnFWIVPZLMrMdR16e0HzBEAxkHZSeCAvYYQ9P8p26y0XzjBkyGKYb~2dKeVYYZFfltd5HOOkraAyi4ngOAYpw__" alt="" />
                            </div>
                        </div>
                        <div className="img__main">
                            <img src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VGXqfJhdHGKlr9GT-BbRl6NbRc9ItAIE~~IgzV8~xzu7xmsKI0PhYvgaxzRlc-YDr6I0XutICx7KYw-F2Yf0MuI5DmybaAGs~Pouiann6d0hSUSPEZn2zR4gNcQ-8qWdii66n0vDRw~Aewi0GtMVs7zxIjK7XHy4XxwcgbdVLQRAjy20ZDQwl3gWdhu5KKbPezpp3v1o1B2Y4lSb3O9~q4l67ArRpyXJfT1IiPNzfia~jjJ8PilOZRKT38FlBaB-APhDJ5UqAw6wjdXm2uP4PxisbcXXQ85UlPQI4Y6rFfAdxN7r3koLTvZIV4t6rt2WBKhd7l7Y2N22L3y1urfEDQ__" alt="" />
                        </div>
                    </div>

                    <div className="section-list-infor">
                        <span className="infor__title">Asgaard sofa</span>
                        <span className="infor__price">
                            25.000.000đ
                        </span>
                        <div className="infor-evaluate">
                            <div className="infor-star">
                                <div className="infor-star__item"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700" />
                                </svg>
                                </div>
                                <div className="infor-star__item"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700" />
                                </svg>
                                </div>
                                <div className="infor-star__item"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700" />
                                </svg>
                                </div>
                                <div className="infor-star__item"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700" />
                                </svg>
                                </div>
                                <div className="infor-star__item"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.1563 6.0125L0.800049 6.9375L5.40005 11.4188L4.31255 17.75L10 14.7625V0.25L7.1563 6.0125Z" fill="#FFC700" />
                                </svg></div>
                            </div>

                            <span className="infor__view">
                                5 Customer Review
                            </span>

                        </div>

                        <span className="infor__desc">
                            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

                        </span>

                        <div className="infor-size">
                            <span className="size__title">
                                Size
                            </span>
                            <div className="size-list">
                                <button className="size__item">
                                    L
                                </button>
                                <button className="size__item">
                                    XL
                                </button>
                                <button className="size__item">
                                    XS
                                </button>
                            </div>
                        </div>

                        <div className="infor-color">
                            <span className="color__title">
                                color
                            </span>
                            <div className="color-list">
                                <button className="color__item">

                                </button>
                                <button className="color__item">

                                </button>
                                <button className="color__item">

                                </button>
                            </div>
                        </div>

                        <div className="actions">
                            <div className="actions-quantity">
                                <button>-</button>
                                <input type="number" placeholder="1" />
                                <button>+</button>
                            </div>

                            <div className="actions-addcart">
                                <button>Add To Cart</button>
                                <button>+ Compare</button>
                            </div>
                        </div>

                        <div className="infor-more">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>SKU</td>
                                        <td>:</td>
                                        <td>SS001</td>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td>:</td>
                                        <td>Sofas</td>
                                    </tr>
                                    <tr>
                                        <td>Tags</td>
                                        <td>:</td>
                                        <td>Sofa, Chair, Home, Shop</td>
                                    </tr>
                                    <tr>
                                        <td>Share</td>
                                        <td>:</td>
                                        <td>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_0_360)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_0_360">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_0_364)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833374 2.36498C0.833374 1.95876 0.994746 1.56917 1.28199 1.28193C1.56923 0.994687 1.95882 0.833315 2.36504 0.833315H17.6334C17.8347 0.832986 18.0341 0.872367 18.2202 0.949204C18.4062 1.02604 18.5753 1.13882 18.7177 1.2811C18.8602 1.42337 18.9731 1.59233 19.0502 1.77832C19.1272 1.96431 19.1668 2.16367 19.1667 2.36498V17.6333C19.1669 17.8347 19.1274 18.0341 19.0505 18.2202C18.9736 18.4062 18.8607 18.5753 18.7184 18.7177C18.576 18.8602 18.407 18.9731 18.221 19.0501C18.035 19.1272 17.8356 19.1668 17.6342 19.1666H2.36504C2.16383 19.1666 1.96459 19.127 1.7787 19.05C1.59282 18.973 1.42393 18.8601 1.28169 18.7177C1.13945 18.5754 1.02665 18.4065 0.949726 18.2205C0.872802 18.0346 0.833265 17.8354 0.833374 17.6341V2.36498ZM8.09004 7.82332H10.5725V9.06998C10.9309 8.35332 11.8475 7.70832 13.225 7.70832C15.8659 7.70832 16.4917 9.13582 16.4917 11.755V16.6066H13.8192V12.3516C13.8192 10.86 13.4609 10.0183 12.5509 10.0183C11.2884 10.0183 10.7634 10.9258 10.7634 12.3516V16.6066H8.09004V7.82332ZM3.50671 16.4925H6.18004V7.70832H3.50671V16.4916V16.4925ZM6.56254 4.84332C6.56758 5.07221 6.52685 5.2998 6.44274 5.51274C6.35863 5.72568 6.23283 5.91968 6.07273 6.08334C5.91263 6.24701 5.72146 6.37704 5.51042 6.46582C5.29938 6.5546 5.07274 6.60033 4.84379 6.60033C4.61484 6.60033 4.3882 6.5546 4.17716 6.46582C3.96613 6.37704 3.77495 6.24701 3.61485 6.08334C3.45475 5.91968 3.32895 5.72568 3.24484 5.51274C3.16073 5.2998 3.12 5.07221 3.12504 4.84332C3.13493 4.39403 3.32036 3.96647 3.64161 3.65222C3.96286 3.33797 4.39439 3.162 4.84379 3.162C5.29319 3.162 5.72472 3.33797 6.04597 3.65222C6.36722 3.96647 6.55265 4.39403 6.56254 4.84332Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_0_364">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM17.7563 9.80713C17.7637 9.92188 17.7637 10.0415 17.7637 10.1587C17.7637 13.7427 15.0342 17.8711 10.0464 17.8711C8.5083 17.8711 7.08252 17.4243 5.88135 16.6553C6.10107 16.6797 6.31104 16.6895 6.53565 16.6895C7.80518 16.6895 8.97217 16.2598 9.90234 15.5322C8.71094 15.5078 7.70996 14.7266 7.36816 13.6523C7.78564 13.7134 8.16162 13.7134 8.59131 13.6035C7.97785 13.4789 7.42645 13.1457 7.0308 12.6606C6.63515 12.1755 6.41964 11.5684 6.4209 10.9424V10.9082C6.77979 11.1108 7.20215 11.2354 7.64404 11.2524C7.27256 11.0049 6.96792 10.6695 6.75711 10.276C6.5463 9.88244 6.43585 9.443 6.43555 8.99658C6.43555 8.49121 6.56738 8.02979 6.8042 7.62939C7.48511 8.46762 8.33479 9.15318 9.29801 9.64152C10.2612 10.1299 11.3164 10.41 12.395 10.4639C12.0117 8.62061 13.3887 7.12891 15.0439 7.12891C15.8252 7.12891 16.5283 7.45605 17.0239 7.9834C17.6367 7.86865 18.2227 7.63916 18.7451 7.33154C18.5425 7.95898 18.1177 8.48877 17.5537 8.82324C18.1006 8.76465 18.6279 8.61328 19.1162 8.40088C18.7476 8.94287 18.2861 9.42383 17.7563 9.80713Z" fill="black" />
                                            </svg>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail