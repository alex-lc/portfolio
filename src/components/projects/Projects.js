import React from "react";
import { useSpring } from "react-spring";

/* styles */
import { Container, InnerContainer, H2, LargeP } from "../../styles";

/* components */
import Header from "../Header";
import SafeFurDogs from "./SafeFurDogs";
import WaterMyPlants from "./WaterMyPlants";

export default function Projects() {
  /* react-spring */
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -500 },
  });

  return (
    <>
      <Container style={props}>
        <InnerContainer>
          <Header />

          <H2>Projects</H2>
          <LargeP>A list of recently completed projects.</LargeP>
        </InnerContainer>
      </Container>

      <SafeFurDogs />
      <WaterMyPlants />
    </>
  );
}
