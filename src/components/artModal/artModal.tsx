import { StarIcon as StarIconOutline, XCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import { useImageLoaded } from "../../lib/hooks/useImageLoaded.ts";
import { useToggleFavoriteMutation } from "../../lib/mutations/useToggleFavoriteMutation.ts";
import { useFavoriteQuery } from "../../lib/queries/useFavoriteQuery.ts";
import { getThumbnailUrl } from "../../lib/util/getThumbnailUrl.ts";
import { ArtObject } from "../../types/collectionResponse";
import "./artModal.scss";

interface ArtModalProps {
    artObject: ArtObject;
    onClose: () => void;
}
export const ArtModal: FC<ArtModalProps> = ({ artObject, onClose }) => {
    const imageLoaded = useImageLoaded(artObject.webImage.url);
    const thumbnailUrl = getThumbnailUrl(artObject.webImage.url);

    const { mutate: toggleFavorite } = useToggleFavoriteMutation(artObject.id);
    const { data: isFavorite } = useFavoriteQuery(artObject.id);

    return (
        // Clicking the backdrop closes the modal
        <div className="artModal" onClick={() => onClose()}>
            {/*Stop propagation when anything in the modal is clicked, so it doesn't close the modal*/}
            <div className="artModal_content" onClick={(e) => e.stopPropagation()}>
                <button className="btn btn-square btn-ghost artModal_content_close" onClick={() => onClose()}>
                    <XCircleIcon className="icon icon-lg" />
                </button>

                <div className="artModal_content_art">
                    {!imageLoaded && (
                        <>
                            <div
                                className="artModal_content_art_image"
                                style={{
                                    backgroundImage: `url(${thumbnailUrl})`,
                                }}
                            ></div>
                            <div className="artModal_content_art_loader">
                                <span className="loading loading-spinner loading-lg text-white"></span>
                            </div>
                        </>
                    )}

                    {imageLoaded && (
                        <div
                            className="artModal_content_art_image"
                            style={{
                                backgroundImage: `url(${artObject.webImage.url})`,
                            }}
                        ></div>
                    )}
                </div>
                <div className="artModal_content_details">
                    <h1 className="artModal_content_details_title">{artObject.longTitle}</h1>
                    <h3 className="artModal_content_details_author">{artObject.principalOrFirstMaker}</h3>

                    <div className="grow"></div>

                    {!isFavorite && (
                        <button className="btn btn-outline w-full" onClick={() => toggleFavorite()}>
                            <StarIconOutline className="icon" />
                            Add to favorites
                        </button>
                    )}
                    {isFavorite && (
                        <button className="btn btn-outline w-full" onClick={() => toggleFavorite()}>
                            <StarIcon className="icon" />
                            Remove from favorites
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
