import "./BannerSmall.css"

const BannerSmall = () => {
    return (
        <div>
            <section className="banner">
                <img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1440" alt="" />
                <div className="banner-opacity">
                    <span className="banner-opacity__title">Shop</span>
                    <div className="banner-opacity__link">
                        <a href="">Home</a>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                        </svg>
                        <p>Shop</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BannerSmall