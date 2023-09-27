import { FC } from "react";
import { useTitle } from "react-use";
import { ArtGrid } from "../artGrid/artGrid.tsx";
import { DefaultLayout } from "../layouts/defaultLayout.tsx";

interface HomeProps {}
export const Home: FC<HomeProps> = () => {
    useTitle("Artgrid");

    return (
        <DefaultLayout>
            {/*Todo: Search / filtering*/}
            <ArtGrid />
        </DefaultLayout>
    );
};
