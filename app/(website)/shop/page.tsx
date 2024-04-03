import BannerSmall from "@/components/user/bannerSmall/BannerSmall"
import Footer from "@/components/user/footer/Footer"
import Header from "@/components/user/header/Header"
import NavShop from "@/components/user/navShop/NavShop"
import ProductList from "@/components/user/productlist/ProductList"


const ShopPage = () => {
  return (
    <div>
        <BannerSmall />
        <NavShop />
        <ProductList />
    </div>
  )
}

export default ShopPage