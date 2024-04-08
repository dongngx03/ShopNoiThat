import instance from "./instance";

export default class blogApi{
    public static async add(blog : { title : string, content : string, image_avatar : string}) {
        return await instance.post("/Admin/blog/add", blog)
    }   
    public static async getAll() {
        const { data } = await instance.get("/Admin/blog/list")
        return data
    }
    public static async getDetail(id : string) {
        const { data } = await instance.get(`/Admin/blog/detail/${id}`)
        return data
    }
    public static async delete(id: string) {
        return await instance.delete(`/Admin/blog/detail/${id}`)
    }
}