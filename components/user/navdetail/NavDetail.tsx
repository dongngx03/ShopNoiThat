'use client'
import "./NavDetail.css"

const NavDetail = ({ data }: { data: any }) => {
    console.log(data);
    
    return (
        <div>
            <nav className="navdetail">
                <div className="container">
                    <div className="navdetail-block">
                        <div className="block__item1">
                            <a href="">Home</a>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                            </svg>
                            <a href="">Shop</a>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                            </svg>
                        </div>
                        <div className="block__item2">
                            <span>{data?.data?.name}</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavDetail