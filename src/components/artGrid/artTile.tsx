import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { FC } from "react";
import { useToggleFavoriteMutation } from "../../lib/mutations/useToggleFavoriteMutation.ts";
import { useFavoriteQuery } from "../../lib/queries/useFavoriteQuery.ts";
import { getThumbnailUrl } from "../../lib/util/getThumbnailUrl.ts";
import { ArtObject } from "../../types/collectionResponse";

interface ArtTileProps {
    artObject: ArtObject;
}
export const ArtTile: FC<ArtTileProps> = ({ artObject }) => {
    const { mutate: toggleFavorite, isLoading } = useToggleFavoriteMutation(artObject.id);
    const { data: isFavorite } = useFavoriteQuery(artObject.id);

    return (
        <div className="artTile">
            <img className="artTile_thumbnail" src={getThumbnailUrl(artObject.webImage.url)} alt="" />

            <div className="artTile_overlay">
                <div className="artTile_overlay_details">
                    <strong>{artObject.title}</strong>
                    <br />
                    <small>{artObject.principalOrFirstMaker}</small>
                </div>

                <div className="artTile_overlay_toggleFavorite">
                    <button className="btn btn-square btn-ghost" onClick={() => toggleFavorite()}>
                        {isFavorite && <StarIcon className="icon" />}
                        {!isFavorite && <StarIconOutline className="icon" />}
                    </button>
                </div>
            </div>
        </div>
    );
};
