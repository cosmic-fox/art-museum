import { useIntersection } from "react-use";
import { FC, Fragment, useRef } from "react";
import { useCollectionQuery } from "../../lib/queries/useCollectionQuery.ts";
import "./artGrid.scss";
import { ArtTile } from "./artTile.tsx";

interface ArtGridProps {}
export const ArtGrid: FC<ArtGridProps> = ({}) => {
    const { data, isLoading, isFetching, hasNextPage, fetchNextPage } = useCollectionQuery();

    // Todo: custom hook
    const loadMoreIntersector = useRef(null);
    const intersection = useIntersection(loadMoreIntersector, { root: null });

    if (!isLoading && intersection?.isIntersecting && hasNextPage && !isLoading && !isFetching) {
        fetchNextPage().catch((err) => console.log(err));
    }

    return (
        <>
            <div className="artGrid">
                {data?.pages?.map((page, i) => (
                    <Fragment key={i}>
                        {page.artObjects.map((artObject, j) => (
                            <ArtTile fadeInDelayMs={j * 20} artObject={artObject} key={artObject.id} />
                        ))}
                    </Fragment>
                ))}
            </div>

            <div className="artGrid_loadingIndicator" ref={loadMoreIntersector}>
                {(isLoading || isFetching) && <span className="loading loading-spinner loading-lg text-white"></span>}
            </div>
        </>
    );
};
