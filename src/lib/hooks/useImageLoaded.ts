import { useRef, useState } from "react";

/**
 * Returns true when the image has been loaded
 * @param src The image source
 */
export const useImageLoaded = (src: string) => {
    const [loaded, setLoaded] = useState(false);
    const img = useRef(new Image());
    img.current.onload = () => setLoaded(true);
    img.current.src = src;
    return loaded;
};
