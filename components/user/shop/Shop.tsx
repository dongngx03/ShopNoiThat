import "./Shop.css"

const Shop = () => {
    return (
        <div>
            <div>
                <section className="shop">
                    <div className="container">
                        <div className="section-heading">
                            <h2 className="section-heading__title">
                                Shop
                            </h2>
                        </div>
                        <div className="section-body">
                            <div className="section-img-list">
                                <div className="img-list__item">
                                    <img src="https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                </div>
                                <div className="img-list__item">
                                    <img src="https://images.pexels.com/photos/1248587/pexels-photo-1248587.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                </div>
                                <div className="img-list__item">
                                    <img src="https://images.pexels.com/photos/1248585/pexels-photo-1248585.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                </div>
                                <div className="img-list__item">
                                    <img src="https://images.pexels.com/photos/1248586/pexels-photo-1248586.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Shop