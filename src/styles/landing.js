import styled from 'styled-components';

export const Hero = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    div.hero-svg {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            object-fit: contain;
            height: 50rem;
        }
    }
`;

export const HeroInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Social = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const SocialIcon = styled.div`
    width: 30%;

    img {
        width: 100%;
        object-fit: contain;
        transition: all 300ms;

        &:hover {
            transition: opacity 300ms;
            opacity: 0.9;
            cursor: pointer;
        }
    }
`;