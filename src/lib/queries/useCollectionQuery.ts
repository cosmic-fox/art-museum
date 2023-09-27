import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CollectionResponse } from "../../types/collectionResponse";
import { api } from "../app/api.ts";

export const useCollectionQuery = () => {
    return useInfiniteQuery({
        queryKey: ["collection"],
        queryFn: async ({ pageParam }: { pageParam?: number }) => {
            const res = await api.get<CollectionResponse>("nl/collection", {
                params: {
                    p: pageParam, // page number
                    ps: 20, // items per page
                    imgonly: true, // only return items with images
                },
            });
            return res.data;
        },
        getNextPageParam: (lastPage, pages) => {
            return pages.length + 1;
        },
    });
};
