const { fetcher } = require("@/utils/fetcher");
const { default: useSWR } = require("swr");

export const useGetAllHostels = ()=>{
    const {data, isLoading, isError} = useSWR("/hostels/", fetcher);

    return {allHostels: data, isLoading, isError}
}