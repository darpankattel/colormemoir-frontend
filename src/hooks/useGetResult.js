import { useQuery } from "@tanstack/react-query";
import { URL } from "@/data/URL"
import myaxios from "@/utils/myaxios";

export const useGetResult = ({id}) => {
    const fetchApi = async () => {
        const response = await myaxios.get(`${URL}conv/${id}/`);
        return response.data.data;
    }
    return useQuery(
        {
            queryKey: ["result", id],
            queryFn: fetchApi
        }
    )
}