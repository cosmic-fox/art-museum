import { useMutation } from "@tanstack/react-query";
import { ArtObject } from "../../types/collectionResponse";
import { queryClient } from "../app/queryClient.ts";

export const useToggleFavoriteMutation = (artObjectId: ArtObject["id"]) => {
    return useMutation({
        mutationKey: ["toggleFavorite"],
        mutationFn: async () => {
            // We store favourites in localStorage, as an array of favourite artObject ids
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]") as ArtObject["id"][];

            // We could use .includes() here, but we need the index later to remove the item anyway
            const index = favorites.indexOf(artObjectId);
            if (index !== -1) favorites.splice(index, 1);
            else favorites.push(artObjectId);

            // Save the updated favourites array back to localStorage
            localStorage.setItem("favorites", JSON.stringify(favorites));
        },
        onSuccess: async () => {
            // Invalidate ONLY the favorite query for this artObject, so we don't
            // trigger loads of re-renders
            await queryClient.invalidateQueries(["favorite", artObjectId]);
        },
    });
};
