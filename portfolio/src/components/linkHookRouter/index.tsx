import { ReactNode } from "react";
import { Link } from "react-router-dom";

type LinkHookProps = {
    to: string;
    children: ReactNode;
    targetLink?: string
}

function LinkHookRouter ({to, children, targetLink}: LinkHookProps) {
    return (
        <Link to={to} target={targetLink}>{children}</Link>
    )
};

export default LinkHookRouter;