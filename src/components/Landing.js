import React from 'react';
import { useSpring } from 'react-spring';
import { Link } from 'react-router-dom';

/* styles */
import { Container, InnerContainer, H1, Hero, HeroInfo, Tagline, Social, SocialIcon } from '../styles';

/* assets */
import Computer from '../assets/Computer.svg';
import Github from '../assets/Github.svg';
import Linkedin from '../assets/Linkedin.svg';
import Twitter from '../assets/Twitter.svg';

/* components */
import Header from './Header';

export default function Landing() {

    /* react-spring */
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <Container style={props} bg="#91c5ff" height="110vh">
            <InnerContainer>
                <Header />

                <Hero>
                    <HeroInfo>
                        <H1>Alex Cooter</H1>
                        <Tagline>Full Stack Web Developer</Tagline>
                        <Social>
                            <SocialIcon><a target="_blank" rel="noopener noreferrer" href="https://github.com/alex-lc"><img src={Github} alt="Github" /></a></SocialIcon>
                            <SocialIcon><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexander-cooter/"><img src={Linkedin} alt="Linkedin" /></a></SocialIcon>
                            <SocialIcon><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/alexlcooter"><img src={Twitter} alt="Twitter" /></a></SocialIcon>
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
