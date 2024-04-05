'use client'
import { toast } from "sonner"
import { Button } from "../ui/button"
import useProductMutaition from "@/utils/useProductMutation"
import * as yup from 'yup';
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useQuery } from "@tanstack/react-query";
import categoriesApi from "@/service/categoriesApi";
import useProductQurey from "@/utils/useProductQuery";


const UpdateProduct = ({ id }: { id: string }) => {
    const ProductUpdate = useProductQurey(id)
    const schema = yup
        .object({
            name: yup.string().required().min(10).max(100),
            price: yup.number().required().min(1000000).max(1000000000),
            description: yup.string().required().min(20),
            color: yup.string().required(),
            quantity: yup.number().required().min(10),
            category_id: yup.string().required()

        })
        .required()


    const { register, handleSubmit, onSubmit, errors } = useProductMutaition({
        action: "UPDATE",
        onSuccess: () => {
            toast("update product successfully!", {
                description: "Bạn vừa cập nhật cái sản phẩm kia thành công rồi đấy!",
                action: {
                    label: "Ẩn",
                    onClick: () => console.log("Ẩn"),
                },
            })
            setTimeout(() => window.location.href = "/admin/product/list", 2000)
        },
        resolver: schema
    })

    const { data } = useQuery({
        queryKey: ["CATEGORY"],
        queryFn: async () => {
            return await categoriesApi.getAll();
        }
    })



    return (
        <div className="">
            <div className="p-4 sm:ml-64">
                <div className="w-full h-screen relative overflow-auto p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

                    <form className=" mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" value={id} {...register("id")} />
                        <div className="relative z-0 w-full mb-5 group">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Name"
                                {...register("name")}
                                defaultValue={ProductUpdate?.data?.data?.name}
                            />
                            {errors.name && <span className="text-xs text-red-600">{errors.name.message}</span>}
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Label htmlFor="Price">Price</Label>
                            <Input
                                id="Price"
                                type="number"
                                placeholder="Price"
                                defaultValue={ProductUpdate?.data?.data?.price}
                                {...register("price")}
                            />
                            {errors.price && <span className="text-xs text-red-600">{errors.price.message}</span>}
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Label htmlFor="Description">Description</Label>
                            <Textarea
                                id="Description"
                                placeholder="Description"
                                defaultValue={ProductUpdate?.data?.data?.description}
                                {...register("description")}
                            />
                            {errors.description && <span className="text-xs text-red-600">{errors.description.message}</span>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <Label htmlFor="picture">Picture</Label>
                            <Input
                                id="picture"
                                type="file"
                                multiple
                                {...register("image")}
                            />
                            <span className="text-xs text-red-600">Nếu không muốn cập nhật lại ảnh xin để trống trường này </span>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Label htmlFor="color">Color</Label>
                            <Input
                                id="color"
                                type="color"
                                defaultValue={ProductUpdate?.data?.data?.color}
                                {...register("color")}
                            />
                            {errors.color && <span className="text-xs text-red-600">{errors.color.message}</span>}
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                                id="quantity"
                                type="number"
                                placeholder="quantity"
                                defaultValue={ProductUpdate?.data?.data?.quantity}
                                {...register("quantity")}
                            />
                            {errors.quantity && <span className="text-xs text-red-600">{errors.quantity.message}</span>}
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Label htmlFor="category">Category</Label>
                            <select
                                {...register("category_id")}
                                defaultValue={ProductUpdate?.data?.data?.category_id}
                                id="category"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected value={""}>Choose a category</option>
                                {
                                    data?.list.map((item: any, index: number) => (
                                        <option key={index} value={item?._id}>{item?.name}</option>
                                    ))
                                }
                            </select>
                            {errors.category_id && <span className="text-xs text-red-600">{errors.category_id.message}</span>}
                        </div>


                        <Button>Update Product</Button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default UpdateProduct