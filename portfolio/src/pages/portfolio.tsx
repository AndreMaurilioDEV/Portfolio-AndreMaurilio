import Header from "../components/Header/header";
import HomePage from "../components/HomePage/homePage";
import PortfolioSec from "../components/Projetos";
import About from "../components/about";
import { styled } from "styled-components";

const MainStyled = styled.main`
`

function Portfolio() {

    return (
        <>
        <Header/>
        <MainStyled>
        <HomePage/>
        <About />
        <PortfolioSec/>
        </MainStyled>
        </>
    )
};

export default Portfolio;