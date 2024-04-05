import { TProduct } from "@/components/admin/AddProduct";
import productApi from "@/service/productApi";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import Swal from "sweetalert2";
import { toast } from "sonner";

const productapi = new productApi()



const useProductMutaition = ({ action, onSuccess, resolver }: { action: "CREATE" | "UPDATE", onSuccess?: () => void, resolver: any }) => {
    const { mutate, ...rest } = useMutation({
        mutationFn: async (data: any) => {
            switch (action) {
                case "CREATE":
                    await productapi.create(data)
                    break;
                case "UPDATE":
                    if (data?.image.length === 0) {
                        const { image, id, ...rest } = data
                        await productapi.update(id, { ...rest })
                    } else {
                        const { id, ...rest } = data
                        await productapi.update(id, { ...rest })
                    }
                    break;
                default:
                    return null
            }
        },
        onSuccess: () => {
            onSuccess && onSuccess();
        },
    })

    const { register, reset, handleSubmit, formState: { errors } } = useForm<TProduct>({ resolver: yupResolver(resolver) });

    const onSubmit: SubmitHandler<TProduct> = async (data: TProduct) => {
        Swal.fire({
            title: 'Xác nhận',
            text: "Xác nhận thao tác ",
            icon: 'question',
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
        })
            .then(async (res) => {
                if (res.isConfirmed) {
                    const CLOUND_NAME = "dygixfuh9"
                    const PRESET_NAME = "NNshop"
                    const FOLDER_NAME = "NNshop"
                    const api = `https://api.cloudinary.com/v1_1/${CLOUND_NAME}/image/upload`
                    const formData = new FormData()
                    formData.append("upload_preset", PRESET_NAME)
                    formData.append("folder", FOLDER_NAME)

                    const imgUrlArray: string[] = []

                    if (data?.image.length !== 0) {
                        for (const file of data.image) {
                            formData.append("file", file)
                            await axios
                                .post(api, formData, {
                                    headers: {
                                        "Content-Type": "multipart/form-data"
                                    }
                                })
                                .then(res => imgUrlArray.push(res?.data?.url))
                                .then(() => console.log(imgUrlArray))
                        }
                    }

                    const newProduct: any = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        image: imgUrlArray,
                        quantity: data.quantity,
                        color: data.color,
                        category_id: data.category_id
                    }

                    if (data?.id) {
                        newProduct.id = data?.id
                    }
                    console.log(newProduct);

                    mutate(newProduct);
                    reset()
                }
            })
        // upload ảnh 

    }

    return {
        register,
        onSubmit,
        handleSubmit,
        ...rest,
        errors
    }

}

export const deleteProductMutation = () => {
    const queryClient = useQueryClient()
    const deletePro = useMutation({
        mutationFn: async (productID: string | number) => {
            return await productapi.delete(productID)
        },
        onSuccess: () => {
            toast("delete product successfully !!!", {
                description: "Bạn vừa xóa sổ 1 sản phẩm đấy",
                action: {
                    label: "Ẩn",
                    onClick: () => console.log("Ẩn"),
                },
            })
            queryClient.invalidateQueries({ queryKey: ['PRODUCT'] })
        }
    })

    return deletePro

}

export default useProductMutaition