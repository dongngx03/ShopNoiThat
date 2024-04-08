'use client'
import Link from "next/link"
import "./Blog.css"


const Blog = ({ data }: { data: any }) => {
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

                            {
                                data?.blog?.map((item: any, index: number) => (
                                    <div className="blog-list-item">
                                        <div className="blog-list-item__img">
                                            <img src={item?.image_avatar} alt="" />
                                        </div>

                                        <div className="blog-item-main">
                                            <span className="blog-main__title">
                                                {item?.title}
                                            </span>
                                            <p className=" w-full h-2/3 relative overflow-auto ">Your level of comfort when geting into and out of bed can be greatly influenced by the bed frame you choose. It may significantly affect how  want your bedroom to feet and look</p>
                                            <div className="blog-main__more">
                                                <Link href={`/blog/detail/${item?._id}`}>ABOUT <i className="fa-solid fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog