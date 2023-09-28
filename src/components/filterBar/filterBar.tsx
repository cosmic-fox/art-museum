import { useAtom } from "jotai";
import { FC, useState } from "react";
import { useDebounce } from "react-use";
import { filtersAtom } from "../../lib/atoms/filters.ts";
import { useCollectionQuery } from "../../lib/queries/useCollectionQuery.ts";
import "./filterBar.scss";

interface FilterBarProps {}
export const FilterBar: FC<FilterBarProps> = ({}) => {
    const { data: collectionData } = useCollectionQuery({
        keepPreviousData: true,
    });
    const facets = collectionData?.pages[0]?.facets;

    const [filters, setFilters] = useAtom(filtersAtom);

    // Keep track of query - only update filters when user stops typing for a while
    const [typedQuery, setTypedQuery] = useState("");
    useDebounce(() => setFilters({ ...filters, query: typedQuery }), 500, [typedQuery]);

    return (
        <div className="filterBar">
            <input
                type="text"
                className="input input-bordered input-lg"
                placeholder="Search.."
                value={typedQuery}
                onChange={(e) => setTypedQuery(e.target.value)}
            />
            {facets && (
                <select
                    className="select select-bordered select-lg"
                    value={filters.type}
                    onChange={(e) =>
                        setFilters({
                            ...filters,
                            type: e.target.value,
                        })
                    }
                >
                    <option value="">All</option>
                    {facets
                        .find((f) => f.name === "type")
                        ?.facets.map(({ key, value }) => (
                            <option key={key} value={key}>
                                {key} ({value})
                            </option>
                        ))}
                </select>
            )}
        </div>
    );
};
