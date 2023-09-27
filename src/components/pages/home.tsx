import { FC } from "react";
import { useTitle } from "react-use";
import { ArtGrid } from "../artGrid/artGrid.tsx";
import { FilterBar } from "../filterBar/filterBar.tsx";
import { DefaultLayout } from "../layouts/defaultLayout.tsx";

interface HomeProps {}
export const Home: FC<HomeProps> = () => {
    useTitle("Art Grid");

    return (
        <DefaultLayout>
            <FilterBar />
            <ArtGrid />
        </DefaultLayout>
    );
};
