import styledContact from "./styledContact";
import Footer from "../footer";

function Contact() {
    return (
        <>
        <styledContact.sectionContact  id="contato" >
            <styledContact.containerContact>

                <styledContact.flexContact>

                    <styledContact.contentContact>

                        <styledContact.topContent_Contact>
                        <styledContact.subTitleContact>Entre em contato</styledContact.subTitleContact>
                        <styledContact.titleContact>Contate-me</styledContact.titleContact>
                        </styledContact.topContent_Contact>
                        <styledContact.containerContact_Links>


                        <styledContact.contact_Links>

                            <styledContact.divEmail_Linkedin>
                            <span><styledContact.iconEmail/></span>
                            <styledContact.titleLink>andreandrade1920@gmail.com</styledContact.titleLink>
                            </styledContact.divEmail_Linkedin>

                            <styledContact.divEmail_Linkedin>
                            <span><styledContact.iconEmail/></span>
                            <styledContact.titleLink>Linkedin</styledContact.titleLink>
                            </styledContact.divEmail_Linkedin>
                        </styledContact.contact_Links>

                        </styledContact.containerContact_Links>

                    </styledContact.contentContact>
                </styledContact.flexContact>
            </styledContact.containerContact>
        </styledContact.sectionContact>

        <Footer/>
        </>
    )
};

export default Contact;