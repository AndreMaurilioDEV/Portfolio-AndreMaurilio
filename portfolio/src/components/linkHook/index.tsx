import { ReactNode } from "react";

type LinkHookProps = {
    url: string;
    children: ReactNode;
    targetLink?: string
}

function LinkHook ({url, children, targetLink}: LinkHookProps) {
    return (
        <a href={url} target={targetLink}>{children}</a>
    )
};

export default LinkHook;