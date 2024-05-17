const { fetcher } = require("@/utils/fetcher");
const { default: useSWR } = require("swr");

export const  useGetHostelDetails = (hostelid)=>{
    const {data, isLoading, isError} = useSWR(`/hostels/${hostelid}`, fetcher);

    return {hostelDetails: data, isLoading, isError}
}