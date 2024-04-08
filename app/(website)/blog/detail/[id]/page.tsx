'use client'

import Loading from "@/components/loading/loading"
import blogApi from "@/service/blogApi"
import { useQuery } from "@tanstack/react-query"


const BlogDetail = ({ params }: { params: { id: string } }) => {
    const { data, isLoading } = useQuery({
        queryKey: ["BLOG"],
        queryFn: async () => {
            try {
                return await blogApi.getDetail(params.id)
            } catch (error) {
                console.log(error);

            }
        }
    })

    console.log(data);
    if (isLoading) return <><Loading /></>
    return (
        <div className="container py-6">
            <div dangerouslySetInnerHTML={{ __html: data?.blogDetail?.content }} />
        </div>
    )
}

export default BlogDetail