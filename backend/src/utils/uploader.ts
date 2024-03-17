import cloudinary from "cloudinary"


export const uploader = async (data: string)=>{

    let url = (await cloudinary.v2.uploader.upload(data)).secure_url;
    return url
}

export const uploaderListOfMedia = async (arr: any)=>{
    let newArr = [];

    for(let i = 0; i < arr.length ; i++){
        newArr.push(await uploader(arr[i].base64));
    }
    return newArr;
}

