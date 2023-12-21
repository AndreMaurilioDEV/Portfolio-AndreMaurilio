import { styled } from "styled-components";

const Header = styled.header`
    height: 100px;
    //background: #f5f5f5;
`

const FlexHeader = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const LogoHeader = styled.div`
`
const TitleHeader = styled.h1`
    font-size: 2.1rem;
    font-weight: 400;
`

const NavHeader = styled.div`

`

const UL = styled.ul`
    display: flex;
    gap: 35px;
`

const LI = styled.li`
    list-style-type: none;
    font-size: 1.4rem;
    padding: 20px 0px;
    border-bottom: 3px solid transparent;

    &:hover {
        border-bottom: 3px solid #515151;
        transition: border-bottom-color 0.8s ease;
    }
`

export const StyledHeader = {
    Header,
    FlexHeader,
    LogoHeader,
    NavHeader,
    UL,
    LI,
    TitleHeader
};