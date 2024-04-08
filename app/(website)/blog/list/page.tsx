'use client'

import Loading from "@/components/loading/loading";
import Blog from "@/components/user/blog/Blog";
import blogApi from "@/service/blogApi";
import { useQuery } from "@tanstack/react-query";

const BlogListPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["BLOG"],
        queryFn: async () => {
            try {
                return await blogApi.getAll();
            } catch (error) {
                console.log(error);
            }
        }
    })
    if (isLoading) return <><Loading /></>
    return (
        <div>
            <Blog data={data}/>
        </div>
    )
}

export default BlogListPage