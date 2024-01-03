import { styled } from "styled-components";

const sectionProjetos = styled.section`
    height: 100vh;
    background-color: black;
`

const gridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 50px;
`

const sectionContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    flex-direction: column;
    gap: 70px;
`

const card = styled.article`
    height: 520px;
    width: 400px;
    border-radius: 25px;
    border: 1px solid #515151;
    &:hover {
        transition: all 0.8s ease; 
        transform: scale(1.08);
        cursor: pointer;
    }
`

const divIMG = styled.div`
    border-radius: 25px;
    height: 350px;
    width: 320px;
    background-color: gray;
    margin: 20px 0px;
`

const flexContentCard = styled.div`
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
`

const linkContainer = styled.div`
    display: flex;
    justify-content:center;
    gap: 25px;
    margin-top: 25px;
`

const titleProject = styled.h3`
    font-size: 1.7rem;
    color: white;
`

const buttonProject = styled.button`
    background-color: white;
    border-radius: 30px;
    border: 1px solid #515151;
    outline: 0;
    padding: 15px 20px;
    font-weight: 700;
    &:hover {
        transition: all 0.4s ease;
        transform: scale(1.05);
        cursor: pointer;
    }
`

const buttonProjectBackground = styled(buttonProject)`
    background-color: #666af6;
    color: white;
`

const topSection = styled.div`
`

const titleSection = styled.h3`
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #d9d9d9;
`

const descriptionSection = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: #666af6;
`

export const styledProjetos = {
    gridContainer,
    card,
    divIMG,
    flexContentCard,
    linkContainer,
    sectionProjetos,
    sectionContainer,
    titleProject,
    buttonProject,
    topSection,
    titleSection,
    descriptionSection,
    buttonProjectBackground
}