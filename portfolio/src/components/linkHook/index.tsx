import { ReactNode } from "react";
//import { Link } from "react-router-dom";
import {Link} from 'react-scroll';

type LinkHookProps = {
    to: string;
    spy: boolean;
    smooth: boolean;
    duration: number;
    offset: number;
    children: ReactNode;
    targetLink?: string
}

function LinkHook ({to, spy, smooth, duration, offset,  children, targetLink}: LinkHookProps) {
    return (
        <Link 
        to={to} 
        target={targetLink}
        spy={spy}
        offset={offset}
        smooth={smooth}
        duration={duration}
        >
            {children}
        </Link>
    )
};

export default LinkHook;