import instance from "./instance";

export default class orderApi {
    public static async add(data: any) {
        return await instance.post("/common/order/add", data)
    }
    public static async getAll() {
        const { data } = await instance.get("/common/order/getAll");
        return data
    }
}
