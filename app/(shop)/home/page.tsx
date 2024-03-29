import BannerHome from "@/components/user/bannerHome/BannerHome"
import Blog from "@/components/user/blog/Blog"
import New from "@/components/user/new/New"
import Shop from "@/components/user/shop/Shop"


const HomePage = () => {
  return (
    <>
        <BannerHome />
        <New />
        <Shop />
        <Blog />
    </>
  )
}

export default HomePage