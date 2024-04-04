
// uploadfile 
export async function uploadFile(file : File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "NNshop");
    formData.append("folder", "NNshop");

    try {
        
    } catch (error) {
        
    }
}