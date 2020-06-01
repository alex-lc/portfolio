import styled from 'styled-components';
import { animated } from 'react-spring';

import { H1, H2, Tagline, LargeP } from './typography';
import { Hero, HeroInfo, Social, SocialIcon, NavContainer, Nav } from './landing';
import { BackgroundSplash, SkillContainer, Skill } from './skills';
import { ProjectContainer, ProjectTitle, ProjectDescription, ProjectHeading, TechStack, ProjectControls, ProjectButton } from './projects';
import { ResumeContainer, ResumeItem, ResumeHeading, ResumeItemLabel, JobTitle } from './resume';

/* structural components */
export const Container = styled(animated.div)`
    background: ${props => props.bg ? props.bg : `none`};
    width: 100%;
    height: ${props => props.height ? props.height : `auto`};
`;

export const InnerContainer = styled.div`
    width: 80%;
    max-width: 1210px;
    margin: 0 auto;
`;

/* export all styles */
export {
    H1, H2, LargeP, Hero, HeroInfo, Tagline, Social, SocialIcon, NavContainer, Nav, BackgroundSplash, SkillContainer, Skill,
    ProjectContainer, ProjectTitle, ProjectDescription, ProjectHeading, TechStack, ProjectButton, ProjectControls,
    ResumeContainer, ResumeItem, ResumeHeading, ResumeItemLabel, JobTitle
};