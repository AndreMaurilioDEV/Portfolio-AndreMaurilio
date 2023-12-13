import { ReactNode } from "react";

type CustomBustonProps = {
    onClick?: () => void,
    children: ReactNode,
};

function Button ({children, onClick}: CustomBustonProps) {
    return (
        <>
        <button onClick={ onClick }>{children}</button>
        </>
    )
};

export default Button;