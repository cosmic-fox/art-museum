import { useQuery } from "@tanstack/react-query";
import { CollectionResponse } from "../../types/collectionResponse";
import { api } from "../app/api.ts";

export const useCollectionQuery = () => {
    return useQuery({
        queryKey: ["collection"],
        queryFn: async () => {
            const res = await api.get<CollectionResponse>("nl/collection", {
                params: {
                    ps: 100, // items per page
                    imgonly: true, // only return items with images
                },
            });
            return res.data;
        },
    });
};
