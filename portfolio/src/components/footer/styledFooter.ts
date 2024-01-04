import { styled } from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const footer = styled.footer`
    height: 20vh;
    background-color: #1f1f21;
`

const footer_Flex = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const footer_Nav = styled.nav`
`

const footer_Ul = styled.ul`
    display: flex;
    gap: 35px;
`

const footer_Li = styled.li`
    list-style-type: none;
    font-size: 1.4rem;
    padding: 20px 0px;
    border-bottom: 3px solid transparent;
    &:hover {
        border-bottom: 3px solid #515151;
        transition: border-bottom-color 0.8s ease;
        color: white;
        cursor: pointer;
    }

    a {
        color: #d9d9d9;
        text-decoration: none;
        &:hover {
        color: #666af6;
        }
    }
`

const iconGitHub = styled(FaGithub)`
    color: #d3d3d3;
    font-size: 2.5rem;
    &:hover {
        color: #666af6;
        transition: border-bottom-color 0.8s ease;
        transform: scale(1.05);
    }
`

const iconLinkedin = styled(FaLinkedin)`
    color: #d3d3d3;
    font-size: 2.5rem;
    &:hover {
        color: #666af6;
        transition: border-bottom-color 0.8s ease;
        transform: scale(1.05);
    }
`

export const styledFooter = {
    footer,
    footer_Flex,
    footer_Nav,
    footer_Ul,
    footer_Li,
    iconGitHub,
    iconLinkedin
}