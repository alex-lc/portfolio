import React from 'react';
import { useSpring } from 'react-spring';

/* styles */
import { Container, InnerContainer, H1, Hero, HeroInfo, Tagline, Social, SocialIcon } from '../styles';

/* assets */
import Computer from '../assets/Computer.svg';
import Github from '../assets/Github.svg';
import Linkedin from '../assets/Linkedin.svg';
import Twitter from '../assets/Twitter.svg';

export default function Landing() {

    /* react-spring */
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    
    return (
        <Container style={props} bg="#91c5ff">
            <InnerContainer>
                <Hero>
                    <HeroInfo>
                        <H1>Alex Cooter</H1>
                        <Tagline>Full Stack Web Developer</Tagline>
                        <Social>
                            <SocialIcon><img src={Github} alt="Github" /></SocialIcon>
                            <SocialIcon><img src={Linkedin} alt="Linkedin" /></SocialIcon>
                            <SocialIcon><img src={Twitter} alt="Twitter" /></SocialIcon>
                        </Social>
                    </HeroInfo>
                    
                    <div className="hero-svg">
                        <img src={Computer} alt="Computer" />
                    </div>
                </Hero>
            </InnerContainer>
        </Container>
    )
}
