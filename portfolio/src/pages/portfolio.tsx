import Header from "../components/Header/header";
import HomePage from "../components/HomePage/homePage";
import PortfolioSec from "../components/portfolioSec/portfolioSection";
import { styled } from "styled-components";

const MainStyled = styled.main`
`

function Portfolio() {

    return (
        <>
        <Header/>
        <MainStyled>
        <HomePage/>
        <PortfolioSec/>
        </MainStyled>
        </>
    )
};

export default Portfolio;