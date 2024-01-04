import { motion } from "framer-motion";
import { styledProjetos } from "./styledProjects";

function PortfolioSec() {   

    return (
        <>
        <styledProjetos.sectionProjetos id='projetos'>
            <styledProjetos.sectionContainer>

            <motion.div
            initial={{opacity: 0, x: -300}}
            whileInView={{opacity: 1, x: 1}}
            exit={{opacity: 0, x: -300}}
            transition={{duration: 0.8}}
            >
            <styledProjetos.topSection>
            <styledProjetos.titleSection>Navegue meus recentes</styledProjetos.titleSection>
            <styledProjetos.descriptionSection>Projetos</styledProjetos.descriptionSection>
            </styledProjetos.topSection>
            </motion.div>

            <motion.div
             initial={{opacity: 0, y: 300}}
             whileInView={{opacity: 1, y: 1}}
             exit={{opacity: 0, y: 300}}
             transition={{duration: 0.8}}
            >

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
            </motion.div>
            </styledProjetos.sectionContainer>
        </styledProjetos.sectionProjetos>
        </>
    )
}

export default PortfolioSec;