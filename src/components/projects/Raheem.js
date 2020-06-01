import React from 'react';

/* styles */
import { Container, InnerContainer, ProjectContainer, ProjectTitle, ProjectDescription, ProjectHeading, TechStack, ProjectControls, ProjectButton } from '../../styles';

/* assets */
import RaheemPreview from '../../assets/PreviewRaheem.png';

export default function Raheem() {
    return (
        <Container bg="#fff600">
            <InnerContainer>
                <ProjectContainer topMargin="0">
                    <div className="project-preview">
                        <img src={RaheemPreview} alt="Raheem" />
                    </div>

                    <div className="project-info">
                        <ProjectTitle>Raheem</ProjectTitle>
                        <ProjectDescription>
                            Raheem is an independent service that gives a voice to those affected by police brutality in order 
                            to bring change and create safer communities.
                        </ProjectDescription>

                        <ProjectDescription>
                            This project was a build on to Raheem's existing product during Lambda School LABS, that attempted to streamline their report process 
                            and create a dashboard with statistics and readily available information pertaining to reports.
                        </ProjectDescription>

                        <ProjectHeading>Tech Stack</ProjectHeading>
                        <TechStack>
                            <p>React.js</p>
                            <p>Context API</p>
                            <p>Firebase</p>
                            <p>styled-components</p>
                            <p>react-router-dom</p>
                            <p>react-hook-form</p>
                        </TechStack>

                        <ProjectControls>
                            <ProjectButton><a target="_blank" rel="noopener noreferrer" href="https://github.com/Lambda-School-Labs/raheem.org--fe">GitHub</a></ProjectButton>
                            <ProjectButton><a target="_blank" rel="noopener noreferrer" href="https://master.d2qsd1m3f8a69k.amplifyapp.com/">Live Preview</a></ProjectButton>
                        </ProjectControls>
                    </div>
                </ProjectContainer>
            </InnerContainer>
        </Container>
    )
}
