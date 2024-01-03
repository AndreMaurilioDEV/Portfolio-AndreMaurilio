import { StyledHeader } from "./styleHeader";
import LinkHook from "../linkHook";

function Header() {
    return (
        <>
            <StyledHeader.Header>
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
                                to="#"
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
            </StyledHeader.Header>
        </>
    )
};

export default Header;