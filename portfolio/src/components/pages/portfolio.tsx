import Header from "../Header/header";
import HomePage from "../HomePage/homePage";
import Skills from "../Skills/skills";
import PortfolioSec from "../portfolioSec/portfolioSection";
import { styled } from "styled-components";

const MainStyled = styled.main`
`

function Portfolio() {

    return (
        <>
        <Header/>
        <MainStyled>
        <HomePage/>
        <Skills/>
        <PortfolioSec/>
        </MainStyled>
        </>
    )
};

export default Portfolio;