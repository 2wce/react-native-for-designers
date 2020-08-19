import React, { useEffect } from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  CloseView,
  Image,
  Title,
  Caption,
  Container,
  Cover,
  Wrapper,
  Logo,
  Subtitle,
} from "./styles";

const Section = ({ route, navigation }: any) => {
  const { section } = route.params;

  // componentDidMount
  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);

    // componentWillUnmount
    return () => StatusBar.setBarStyle("dark-content", true);
  }, []);

  return (
    <Container>
      <StatusBar hidden />
      <Cover>
        <Image source={section.image} />
        <Wrapper>
          <Logo source={section.logo} />
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>
        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        <CloseView>
          <Ionicons
            name="ios-close"
            size={36}
            color="#4775f2"
            style={{ marginTop: -2 }}
          />
        </CloseView>
      </TouchableOpacity>
    </Container>
  );
};

export default Section;
