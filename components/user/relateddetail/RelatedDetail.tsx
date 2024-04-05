'use client'
import Link from "next/link"
import "./RelatedDetail.css"
import { formatNumberWithCommas } from "@/utils"

const RelatedDetail = ({ data } : { data : any}) => {
    
    return (
        <div>
            <section className="relatedproduct">
                <div className="container">
                    <div className="section-heading">
                        <span className="heading__title">
                            Related Products
                        </span>
                    </div>

                    <div className="section-body">
                        <div className="product-list">

                        {
                            data?.data?.data?.map((item: any, index: number) => (
                                <div key={index} className="product-item">
                                    <div className="product-image">
                                        <img src={item?.image[0]} alt="" />
                                        <span className="product-discount">-50%</span>
                                    </div>

                                    <div className="product-infor">
                                        <div className="product__name">
                                            <a href="" className="product__link">{item?.category_id?.name}</a>
                                        </div>

                                        <a href="" className="product-category">{item?.name}</a>
                                    </div>

                                    <div className="product-price">
                                        <span className="product-price__new">
                                            {
                                                formatNumberWithCommas(parseInt(item?.price))
                                            }đ
                                        </span>
                                        <span className="product-price__old">
                                            <del>3.500.000đ</del>
                                        </span>
                                    </div>

                                    <div className="product-actions">
                                        <button className="product-action__addtocart z-10">
                                            <Link className="z-11" href={`/detail/${item?._id}`} >
                                                Show detail
                                            </Link>
                                        </button>

                                        <div className="product-actions-more">
                                            <span className="product-action__share"><i className="fa-solid fa-share-nodes"></i> Share</span>
                                            <span className="product-action__like"><i className="fa-regular fa-heart"></i> Like</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        </div>
                    </div>

                    <div className="section-actions">
                        <button className="action__more">Show more</button>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default RelatedDetail