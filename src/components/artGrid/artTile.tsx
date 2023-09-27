import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { FC } from "react";
import { getThumbnailUrl } from "../../lib/util/getThumbnailUrl.ts";
import { ArtObject } from "../../types/collectionResponse";

interface ArtTileProps {
    artObject: ArtObject;
}
export const ArtTile: FC<ArtTileProps> = ({ artObject }) => {
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
                    <button className="btn btn-square btn-ghost">
                        {/*<StarIcon className="icon" />*/}
                        <StarIconOutline className="icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};
