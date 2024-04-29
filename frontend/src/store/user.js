const { fetcher } = require("@/utils/fetcher");
const { default: useSWR } = require("swr");

export const useGetUser = ({id})=>{
    const {data, loading, isError} = useSWR(`/${id}/`, fetcher);

    return {user: data, loading, isError}
}