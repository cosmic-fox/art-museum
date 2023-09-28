import { RefObject } from "react";
import { useIntersection } from "react-use";

/**
 * Returns true if the given element is in the viewport
 * @param element The element to check
 */
export const useInViewport = (element: RefObject<HTMLElement>) => {
    const intersection = useIntersection(element, { root: null });

    return intersection?.isIntersecting ?? false;
};
