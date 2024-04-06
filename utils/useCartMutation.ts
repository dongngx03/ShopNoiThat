import cartApi from "@/service/cartApi";
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useCartMutation = (
    {
        action,
        onSuccess
    }
        :
        {
            action: "INCREMENT" | "DECREMENT",
            onSuccess: () => void,
        }) => {
    const queryClient = useQueryClient()
    const { mutate, ...rest } = useMutation({
        mutationFn: async (id: string) => {
            switch (action) {
                case "INCREMENT":
                    await cartApi.increment(id)
                    break;
                case "DECREMENT":
                    await cartApi.decrement(id)
                    break;

                default:
                    return null
            }
        },
        onSuccess: () => {
            onSuccess && onSuccess()
            queryClient.invalidateQueries({ queryKey: ['CART'] })
        }
    })

    return { mutate, ...rest }
}

export default useCartMutation