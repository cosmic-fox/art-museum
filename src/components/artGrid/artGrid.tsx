import { FC, Fragment, useRef } from "react";
import { useInViewport } from "../../lib/hooks/useInViewport.ts";
import { useCollectionQuery } from "../../lib/queries/useCollectionQuery.ts";
import "./artGrid.scss";
import { ArtTile } from "./artTile.tsx";

interface ArtGridProps {}
export const ArtGrid: FC<ArtGridProps> = ({}) => {
    const { data, isLoading, isFetching, hasNextPage, fetchNextPage } = useCollectionQuery();

    const loadMoreIntersector = useRef(null);
    const loaderInView = useInViewport(loadMoreIntersector);

    if (!isLoading && loaderInView && hasNextPage && !isLoading && !isFetching) {
        fetchNextPage();
    }

    if (!isLoading && !isFetching && !data?.pages[0].count) {
        // Todo: better UI for no results
        return <div>No results</div>;
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
