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

    @media (max-width: 950px) {
        width: 60%;
    }

    @media (max-width: 600px) {
        width: 70%;
    }

    @media (max-width: 530px) {
        width: 80%;
    }

    @media (max-width: 460px) {
        width: 90%;
    }

    a { 
        color: #000000;
        text-decoration: none;
        padding-bottom: 0.5rem;

        &:hover {
            transition: border 300ms;
            border-bottom: 3px solid #3F3D56;
        }
    }

    .active {
        border-bottom: 3px solid #3F3D56;
    }
`;

export const Hero = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 850px) {
        flex-direction: column;
    }

    div.hero-svg {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 850px) {
            flex-direction: column;
            width: 100%;
        }

        img {
            width: 100%;
            object-fit: contain;
            height: 50rem;

            @media (max-width: 850px) {
                height: 35rem;
                padding-bottom: 3rem;
            }
        }
    }
`;

export const HeroInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 850px) {
        width: 100%;
    }
`;

export const Social = styled.div`
    margin-top: 2rem;
    width: 60%;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 1030px) {
        width: 70%;
    }

    @media (max-width: 870px) {
        width: 80%;
    }

    @media (max-width: 850px) {
        width: 50%;
        margin-bottom: 2rem;
    }

    @media (max-width: 540px) {
        width: 70%;
    }

    @media (max-width: 388px) {
        width: 80%;
    }
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

        @media (max-width: 850px) {
            height: 4.5rem;
        }
    }
`;