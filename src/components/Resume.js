import React from 'react';
import { useSpring } from 'react-spring';

/* styles */
import { Container, InnerContainer, H2, ResumeContainer, ResumeItem, ResumeHeading, ResumeItemLabel, JobTitle } from '../styles';

/* components */
import Header from './Header';

export default function Resume() {

    /* react-spring */
    const props = useSpring({
        opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -500 }
    });
    
    return (
        <Container style={props}>
            <InnerContainer>
                <Header />

                <H2>Resume 2020</H2>

                <ResumeContainer>
                    <ResumeHeading>Work Experience</ResumeHeading>
                    <ResumeItem>
                        <div className="job">
                            <ResumeItemLabel>Title</ResumeItemLabel>
                            <JobTitle>Lambda School Team Lead</JobTitle>
                        </div>
                        <div className="date">
                            <ResumeItemLabel>Date</ResumeItemLabel>
                            December 2019 - March 2020
                        </div>
                        <div className="description">
                            <ResumeItemLabel>Description</ResumeItemLabel>
                            Description goes here.
                        </div>
                    </ResumeItem>
                </ResumeContainer>
            </InnerContainer>
        </Container>
    )
}
