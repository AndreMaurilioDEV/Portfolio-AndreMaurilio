import Header from "../components/Header/header";
import HomePage from "../components/HomePage/homePage";
import PortfolioSec from "../components/Projetos";
import About from "../components/about";
import Experience from "../components/experience";
import Contact from "../components/contact";
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
        <Experience/>
        <PortfolioSec/>
        <Contact/>
        </MainStyled>
        </>
    )
};

export default Portfolio;