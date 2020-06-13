import styled from 'styled-components';

export const ResumeContainer = styled.div`
    width: 100%;
    height: 50rem;
`;

export const ResumeHeading = styled.h3`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.4rem;
    margin: 1rem 0;
    color: #3F3D56;
`;

export const ResumeItem = styled.div`
    width: 100%;
    margin: 3rem 0 0;
    padding: 2rem;
    border: 1px solid #e6e6e6;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .job {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (max-width: 800px) {
            width: 100%;
        }
    }

    .date {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (max-width: 800px) {
            width: 100%;
        }
    }

    .description {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (max-width: 800px) {
            width: 100%;
        }
    }
`;

export const ResumeItemLabel = styled.h4`
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 2.2rem;

    @media (max-width: 800px) {
        margin-top: 2rem;
    }
`;

export const JobTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.8rem;
    color: #111111;
`;

export const ResumeDate = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: #111111;
`;

export const JobDescription = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: #111111;
`;