import { atom } from "jotai";

interface SearchFilters {
    query?: string;
    type?: string;
}

export const filtersAtom = atom<SearchFilters>({
    query: "",
    type: "painting",
});
