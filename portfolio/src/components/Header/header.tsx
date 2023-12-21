import { StyledHeader } from "./styleHeader";
import LinkHook from "../linkHook";

function Header() {
    return (
        <>
            <StyledHeader.Header>
                <StyledHeader.FlexHeader>
                    <StyledHeader.LogoHeader>
                        <StyledHeader.TitleHeader>André Maurilio</StyledHeader.TitleHeader>
                    </StyledHeader.LogoHeader>
                    <StyledHeader.NavHeader>
                        <StyledHeader.UL>
                            <StyledHeader.LI><LinkHook url="#">Ínicio</LinkHook></StyledHeader.LI>
                            <StyledHeader.LI><LinkHook url="#">Sobre</LinkHook></StyledHeader.LI>
                            <StyledHeader.LI><LinkHook url="#">Especialidades</LinkHook></StyledHeader.LI>
                            <StyledHeader.LI><LinkHook url="#">Projetos</LinkHook></StyledHeader.LI>
                            <StyledHeader.LI><LinkHook url="#">Contato</LinkHook></StyledHeader.LI>
                        </StyledHeader.UL>
                    </StyledHeader.NavHeader>
                </StyledHeader.FlexHeader>
            </StyledHeader.Header>
        </>
    )
};

export default Header;