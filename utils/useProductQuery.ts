import productApi from "@/service/productApi";
import { useQuery } from "@tanstack/react-query";

const productapi = new productApi()

const useProductQurey = (
    id?: any,
    _limit?: number | undefined,
    _page?: number | undefined
) => {
    const { data, isLoading } = useQuery({
        queryKey: ['PRODUCT', id, _limit, _page],
        queryFn: async () => {
            return id ? productapi.getDetail(id) : productapi.getAll(_limit, _page)
        }
    });

    return { data, isLoading }
}

export default useProductQurey