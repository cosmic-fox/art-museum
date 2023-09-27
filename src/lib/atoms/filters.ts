import { atom } from "jotai";

interface SearchFilters {
    query?: string;
    type?: string;
    material?: string;
}

export const filtersAtom = atom<SearchFilters>({
    query: "",
    type: "",
});
