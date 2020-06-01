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
    width: 80%;
    padding: 2rem;
    border: 1px solid #e6e6e6;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;

    .job {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .date {
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .description {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const ResumeItemLabel = styled.h4`
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 2.2rem;
`;

export const JobTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.8rem;
    color: #111111;
`;