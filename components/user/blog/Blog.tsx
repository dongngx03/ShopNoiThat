import "./Blog.css"

const Blog = () => {
    return (
        <div>
            <section className="blog">
                <div className="container">
                    <div className="blog-heading">
                        <h2 className="blog-heading__title">
                            Blog
                        </h2>
                    </div>

                    <div className="blog-body">
                        <div className="blog-list">
                            <div className="blog-list-item">
                                <div className="blog-list-item__img">
                                    <img src="https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                </div>

                                <div className="blog-item-main">
                                    <span className="blog-main__title">
                                        THE ULTIMATE SOFA BUYING GUIDE
                                    </span>
                                    <p>Your level of comfort when geting into and out of bed can be greatly influenced by the bed frame you choose. It may significantly affect how  want your bedroom to feet and look</p>
                                    <div className="blog-main__more">
                                        <a href="">ABOUT <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-list-item">
                                <div className="blog-list-item__img">
                                    <img src="https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                </div>

                                <div className="blog-item-main">
                                    <span className="blog-main__title">
                                        A BEDROOM MUST HAVE SOME THING LIKE THIS
                                    </span>
                                    <p>Your level of comfort when geting into and out of bed can be greatly influenced by the bed frame you choose. It may significantly affect how  want your bedroom to feet and look</p>
                                    <div className="blog-main__more">
                                        <a href="">ABOUT <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-list-item">
                                <div className="blog-list-item__img">
                                    <img src="https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                </div>

                                <div className="blog-item-main">
                                    <span className="blog-main__title">
                                        WHY IS A TV CONSOLE A MUST IN EVERY HOUSE
                                    </span>
                                    <p>People do a lot of research to make sure they purchase the ideal
                                        televisoin. And like the rest of us, you want to keep that gorgeous flat srceen in your living or bedroom on a table or stand</p>
                                    <div className="blog-main__more">
                                        <a href="">ABOUT <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog