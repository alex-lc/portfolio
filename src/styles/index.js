import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
    background: ${props => props.bg ? props.bg : `#fafafa`};
    width: 100%;
    height: 100vh;
`;