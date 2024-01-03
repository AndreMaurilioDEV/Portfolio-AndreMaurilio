import { styledProjetos } from "./styledProjects";

function PortfolioSec() {
    return (
        <>
        <styledProjetos.sectionProjetos id='projetos'>
            <styledProjetos.sectionContainer>
            <styledProjetos.topSection>
            <styledProjetos.titleSection>Navegue meus recentes</styledProjetos.titleSection>
            <styledProjetos.descriptionSection>Projetos</styledProjetos.descriptionSection>
            </styledProjetos.topSection>
            <styledProjetos.gridContainer>
                <styledProjetos.card>
                    <styledProjetos.flexContentCard>
                    <styledProjetos.divIMG>
                        <img src="" alt="" />
                    </styledProjetos.divIMG>
                    <div> <styledProjetos.titleProject>Title Portfolio</styledProjetos.titleProject></div>
                    <styledProjetos.linkContainer>
                        <div><styledProjetos.buttonProject>GitHub Link</styledProjetos.buttonProject></div>
                        <div><styledProjetos.buttonProjectBackground>Live Demo</styledProjetos.buttonProjectBackground></div>
                    </styledProjetos.linkContainer>
                    </styledProjetos.flexContentCard>
                </styledProjetos.card>

                <styledProjetos.card>
                    <styledProjetos.flexContentCard>
                    <styledProjetos.divIMG>
                        <img src="" alt="" />
                    </styledProjetos.divIMG>
                    <div> <styledProjetos.titleProject>Title Portfolio</styledProjetos.titleProject></div>
                    <styledProjetos.linkContainer>
                        <div><styledProjetos.buttonProject>GitHub</styledProjetos.buttonProject></div>
                        <div><styledProjetos.buttonProjectBackground>Live Demo</styledProjetos.buttonProjectBackground></div>
                    </styledProjetos.linkContainer>
                    </styledProjetos.flexContentCard>
                </styledProjetos.card>

                <styledProjetos.card>
                    <styledProjetos.flexContentCard>
                    <styledProjetos.divIMG>
                        <img src="" alt="" />
                    </styledProjetos.divIMG>
                    <div> <styledProjetos.titleProject>Title Portfolio</styledProjetos.titleProject></div>
                    <styledProjetos.linkContainer>
                        <div><styledProjetos.buttonProject>GitHub Link</styledProjetos.buttonProject></div>
                        <div><styledProjetos.buttonProjectBackground>Live Demo</styledProjetos.buttonProjectBackground></div>
                    </styledProjetos.linkContainer>
                    </styledProjetos.flexContentCard>
                </styledProjetos.card>

            </styledProjetos.gridContainer>
            </styledProjetos.sectionContainer>
        </styledProjetos.sectionProjetos>
        </>
    )
}

export default PortfolioSec;