'use client'
import DescDetail from "@/components/user/descdetail/DescDetail"
import NavDetail from "@/components/user/navdetail/NavDetail"
import ProductDetail from "@/components/user/productdetail/ProductDetail"
import RelatedDetail from "@/components/user/relateddetail/RelatedDetail"
import useProductQurey from "@/utils/useProductQuery"


const DetailPage = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useProductQurey(params.id)
  console.log(data);
  
  const more = useProductQurey(false, 4, 1)
  
  return (
    <div>
      <NavDetail data={data} />
      <ProductDetail data={data} />
      <DescDetail data={data} />
      <RelatedDetail data={more} />
    </div>
  )
}

export default DetailPage