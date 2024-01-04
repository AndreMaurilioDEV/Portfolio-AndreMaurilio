import { StyledHeader } from "./styleHeader";
import LinkHook from "../linkHook";
import { motion } from "framer-motion";

function Header() {
    return (
        <>
        <motion.header
        style={{
            height: '100px',
            position: 'fixed',
            top: '0',
            width: '100%',
            backgroundColor: 'black',
            zIndex: '1000',
        }}
        initial={{top: -100}}
        animate={{top: 0}}
        transition={{duration: 0.8}}
        >
                <StyledHeader.FlexHeader>
                    <StyledHeader.LogoHeader>
                        <StyledHeader.TitleHeader> <StyledHeader.spanHeader>André</StyledHeader.spanHeader>Maurilio</StyledHeader.TitleHeader>
                    </StyledHeader.LogoHeader>
                    <StyledHeader.NavHeader>
                        <StyledHeader.UL>

                            <StyledHeader.LI>
                            <LinkHook 
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
                            >Ínicio
                            </LinkHook>
                            </StyledHeader.LI>

                            <StyledHeader.LI>
                            <LinkHook 
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={300}
                            >
                            Sobre
                            </LinkHook>
                            </StyledHeader.LI>

                            <StyledHeader.LI>
                            <LinkHook 
                            to="especialidade"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            >Especialidades
                            </LinkHook>
                            </StyledHeader.LI>

                            <StyledHeader.LI>
                            <LinkHook 
                            to="projetos"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                                >Projetos
                                </LinkHook>
                                </StyledHeader.LI>

                            <StyledHeader.LI>
                                <LinkHook 
                                to="contato"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                >Contato
                                </LinkHook>
                                </StyledHeader.LI>
                        </StyledHeader.UL>
                    </StyledHeader.NavHeader>
                </StyledHeader.FlexHeader>
        </motion.header>
        </>
    )
};

export default Header;