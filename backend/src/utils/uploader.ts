import  cloudinary from "cloudinary"

require("dotenv").config()

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
  });


export const uploader = async (data: string) => {

    let url = (await cloudinary.v2.uploader.upload(data)).secure_url;
    return url
}

export const uploaderListOfMedia = async (arr: any) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(await uploader(arr[i].base64));
    }
    return newArr;
}

