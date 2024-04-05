import instance from "./instance";


export default class productApi {
    public async create(data: any): Promise<any> {
        return await instance.post("/Admin/product/add", data)
    }

    public async delete(id: number | string): Promise<any> {
        return await instance.delete(`/Admin/product/delete/${id}`)
    }

    public async update(id: number | string | undefined, data: any): Promise<any> {
        return await instance.put(`/Admin/product/update/${id}`, data)
    }

    public async getAll(_limit: number | undefined, _page: number | undefined): Promise<any> {
        const { data } = await instance.get(`/common/product/get-product?_limit=${_limit}&_page=${_page}`)
        return data
    }

    public async getDetail(id?: number | string | undefined) {
        const { data } = await instance.get(`/common/product/get-product-detail/${id}`)
        return data
    }
}