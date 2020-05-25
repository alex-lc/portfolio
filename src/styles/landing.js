import styled from 'styled-components';

export const NavContainer = styled.div`
    margin-bottom: 5rem;
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Nav = styled.nav`
    width: 40%;
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
    font-weight: 300;

    a { 
        color: #000000;
        text-decoration: none;
        transition: all 300ms;

        &:hover {
            transition: color 300ms;
            color: #3F3D56;
        }
    }
`;

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
    margin-top: 2rem;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
`;

export const SocialIcon = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 7rem;
        object-fit: contain;
        transition: all 300ms;

        &:hover {
            transition: opacity 300ms;
            opacity: 0.9;
            cursor: pointer;
        }
    }
`;