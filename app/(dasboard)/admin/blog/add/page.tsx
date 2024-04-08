"use client"
import React, { useState } from 'react'
import FroalaEditor from "react-froala-wysiwyg"
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import "froala-editor/js/plugins/save.min.js"
import "froala-editor/js/plugins/markdown.min.js"
import "froala-editor/js/plugins/align.min.js"
import "froala-editor/js/plugins/code_view.min.js"
import "froala-editor/js/plugins/code_beautifier.min.js"
import "froala-editor/js/plugins/colors.min.js"
import "froala-editor/js/plugins/fullscreen.min.js"
import "froala-editor/js/plugins/font_size.min.js"
import "froala-editor/js/plugins/font_family.min.js"
import "froala-editor/js/plugins/image.min.js"
import "froala-editor/js/plugins/line_height.min.js"
import "froala-editor/js/plugins/lists.min.js"
import "froala-editor/js/plugins/emoticons.min.js"
import "froala-editor/js/plugins/paragraph_style.min.js"
import "froala-editor/js/plugins/paragraph_format.min.js"
import "froala-editor/js/plugins/video.min.js"
import "froala-editor/js/plugins/table.min.js"
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import blogApi from '@/service/blogApi';
import { toast } from 'sonner';
import Loading from '@/components/loading/loading';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';


const AdminBlogAddPage = () => {
  const [model, setModel] = useState(() => {
    return localStorage.getItem("savedHTML") || ""
  })
  console.log(model);

  const [title, setTitle] = useState("")
  const [image_avatar, setImage_avatar] = useState<string>("");

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { title: string, content: string, image_avatar: string }) => {
      try {
        await blogApi.add(data)
      } catch (error) {
        console.log(error);

      }
    },
    onSuccess: () => {
      toast("Tạo bài viết thành công")
      setTimeout(() => window.location.href = "/admin/blog/list", 1000)
    }
  })

  const handleSubmitEditor = () => {
    if (model && title && image_avatar) {
      mutate({
        title: title,
        content: model,
        image_avatar: image_avatar
      })
    } else {
      toast("Chưa nhập đủ trường title hoặc là content kìa bạn", {
        description: "nhập xong mới gửi lên dc !",
        action: {
          label: "Bỏ",
          onClick: () => {

          },
        },

      })
    }
  }
  if (isPending) return <>
    <div className="p-4 sm:ml-64">
      <div className="w-full h-screen relative overflow-auto  p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <Loading />
      </div>
    </div>
  </>

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="w-full h-screen relative overflow-auto  p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className='w-full flex justify-center items-center pt-1 pb-2'>
            <span className='font-bold text-xl'>NEW BLOG</span>
          </div>
          <div className='w-full py-4'>
            <Label>Title</Label>
            <Input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='title here'
            />
          </div>
          <div className='w-full py-4'>
            <Label>Image_avatar</Label>
            <Input
              type='text'
              value={image_avatar}
              onChange={(e) => setImage_avatar(e.target.value)}
              placeholder='image_avatar here'
            />
          </div>
          <div className='w-full'>
            <Label>Content</Label>
          </div>
          <FroalaEditor
            model={model}
            onModelChange={(e: string) => setModel(e)}
            config={{
              placeholderText: "start your text ...",
              charCounterCount: true,
              saveInterval: 2000,
              events: {
                "save.before": function (html: string) {
                  localStorage.setItem("savedHTML", html)
                }
              },
              tag: "textarea"
            }}
          />
          <div className='w-full flex justify-center items-center p-3'>
            <Button className='w-full' onClick={handleSubmitEditor}>Thêm tin</Button>
          </div>

          <div className='w-full flex justify-center items-center p-3'>
            <span className='font-bold text-xl'>DEMO BLOG</span>
          </div>

          <FroalaEditorView model={model} />
        </div>
      </div>
    </div>
  )
}

export default AdminBlogAddPage