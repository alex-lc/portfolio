import React from 'react';

/* assets */
import SFDPreview from '../../assets/PreviewSFD.PNG';

/* styles */
import { Container, InnerContainer, ProjectContainer, ProjectTitle, ProjectDescription, ProjectHeading, TechStack, ProjectControls, ProjectButton } from '../../styles';

export default function SafeFurDogs() {
    return (
        <Container bg="#bfffe9" topMargin="5rem">
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

                        <ProjectControls>
                            <ProjectButton><a target="_blank" rel="noopener noreferrer" href="https://github.com/sq-int/safe-fur-dogs">Frontend GitHub</a></ProjectButton>
                            <ProjectButton><a target="_blank" rel="noopener noreferrer" href="https://github.com/sq-int/safe-fur-dogs-be">Backend GitHub</a></ProjectButton>
                            <ProjectButton><a target="_blank" rel="noopener noreferrer" href="https://safefurdogs.com">Visit Site</a></ProjectButton>
                        </ProjectControls>
                    </div>
                </ProjectContainer>
            </InnerContainer>
        </Container>
    )
}
