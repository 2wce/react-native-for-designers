import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Projects = (props: any) => {
  return (
    <Container>
      <Text>Projects Screen</Text>
      <Button title="Close" onPress={() => props.navigation.goBack()} />
    </Container>
  );
};

export default Projects;
