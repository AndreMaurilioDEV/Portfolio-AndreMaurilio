import { styled } from "styled-components";

const Header = styled.header`
    height: 100px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: black;
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
    font-weight: 800;
    color: #666af6;
`

const NavHeader = styled.div`

`

const spanHeader = styled.span`
    color: white;
    font-weight: 400;
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
        color: white;
    }

    a {
        color: #d9d9d9;
        text-decoration: none;
        &:hover {
          color: #666af6;
        }
      }
`

export const StyledHeader = {
    Header,
    FlexHeader,
    LogoHeader,
    NavHeader,
    UL,
    LI,
    TitleHeader,
    spanHeader,
};