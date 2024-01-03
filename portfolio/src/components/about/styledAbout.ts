import { styled } from "styled-components";

const sectionAbout = styled.section`
    height: 100vh;
    text-align: center;
    background: black;
    padding-top: 110px;
`

const subTitleAbout = styled.h3`    
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #d9d9d9;
`

const titleAbout = styled.h2`    
    font-size: 2.5rem;
    color: #666af6;
`

const containerAbout = styled.div`
  margin: 0 auto;
`

const contentAbout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    gap: 50px;
    width: 1500px;
    
`

const containerIMG = styled.div`
    
`

const imgAbout = styled.img`
   
`

const descriptionAbout = styled.p`
    font-weigth: 400;
    color: #d9d9d9;
`

const containerDescription = styled.div `
    display: flex;
    align-items: center;
`

export const StyledAbout = {
    containerAbout,
    contentAbout,
    sectionAbout,
    containerIMG,
    imgAbout,
    subTitleAbout,
    titleAbout,
    descriptionAbout,
    containerDescription,
}