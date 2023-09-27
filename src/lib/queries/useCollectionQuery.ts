import { useQuery } from "@tanstack/react-query";
import { CollectionResponse } from "../../types/collectionResponse";
import { api } from "../app/api.ts";

export const useCollectionQuery = () => {
    return useQuery({
        queryKey: ["collection"],
        queryFn: async () => {
            const res = await api.get<CollectionResponse>("nl/collection");
            return res.data;
        },
    });
};
