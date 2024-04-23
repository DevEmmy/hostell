import { axiosConfig } from "@/request/request";

export const fetcher = (url)=> axiosConfig.get(url).then(res => res.data.payload);