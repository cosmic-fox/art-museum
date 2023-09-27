import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { FC } from "react";
import { useImageLoaded } from "../../lib/hooks/useImageLoaded.ts";
import { useToggleFavoriteMutation } from "../../lib/mutations/useToggleFavoriteMutation.ts";
import { useFavoriteQuery } from "../../lib/queries/useFavoriteQuery.ts";
import { getThumbnailUrl } from "../../lib/util/getThumbnailUrl.ts";
import { ArtObject } from "../../types/collectionResponse";

interface ArtTileProps {
    artObject: ArtObject;
    fadeInDelayMs?: number;
}
export const ArtTile: FC<ArtTileProps> = ({ artObject, fadeInDelayMs }) => {
    const { mutate: toggleFavorite } = useToggleFavoriteMutation(artObject.id);
    const { data: isFavorite } = useFavoriteQuery(artObject.id);

    const imageUrl = getThumbnailUrl(artObject.webImage.url);
    const imageLoaded = useImageLoaded(imageUrl);

    return (
        <div className="artTile" style={{ animationDelay: `${fadeInDelayMs || 0}ms` }}>
            <img
                className={classNames("artTile_thumbnail", {
                    "artTile_thumbnail--loaded": imageLoaded,
                })}
                src={imageUrl}
                alt={artObject.title}
            />
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
