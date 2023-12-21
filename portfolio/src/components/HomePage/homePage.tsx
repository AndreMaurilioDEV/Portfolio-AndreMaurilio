import { styledHome } from "./styleMain";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import LinkHook from "../linkHook";

function HomePage () {
    return (
        <>
        <styledHome.sectionHome>
            <styledHome.flexMain>

                <styledHome.imgBox>
                </styledHome.imgBox>
                
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
                            <LinkHook 
                                url="https://www.linkedin.com/in/andremaurilio/" 
                                targetLink="_blank">
                                <FaLinkedin />
                            </LinkHook>
                        </styledHome.spanMain>

                        <styledHome.spanMain>

                            <LinkHook 
                                url="https://github.com/AndreMaurilioDEV" 
                                targetLink="_blank">
                                <FaGithub />
                            </LinkHook>
                        </styledHome.spanMain>

                    </styledHome.linksMain>

                </styledHome.contentMain>
            </styledHome.flexMain>
        </styledHome.sectionHome>
        </>
    )
}

export default HomePage;