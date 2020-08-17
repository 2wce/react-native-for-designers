import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Section = (props: any) => {
  return (
    <Container>
      <Text>Section Screen</Text>
      <Button title="Close" onPress={() => props.navigation.goBack()} />
    </Container>
  );
};

export default Section;
