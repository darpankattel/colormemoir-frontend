import { useQuery } from "@tanstack/react-query";
import {URL} from "@/data/URL"
console.log(URL)
export const useListProjects = ({ provinceSearch, districtSearch, local_levelSearch, wardSearch, completed, page, page_size, category }) => {
    const fetchApi = async () => {
        const response = await fetch(`${URL}station/?project?province=${provinceSearch?provinceSearch:""}&district=${districtSearch?districtSearch:""}&local_level=${local_levelSearch?local_levelSearch:""}&ward=${wardSearch?wardSearch:""}&completed=${completed?"true":"false"}${page?`&page=${page}&page_size=${page_size}`:""}&category=${category?category:""}`)

        const data = await response.json()  
        return {list: data?.results, count: data?.count, next: data?.next, previous: data?.previous}
    }
    return useQuery(
        {
            queryKey: ["List Radios stations", provinceSearch, districtSearch, local_levelSearch, wardSearch, completed, page, page_size, category],
            queryFn: fetchApi
        }
    )
}
