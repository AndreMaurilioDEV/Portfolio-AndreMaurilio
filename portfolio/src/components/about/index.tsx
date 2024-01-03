import imgPortfolio from './assetAbout/img-portfolio.png';
import { StyledAbout } from './styledAbout';

function About() {
    return (
        <>
        <StyledAbout.sectionAbout id='about'>
            <StyledAbout.containerAbout>
            <StyledAbout.subTitleAbout>Saiba um pouco mais</StyledAbout.subTitleAbout>
            <StyledAbout.titleAbout>Sobre Mim</StyledAbout.titleAbout>
            <StyledAbout.contentAbout>
        <StyledAbout.containerIMG>
            <StyledAbout.imgAbout src={imgPortfolio} alt="" />
        </StyledAbout.containerIMG>
        <StyledAbout.containerDescription>
        <StyledAbout.descriptionAbout>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi hic, voluptatum earum nobis non ducimus? Ex culpa dolor sunt esse odio cum saepe iure ad maiores qui, quae mollitia accusamus amet officia vero dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi hic, voluptatum earum nobis non ducimus? Ex culpa dolor sunt esse odio cum saepe iure ad maiores qui, quae mollitia accusamus amet officia vero dolorum.
        </StyledAbout.descriptionAbout>
        </StyledAbout.containerDescription>
            </StyledAbout.contentAbout>
            </StyledAbout.containerAbout>
        </StyledAbout.sectionAbout>
        </>
    )
};

export default About;