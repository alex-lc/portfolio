import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring } from 'react-spring';

/* styles */
import { Container, InnerContainer, H2, LargeP, BackgroundSplash, SkillContainer, Skill } from '../styles';

/* components */
import Header from './Header';

/* assets */
import ReactJS from '../assets/React.svg';
import Redux from '../assets/Redux.svg';
import Postgres from '../assets/Postgres.svg';
import Mongodb from '../assets/Mongodb.svg';
import Javascript from '../assets/Javascript.svg';
import Styledcomponents from '../assets/Styledcomponents.svg';
import Scss from '../assets/Scss.svg';
import Github from '../assets/Github.svg';

export default function Skills() {

    /* react-spring */
    const props = useSpring({ 
        opacity: 1, from: { opacity: 0 },
        marginLeft: 0, from: { marginLeft: 500 }
    });

    const [currentSkill, setCurrentSkill] = useState('Skills');

    return (
        <Container style={props}>
            <InnerContainer>
                <Header />

                <BackgroundSplash>{currentSkill}</BackgroundSplash>
                <H2 onMouseEnter={() => setCurrentSkill('Skills')}>Skills</H2>
                <LargeP>Continuous learning and adapting to new technologies in an everchanging tech landscape is essential.</LargeP>

                <SkillContainer>
                    <Skill onMouseEnter={() => setCurrentSkill('React')}>
                        <img src={ReactJS} alt="React.js" />
                        <p>React.js</p>
                    </Skill>
                    <Skill onMouseEnter={() => setCurrentSkill('Redux')}>
                        <img src={Redux} alt="Redux" />
                        <p>Redux</p>
                    </Skill>
                    <Skill onMouseEnter={() => setCurrentSkill('Postgres')}>
                        <img src={Postgres} alt="PostgreSQL" />
                        <p>PostgreSQL</p>
                    </Skill>
                    <Skill onMouseEnter={() => setCurrentSkill('Mongo')}>
                        <img src={Mongodb} alt="MongoDB" />
                        <p>MongoDB</p>
                    </Skill>
                    <Skill onMouseEnter={() => setCurrentSkill('JavaScript')}>
                        <img src={Javascript} alt="JavaScript" />
                        <p>JavaScript</p>
                    </Skill>
                    <Skill onMouseEnter={() => setCurrentSkill('Styled')}>
                        <img src={Styledcomponents} alt="Styled-Components" />
                        <p>Styled</p>
                    </Skill>
                    <Skill onMouseEnter={() => setCurrentSkill('SCSS')}>
                        <img src={Scss} alt="SCSS" />
                        <p>SCSS</p>
                    </Skill>
                    <Skill onMouseEnter={() => setCurrentSkill('GitHub')}>
                        <img src={Github} alt="GitHub" />
                        <p>Git and GitHub</p>
                    </Skill>
                </SkillContainer>
            </InnerContainer>
        </Container>
    )
}
