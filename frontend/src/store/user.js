const { fetcher } = require("@/utils/fetcher");
const { default: useSWR } = require("swr");

export const useGetUser = (id)=>{
    const {data, isError} = useSWR(`/users/${id}`, fetcher);

    return {user: data, isError}
}