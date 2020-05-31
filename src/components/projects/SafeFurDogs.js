import React from 'react';

/* assets */
import SFDPreview from '../../assets/PreviewSFD.PNG';

/* styles */
import { Container, InnerContainer, ProjectContainer, ProjectTitle, ProjectDescription, ProjectHeading, TechStack } from '../../styles';

export default function SafeFurDogs() {
    return (
        <Container bg="#bfffe9">
            <InnerContainer>
                <ProjectContainer>
                    <div className="project-preview">
                        <img src={SFDPreview} alt="Safe Fur Dogs" />
                    </div>

                    <div className="project-info">
                        <ProjectTitle>Safe Fur Dogs</ProjectTitle>
                        <ProjectDescription>
                            Avoid scrolling through endless amounts of articles, and quickly find out
                            if a particular food is safe or not for dogs to eat.
                        </ProjectDescription>

                        <ProjectHeading>Tech Stack</ProjectHeading>
                        <TechStack>
                            <p>React.js</p>
                            <p>Redux</p>
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>Nginx</p>
                            <p>PostgreSQL</p>
                            <p>styled-components</p>
                            <p>react-router-dom</p>
                            <p>react-hook-form</p>
                        </TechStack>
                    </div>
                </ProjectContainer>
            </InnerContainer>
        </Container>
    )
}
