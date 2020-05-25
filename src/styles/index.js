import styled from 'styled-components';
import { animated } from 'react-spring';

import { H1, Tagline } from './typography';
import { Hero, HeroInfo, Social, SocialIcon, NavContainer, Nav } from './landing';

/* structural components */
export const Container = styled(animated.div)`
    background: ${props => props.bg ? props.bg : `#fafafa`};
    width: 100%;
    height: 100vh;
`;

export const InnerContainer = styled.div`
    width: 80%;
    max-width: 1210px;
    margin: 0 auto;
`;

/* typography */
export { H1, Hero, HeroInfo, Tagline, Social, SocialIcon, NavContainer, Nav };