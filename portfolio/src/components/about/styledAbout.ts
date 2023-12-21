import { styled } from "styled-components";

const sectionAbout = styled.section`
    height: 100vh;
    text-align: center;
`

const subTitleAbout = styled.h3`    
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #515151;
`

const titleAbout = styled.h2`    
    font-size: 2.5rem;
`

const flexAbout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const contentAbout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1500px;
`

const containerIMG = styled.div`
    
`

const imgAbout = styled.img`
   
`

const descriptionAbout = styled.p`
    text-align: center;
    font-weigth: 400;
    color: #515151;
`

export const StyledAbout = {
    flexAbout,
    contentAbout,
    sectionAbout,
    containerIMG,
    imgAbout,
    subTitleAbout,
    titleAbout,
    descriptionAbout,
}