import React from "react";
import {
  Container,
  Cover,
  Image,
  Content,
  Logo,
  Wrapper,
  Caption,
  Subtitle,
  Title,
} from "./styles";

interface CardProps {
  image: any;
  title: string;
  logo: any;
  caption: string;
  subtitle: string;
}

const Card = ({ image, title, logo, caption, subtitle }: CardProps) => (
  <Container>
    <Cover>
      <Image source={image} />
      <Title>{title}</Title>
    </Cover>
    <Content>
      <Logo source={logo} />
      <Wrapper>
        <Caption>{caption}</Caption>
        <Subtitle>{subtitle}</Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;
