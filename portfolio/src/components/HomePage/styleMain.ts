import { styled } from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const sectionHome = styled.section`
    height: 100vh;
    background-color: #1f1f21;
`

const flexMain = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    gap: 100px;
`

const imgBox = styled.div`
    height: 500px;
    width: 500px;
    background: #666af6;
    border-radius: 50%;

`

const contentMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const h3Main = styled.h3`
    font-size: 1rem;
    color: #d3d3d3;
    text-align: center;
`

const h2Main = styled.h2`
    font-size: 3rem;
    margin: 10px 0px;
    text-align: center;
    color: white;
`

const h4Main = styled.h4`
    font-size: 1.8rem;
    color: #d3d3d3;
    text-align: center;
`

const buttonsMain = styled.div`
    display: flex;
    justify-content: center;
`

const linksMain = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`

const flexButton = styled.div`
    display: flex;
    gap: 15px;
`

const buttonHome = styled.button`
    padding: 15px 20px;
    outline: 0;
    border: 1.5px solid black;
    border-radius: 50px;
    background: white;
    color: black;
    font-weight: 600;
    &:hover {
        transition: all 0.4s ease; 
        transform: scale(1.05);
        cursor: pointer;
    }
`

const buttonHomeWithBackground = styled(buttonHome)`
    background-color: #666af6;;
    color: white;
    font-weight: 600;
    border: 1.5px solid #515151;
`

const textsMain = styled.div`
`

const spanMain = styled.span`
    font-size: 2rem;
`

const styledIconGitHub = styled(FaGithub)`
    color: #d3d3d3;

    &:hover {
        color: #666af6;
        transition: border-bottom-color 0.8s ease;
        transform: scale(1.05);
    }
`

const styledIconLinkedin = styled(FaLinkedin)`
    color: #d3d3d3;
    &:hover {
        color: #666af6;
        transition: border-bottom-color 0.8s ease;
        transform: scale(1.05);
    }
`

export const styledHome = {
    flexMain,
    imgBox,
    contentMain,
    buttonsMain,
    linksMain,
    textsMain,
    sectionHome,
    h3Main,
    h4Main,
    h2Main,
    flexButton,
    buttonHome,
    spanMain,
    buttonHomeWithBackground,
    styledIconGitHub,
    styledIconLinkedin,
};