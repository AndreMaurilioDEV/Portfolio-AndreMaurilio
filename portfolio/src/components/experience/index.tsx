import styledExperience from "./styledExperience";
import { motion } from "framer-motion";

function Experience() {

    const divStyle = {
        width: '100%',
    };

    return (
        <styledExperience.sectionEspecialidade id="especialidade">

            <styledExperience.container>


             <styledExperience.gridContainer>

                 <styledExperience.contentSection>
                    <styledExperience.subTitleExperience>Explore minhas</styledExperience.subTitleExperience>
                    <styledExperience.titleExperience>Especialidades</styledExperience.titleExperience>
                 </styledExperience.contentSection>


                <motion.div style={divStyle}
                initial={{opacity: 0, x: -1000}}
                whileInView={{opacity: 1, x: 1}}
                exit={{opacity: 0, x: -1000}}
                transition={{duration: 0.5}}
                >
                <styledExperience.containerCards>
                <styledExperience.card>
                <styledExperience.skillsContainer>

                <styledExperience.titleCard>Frontend Development</styledExperience.titleCard>
                <styledExperience.skillsList>

                <styledExperience.skills_1>
                <styledExperience.divSkill>
                    <span><styledExperience.iconCheck/></span>
                    <styledExperience.skillName>HTML</styledExperience.skillName>
                </styledExperience.divSkill>  

                    <styledExperience.divSkill>
                    <span><styledExperience.iconCheck/></span>
                    <styledExperience.skillName>CSS</styledExperience.skillName>
                    </styledExperience.divSkill>

                    <styledExperience.divSkill>
                    <span><styledExperience.iconCheck/></span>
                    <styledExperience.skillName>JavaScript</styledExperience.skillName>
                    </styledExperience.divSkill>

                    </styledExperience.skills_1>
                    
                    <styledExperience.skills_1>
                    <styledExperience.divSkill>
                    <span><styledExperience.iconCheck/></span>
                    <styledExperience.skillName>React JS</styledExperience.skillName>
                    </styledExperience.divSkill>

                    <styledExperience.divSkill>
                    <span><styledExperience.iconCheck/></span>
                    <styledExperience.skillName>TypeScript</styledExperience.skillName>
                    </styledExperience.divSkill>
                    </styledExperience.skills_1>
                    
                </styledExperience.skillsList>
                </styledExperience.skillsContainer>

                </styledExperience.card>


                <styledExperience.card>
                <styledExperience.titleCard>Backend Development</styledExperience.titleCard>
                <styledExperience.skillsContainer>

                <styledExperience.divSkill>
                    <span><styledExperience.iconCheck/></span>
                    <p>Git</p>
                </styledExperience.divSkill>  

                </styledExperience.skillsContainer>
                </styledExperience.card>
                </styledExperience.containerCards>
                </motion.div>

              </styledExperience.gridContainer>
            </styledExperience.container>  
        </styledExperience.sectionEspecialidade>
    )
}

export default Experience;