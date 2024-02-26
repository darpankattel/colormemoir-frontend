import { useQuery } from "@tanstack/react-query";
import { URL } from "@/data/URL"
import myaxios from "@/utils/myaxios";

export const useGetProfile = () => {
    const fetchApi = async () => {
        const response = await myaxios.get(`${URL}acc/profile/`);
        return response.data.data;
    }
    return useQuery(
        {
            queryKey: ["profile"],
            queryFn: fetchApi
        }
    )
}