import instance from "./instance";

export default class cartApi {
    public static async getCartOneUser(id: string) {
        const { data } = await instance.get(`/common/cart/get-cart/${id}`)
        return data
    }

    public static async addCart(data: any) {
        return await instance.post("/common/cart/add", data)
    }

    public static async increment(id: string) {
        return await instance.put(`/common/cart/update/inrement/${id}`)
    }
    public static async decrement(id: string) {
        return await instance.put(`/common/cart/update/decrement/${id}`)
    }

    public static async delete(id : string) {
        return await instance.delete(`/common/cart/delete/${id}`)
    }

    
}
