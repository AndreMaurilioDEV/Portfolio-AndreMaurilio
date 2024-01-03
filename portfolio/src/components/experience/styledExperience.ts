import { styled } from "styled-components";
import { BsFillPatchCheckFill } from "react-icons/bs";

const sectionEspecialidade = styled.section `
    height: calc(100vh - 100px);
    background-color: #1f1f21;
    text-align: center;
    padding-top: 100px;
`

const container = styled.div`
    margin: 0 auto;
    height: 100%;
`

const gridContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1500px;
    height: 100%;
    margin: 0 auto;
    gap: 70px;
    flex-direction: column;
`

const card = styled.article`
    height: 400px;
    width: 100%;
    border: 1px solid #515151;
    border-radius: 50px;
`

const containerCards = styled.div`
    display: flex;
    width: 100%;
    gap: 50px;
`

const titleCard = styled.h2`
    text-align: center;
    color: white;
    font-size: 1.8rem;
    padding-top: 75px;
`

const skillsList = styled.ul`
    display: flex;
    gap: 180px;
`

const skillsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    flex-direction: column;
`

const divSkill = styled.li`
    display: flex;
    gap: 10px;
    margin: 70px 0px;
`

const skills_1 = styled.div`
`

const skillName = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
`

const iconCheck = styled(BsFillPatchCheckFill) `
    color: #666af6;
`
const contentSection = styled.div`
   
`

const subTitleExperience = styled.h3`    
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #d9d9d9;
`

const titleExperience = styled.h2`    
    font-size: 2.5rem;
    color: #666af6;
    margin-bottom: 10px;
`
const styledExperience = {
    sectionEspecialidade,
    container,
    gridContainer,
    card,
    titleCard,
    skillsContainer,
    divSkill,
    skillName,
    skillsList,
    skills_1,
    iconCheck,
    contentSection,
    subTitleExperience,
    titleExperience,
    containerCards
};

export default styledExperience