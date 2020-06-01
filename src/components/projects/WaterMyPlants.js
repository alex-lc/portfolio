import React from 'react';

/* styles */
import { Container, InnerContainer, ProjectContainer, ProjectTitle, ProjectDescription, ProjectHeading, TechStack, ProjectControls, ProjectButton } from '../../styles';

/* assets */
import WMPPreview from '../../assets/PreviewWMP.png';

export default function WaterMyPlants() {
    return (
        <Container bg="#cccccc">
            <InnerContainer>
                <ProjectContainer topMargin="0">
                    <div className="project-preview">
                        <img src={WMPPreview} alt="Water My Plants" />
                    </div>

                    <div className="project-info">
                        <ProjectTitle>Water My Plants</ProjectTitle>
                        <ProjectDescription>
                            Water My Plants is a Lambda School build week project that serves as a tool to easily keep track 
                            of your plants so that you don't forget to keep them hydrated.
                        </ProjectDescription>

                        <ProjectDescription>
                            For this particular project, I served as the sole frontend developer, in charge of authentication and global state management.
                        </ProjectDescription>

                        <ProjectHeading>Tech Stack</ProjectHeading>
                        <TechStack>
                            <p>React.js</p>
                            <p>Context API</p>
                            <p>styled-components</p>
                            <p>react-router-dom</p>
                        </TechStack>

                        <ProjectControls>
                            <ProjectButton><a target="_blank" rel="noopener noreferrer" href="https://github.com/Build-Week-WEB28-Water-My-Plants/frontend">GitHub</a></ProjectButton>
                            <ProjectButton><a target="_blank" rel="noopener noreferrer" href="https://plantwise.netlify.app/">Live Preview</a></ProjectButton>
                        </ProjectControls>
                    </div>
                </ProjectContainer>
            </InnerContainer>
        </Container>
    )
}
