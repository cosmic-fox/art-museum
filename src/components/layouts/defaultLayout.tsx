import { FC, PropsWithChildren } from "react";

interface DefaultLayoutProps extends PropsWithChildren {}
export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    return <>{children}</>;
};
