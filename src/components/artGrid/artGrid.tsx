import { FC } from "react";
import "./artGrid.scss";
import { useCollectionQuery } from "../../lib/queries/useCollectionQuery.ts";
import { ArtTile } from "./artTile.tsx";
interface ArtGridProps {}
export const ArtGrid: FC<ArtGridProps> = ({}) => {
    const { data: collectionData, isLoading } = useCollectionQuery();
    console.log(collectionData);
    return (
        <div className="artGrid">
            {collectionData &&
                collectionData.artObjects.map((artObject) => <ArtTile artObject={artObject} key={artObject.id} />)}
        </div>
    );
};
