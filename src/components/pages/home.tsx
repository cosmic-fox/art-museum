import { FC } from "react";
import { useTitle } from "react-use";
import { useCollectionQuery } from "../../lib/queries/useCollectionQuery.ts";
import { DefaultLayout } from "../layouts/defaultLayout.tsx";

interface HomeProps {}
export const Home: FC<HomeProps> = () => {
    const { data: collection, isLoading } = useCollectionQuery();
    useTitle("Todo");

    return (
        <DefaultLayout>
            <div className="container grow flex justify-center items-center">
                <main className="card shadow-2xl shadow-gray-300 bg-white w-96">
                    <div className="card-body">
                        <h2 className="card-title">Todo</h2>
                        {isLoading && "Loading...."}
                        {!isLoading && collection && `${collection.artObjects.length} art objects`}
                    </div>
                </main>
            </div>
        </DefaultLayout>
    );
};
