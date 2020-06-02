import styled from 'styled-components';

export const BackgroundSplash = styled.p`
    position: absolute;
    top: -100px;
    font-weight: 900;
    font-size: 38rem;
    margin-top: 15rem;
    opacity: 0.03;
    z-index: -9;
`;

export const SkillContainer = styled.div`
    position: relative;
    overflow: hidden;
    margin: 5rem 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    z-index: 99;
`;

export const Skill = styled.div`
    width: 20%;
    min-width: 20rem;
    margin: 2rem;
    padding: 3rem 1rem;
    border: 1px solid #e6e6e6;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (width: 900px) {
        width: 40%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }

    img {
        width: 80%;
        height: 13rem;
    }

    p {
        font-size: 2rem;
        font-weight: 700;
        line-height: 3.4rem;
        margin: 2rem 0 1rem;
    }
`;

