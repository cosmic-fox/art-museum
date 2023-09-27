import { useInfiniteQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { CollectionResponse } from "../../types/collectionResponse";
import { api } from "../app/api.ts";
import { filtersAtom } from "../atoms/filters.ts";

export const useCollectionQuery = ({ keepPreviousData }: { keepPreviousData?: boolean } = {}) => {
    const filters = useAtomValue(filtersAtom);
    return useInfiniteQuery({
        // Make sure filters are part of the query key so that the query is re-run when they change
        // as well as making it easy to reuse previous results when we've seen these filters before
        queryKey: ["collection", filters],
        queryFn: async ({ pageParam }: { pageParam?: number }) => {
            const res = await api.get<CollectionResponse>("en/collection", {
                params: {
                    q: filters.query, // search query
                    type: filters.type, // type filter
                    p: pageParam, // page number
                    ps: 20, // items per page
                    imgonly: true, // only return items with images
                },
            });
            return res.data;
        },
        getNextPageParam: (_lastPage, pages) => {
            // Calculate how many items we've already seen (all pages combined)
            // If we have seen the amount of items that the response claims exist, we know we're done
            const totalItems = pages.reduce((acc, page) => acc + page.artObjects.length, 0);
            if (totalItems > _lastPage.count) return pages.length + 1;
        },
        refetchOnWindowFocus: false,
        keepPreviousData,
    });
};
