import styled from 'styled-components';

export const BackgroundSplash = styled.div`
    position: absolute;
    font-weight: 900;
    font-size: 40rem;
    margin-top: 15rem;
    opacity: 0.05;
`;

export const SkillContainer = styled.div`
    margin-top: 5rem;
    width: 100%;
    height 50rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Skill = styled.div`
    width: 20%;
    margin: 2rem;
    height: 20rem;
    border: 1px solid #f0f0f0;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 80%;
        height: 13rem;
    }
`;

