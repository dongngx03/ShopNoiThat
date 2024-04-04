import { TProduct } from "@/components/admin/AddProduct";
import productApi from "@/service/productApi";
import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

const productapi = new productApi()

const useProductMutaition = ({ action, onSuccess, resolver }: { action: "CREATE" | "UPDATE", onSuccess?: () => void, resolver: any }) => {
    const { mutate, ...rest } = useMutation({
        mutationFn: async (data: any, id?: number | string | undefined) => {
            switch (action) {
                case "CREATE":
                    await productapi.create(data)
                    break;
                case "UPDATE":
                    await productapi.update(id, data)
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

        // upload ảnh 
        const CLOUND_NAME = "dygixfuh9"
        const PRESET_NAME = "NNshop"
        const FOLDER_NAME = "NNshop"
        const api = `https://api.cloudinary.com/v1_1/${CLOUND_NAME}/image/upload`
        const formData = new FormData()
        formData.append("upload_preset", PRESET_NAME)
        formData.append("folder", FOLDER_NAME)

        const imgUrlArray: string[] = []
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

        const newProduct = {
            name: data.name,
            price: data.price,
            description: data.description,
            img: imgUrlArray,
            quantity: data.quantity,
            color: data.color.split(",")
        }
        console.log(newProduct);
        
        mutate(newProduct);
        reset()
    }

    return {
        register,
        onSubmit,
        handleSubmit,
        ...rest,
        errors
    }

}

export default useProductMutaition