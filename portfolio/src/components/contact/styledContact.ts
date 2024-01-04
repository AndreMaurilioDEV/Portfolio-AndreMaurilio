import { styled } from "styled-components";
import { MdEmail } from "react-icons/md";


const sectionContact = styled.section`
    height: calc(80vh - 100px);
    background-color: #1f1f21;
    text-align: center;
`
const containerContact = styled.div`
    margin: 0 auto;
    height: 100%;
`

const flexContact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const contentContact = styled.div`
`

const topContent_Contact = styled.div`
`

const containerContact_Links = styled.div`
    margin-top: 50px;
    border: 1px solid #515151;
    border-radius: 50px;
    padding: 25px 50px;
`

const contact_Links = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

const iconEmail = styled(MdEmail) `
    display: flex;
    font-size: 1.7rem;
    color: #666af6;
`

const divEmail_Linkedin = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const titleLink = styled.p`
    font-size: 1.7rem;
    color: white;
`


const subTitleContact = styled.h3`    
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #d9d9d9;
`

const titleContact = styled.h2`    
    font-size: 3rem;
    color: #666af6;
    margin-bottom: 10px;
`

const footerNav = styled.footer`
    height: 20vh;
    background-color: black;
`

const styledContact = {
    sectionContact,
    containerContact,
    flexContact,
    contentContact,
    topContent_Contact,
    containerContact_Links,
    contact_Links,
    iconEmail,
    divEmail_Linkedin,
    titleLink,
    subTitleContact,
    titleContact,
    footerNav,
};

export default styledContact;