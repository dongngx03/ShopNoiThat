import "./BannerHome.css"

const BannerHome = () => {
    return (
        <div>
            <section className="banner">
                <img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1440" alt="" />
                <div className="banner-opacity">
                    <span className="banner-opacity__title">Trang chủ</span>
                    <a href="" className="banner-opacity__link">Home</a>
                </div>
            </section>
        </div>
    )
}

export default BannerHome