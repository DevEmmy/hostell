const { fetcher } = require("@/utils/fetcher");
const { default: useSWR } = require("swr");

export const useGetAllHostels = ()=>{
    const {data, loading, isError} = useSWR("/hostels/", fetcher);

    return {allHostels: data, loading, isError}
}