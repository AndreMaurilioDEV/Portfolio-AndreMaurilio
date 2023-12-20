import { styledHome } from "./styleMain";

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
                            <styledHome.buttonHome>Download CV</styledHome.buttonHome>
                        </styledHome.flexButton>
                    </styledHome.buttonsMain>
                    <styledHome.linksMain>
                        <span>linkedin</span>
                        <span>github</span>
                    </styledHome.linksMain>
                </styledHome.contentMain>
            </styledHome.flexMain>
        </styledHome.sectionHome>
        </>
    )
}

export default HomePage;