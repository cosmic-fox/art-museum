import { useQuery } from "@tanstack/react-query";
import { ArtObject } from "../../types/collectionResponse";

export const useFavoriteQuery = (artObjectId: ArtObject["id"]) => {
    return useQuery({
        queryKey: ["favorite", artObjectId],
        queryFn: async () => {
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]") as ArtObject["id"][];
            return favorites.includes(artObjectId);
        },
    });
};
