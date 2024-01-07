


import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClint = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => useQuery(
    {
        queryKey: ["platforms"], 
        queryFn: apiClint.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 1 day
       
    });

export default usePlatforms;