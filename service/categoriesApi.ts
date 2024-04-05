import instance from "./instance";

export default class categoriesApi {
    public static async getAll() {
        const { data } = await instance.get("/Admin/category/get-all")
        return data
    }
}