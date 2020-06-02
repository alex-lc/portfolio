import React from 'react';
import { useSpring } from 'react-spring';

/* styles */
import { Container, InnerContainer, H2, ResumeContainer, ResumeItem, ResumeHeading, ResumeItemLabel, JobTitle, ResumeDate, JobDescription } from '../styles';

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
                            <ResumeDate>Dec. 2019 - Mar. 2020</ResumeDate>
                        </div>
                        <div className="description">
                            <ResumeItemLabel>Description</ResumeItemLabel>
                            <JobDescription>
                                Mentored and guided a team of eight students through previously completed Lambda School curriculum. Facilitated 
                                one on one code reviews and team standups, while serving as the first point of contact related to Lambda School success.
                            </JobDescription>
                        </div>
                    </ResumeItem>

                    <ResumeItem>
                        <div className="job">
                            <ResumeItemLabel>Title</ResumeItemLabel>
                            <JobTitle>Technical Support Assistant</JobTitle>
                        </div>
                        <div className="date">
                            <ResumeItemLabel>Date</ResumeItemLabel>
                            <ResumeDate>Feb. 2016 - Dec. 2018</ResumeDate>
                        </div>
                        <div className="description">
                            <ResumeItemLabel>Description</ResumeItemLabel>
                            <JobDescription>
                                Provided technical support and assistance to all faculty, staff, and classrooms in the School of Human Sciences at Stephen F. 
                                Austin State University, covering five different program areas.
                            </JobDescription>
                        </div>
                    </ResumeItem>
                </ResumeContainer>
            </InnerContainer>
        </Container>
    )
}
