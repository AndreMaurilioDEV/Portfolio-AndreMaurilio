import { styledFooter } from "./styledFooter";
import LinkHookRouter from "../linkHookRouter";

function Footer() {
    return (
        <>
        <styledFooter.footer>
            <styledFooter.footer_Flex>
            <styledFooter.footer_Nav>
                <styledFooter.footer_Ul>
                    <styledFooter.footer_Li>
                    <LinkHookRouter 
                                to="https://www.linkedin.com/in/andremaurilio/" 
                                targetLink="_blank">
                                <styledFooter.iconLinkedin />
                            </LinkHookRouter>
                    </styledFooter.footer_Li>


                    <styledFooter.footer_Li>
                    <LinkHookRouter 
                                to="https://github.com/AndreMaurilioDEV" 
                                targetLink="_blank">
                                <styledFooter.iconGitHub />
                            </LinkHookRouter>
                    </styledFooter.footer_Li>

                </styledFooter.footer_Ul>
            </styledFooter.footer_Nav>
            </styledFooter.footer_Flex>
        </styledFooter.footer>
        </>
    )
};
 
export default Footer;