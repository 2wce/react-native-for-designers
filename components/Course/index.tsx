import React from "react";
import { ImageSourcePropType } from "react-native";
import {
  Container,
  Cover,
  Image,
  Logo,
  Title,
  Subtitle,
  Content,
  Avatar,
  Caption,
  Author,
} from "./styles";

interface CourseProps {
  image: ImageSourcePropType;
  logo: ImageSourcePropType;
  subtitle: string;
  title: string;
  avatar: ImageSourcePropType;
  caption: string;
  author: string;
}

const Course = (props: CourseProps) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode="contain" />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Author>Taught by {props.author}</Author>
    </Content>
  </Container>
);

export default Course;
