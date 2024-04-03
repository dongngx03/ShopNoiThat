import { TProduct } from "@/components/admin/AddProduct";
import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";


const useProductMutaition = ({ action, onSuccess }: { action: "CREATE" | "UPDATE", onSuccess?: () => void }) => {
    const { mutate, ...rest } = useMutation({
        mutationFn: async (data: any) => {
            switch (action) {
                case "CREATE":
                    await axios.post('/api/products', data);
                    break;
                case "UPDATE":
                    
                    break;
                default:
                    return null
            }
        },
        onSuccess: () => {
            onSuccess && onSuccess();
        },
    })

    const { register, reset, handleSubmit } = useForm<TProduct>();

    const onSubmit: SubmitHandler<TProduct> = async (data: TProduct) => {
        const newProduct = {
            name: data.name,
            price: data.price,
            description: data.description,
            image: [data.img1, data.img2, data.img3, data.img4]
        }
        mutate(newProduct);
        reset()
    }

    return {
        register,
        onSubmit,
        handleSubmit,
        ...rest
    }

}

export default useProductMutaition