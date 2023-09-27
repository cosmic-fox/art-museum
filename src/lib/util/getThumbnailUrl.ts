export const getThumbnailUrl = (url: string) => {
    return `http://localhost:3333/${encodeURIComponent(url)}`;
};
