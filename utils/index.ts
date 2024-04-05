
// uploadfile 
export async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "NNshop");
    formData.append("folder", "NNshop");

    try {

    } catch (error) {

    }
}

export function formatNumberWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
