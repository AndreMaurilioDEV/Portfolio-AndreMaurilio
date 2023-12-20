import { StyledHeader } from "./styleHeader";

function Header() {
    return (
        <>
            <StyledHeader.Header>
                <StyledHeader.FlexHeader>
                    <StyledHeader.LogoHeader>
                        <StyledHeader.TitleHeader>AndréMaurilioDEV</StyledHeader.TitleHeader>
                    </StyledHeader.LogoHeader>
                    <StyledHeader.NavHeader>
                        <StyledHeader.UL>
                            <StyledHeader.LI>Ínicio</StyledHeader.LI>
                            <StyledHeader.LI>Sobre</StyledHeader.LI>
                            <StyledHeader.LI>Especialidades</StyledHeader.LI>
                            <StyledHeader.LI>Projetos</StyledHeader.LI>
                            <StyledHeader.LI>Contato</StyledHeader.LI>
                        </StyledHeader.UL>
                    </StyledHeader.NavHeader>
                </StyledHeader.FlexHeader>
            </StyledHeader.Header>
        </>
    )
};

export default Header;