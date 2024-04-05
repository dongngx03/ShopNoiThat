import UpdateProduct from "@/components/admin/UpdateProduct"


const UpdateProductPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <UpdateProduct id={params.id} />
    </div>
  )
}

export default UpdateProductPage