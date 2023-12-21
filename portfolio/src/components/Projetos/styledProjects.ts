import { styled } from "styled-components";

const sectionProjetos = styled.section`
    text-align: center;
    height: 92vh;
    margin-top: 100px;
`

const flexContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
`

const sectionContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    flex-direction: column;
`

const card = styled.article`
    height: 520px;
    width: 400px;
    border-radius: 25px;
    border: 1px solid #515151
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
`

const buttonProject = styled.button`
    background-color: white;
    border-radius: 30px;
    border: 1px solid #515151;
    outline: 0;
    padding: 15px 20px;
    font-weight: 500;
`

export const styledProjetos = {
    flexContainer,
    card,
    divIMG,
    flexContentCard,
    linkContainer,
    sectionProjetos,
    sectionContainer,
    titleProject,
    buttonProject
}