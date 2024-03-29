import DescDetail from "@/components/user/descdetail/DescDetail"
import NavDetail from "@/components/user/navdetail/NavDetail"
import ProductDetail from "@/components/user/productdetail/ProductDetail"
import RelatedDetail from "@/components/user/relateddetail/RelatedDetail"


const DetailPage = () => {
  return (
    <div>
        <NavDetail />
        <ProductDetail />
        <DescDetail />
        <RelatedDetail />
    </div>
  )
}

export default DetailPage