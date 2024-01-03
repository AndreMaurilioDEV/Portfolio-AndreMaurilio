import { styledHome } from "./styleMain";
import LinkHookRouter from "../linkHookRouter";
import { motion } from "framer-motion";

function HomePage () {
    return (
        <>
        <styledHome.sectionHome id='home'>
            <styledHome.flexMain>

                <styledHome.imgBox>
                </styledHome.imgBox>
            
                 <motion.div
                    initial={{opacity: 0, x: -500}}
                    whileInView={{opacity: 1, x: 1}}
                    exit={{opacity: 0, x: -1000}}
                    transition={{duration: 0.5}}
                    >
                <styledHome.contentMain>

                   
                    <styledHome.textsMain>
                        <styledHome.h3Main>Olá, me chamo</styledHome.h3Main>
                        <styledHome.h2Main>André Maurilio</styledHome.h2Main>
                        <styledHome.h4Main>Frontend Developer</styledHome.h4Main>
                    </styledHome.textsMain>
                    

                    <styledHome.buttonsMain>
                        <styledHome.flexButton>
                            <styledHome.buttonHome>Contrate-me</styledHome.buttonHome>
                            <styledHome.buttonHomeWithBackground>Download CV</styledHome.buttonHomeWithBackground>
                        </styledHome.flexButton>
                    </styledHome.buttonsMain>

                    <styledHome.linksMain>
                        <styledHome.spanMain>
                            <LinkHookRouter 
                                to="https://www.linkedin.com/in/andremaurilio/" 
                                targetLink="_blank">
                                <styledHome.styledIconLinkedin />
                            </LinkHookRouter>
                        </styledHome.spanMain>

                        <styledHome.spanMain>

                            <LinkHookRouter 
                                to="https://github.com/AndreMaurilioDEV" 
                                targetLink="_blank">
                                <styledHome.styledIconGitHub />
                            </LinkHookRouter>
                        </styledHome.spanMain>

                    </styledHome.linksMain>

                </styledHome.contentMain>
                </motion.div>
            </styledHome.flexMain>
        </styledHome.sectionHome>
        </>
    )
}

export default HomePage;