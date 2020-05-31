import styled from 'styled-components';

export const ProjectContainer = styled.div`
    margin: 5rem 0 0;
    padding: 5rem 0;
    width: 100%;
    display: flex;
    color: #3F3D56;

    .project-preview {
        width: 50%;
        padding-right: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            object-fit: contain;
        }
    }

    .project-info {
        padding-left: 5rem;
        width: 50%;
        display: flex;
        flex-direction: column;
        border-left: 1px solid #3F3D56;
    }

`;

export const ProjectTitle = styled.h2`
    font-family: 'Nunito', sans-serif;
    font-size: 4rem;
    font-weight: 900;
    line-height: 5rem;
`;

export const ProjectDescription = styled.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 3.4rem;
    margin: 1rem 0;
`;

export const ProjectHeading = styled.h4`
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 3.4rem;
    margin: 1rem 0;
`;

export const TechStack = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    p {
        width: 45%;
        font-size: 1.6rem;
        line-height: 2.6rem;
        font-weight: 300;
    }
`;

export const ProjectControls = styled.div`
    width: 100%;
    display: flex;
    margin-top: 3rem;
`;

export const ProjectButton = styled.button`
    width: auto;
    background: #3F3D56;
    color: #fafafa;
    padding: 1rem;
    margin: 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.4rem;

    &:hover {
        cursor: pointer;
    }

    a {
        color: #fafafa;
        text-decoration: none;
    }
`;