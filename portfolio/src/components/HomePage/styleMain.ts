import { styled } from "styled-components";

const sectionHome = styled.section`
    height: 100vh;
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
    background: gray;
    border-radius: 50%;
`

const contentMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const h3Main = styled.h3`
    font-size: 1rem;
    color: gray;
    text-align: center;
`

const h2Main = styled.h2`
    font-size: 2.8rem;
    margin: 10px 0px;
    text-align: center;
`

const h4Main = styled.h4`
    font-size: 1.8rem;
    color: gray;
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
    background: none;
    color: black;
    font-weight: 500;
`

const textsMain = styled.div`
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
};