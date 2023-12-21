import { styledProjetos } from "./styledProjects";

function PortfolioSec() {
    return (
        <>
        <styledProjetos.sectionProjetos>
            <div>
            <h3>Navegue meus recentes</h3>
            <h2>Projetos</h2>
            </div>
            <styledProjetos.sectionContainer>
            <styledProjetos.flexContainer>
                <styledProjetos.card>
                    <styledProjetos.flexContentCard>
                    <styledProjetos.divIMG>
                        <img src="" alt="" />
                    </styledProjetos.divIMG>
                    <div> <styledProjetos.titleProject>Title Portfolio</styledProjetos.titleProject></div>
                    <styledProjetos.linkContainer>
                        <div><styledProjetos.buttonProject>GitHub Link</styledProjetos.buttonProject></div>
                        <div><styledProjetos.buttonProject>Live Demo</styledProjetos.buttonProject></div>
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
                        <div><styledProjetos.buttonProject>Live Demo</styledProjetos.buttonProject></div>
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
                        <div><styledProjetos.buttonProject>Live Demo</styledProjetos.buttonProject></div>
                    </styledProjetos.linkContainer>
                    </styledProjetos.flexContentCard>
                </styledProjetos.card>

            </styledProjetos.flexContainer>
            </styledProjetos.sectionContainer>
        </styledProjetos.sectionProjetos>
        </>
    )
}

export default PortfolioSec;