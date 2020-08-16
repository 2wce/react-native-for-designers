import React from "react";
import { Container, Image, Text } from "./styles";

interface LogoProps {
  image: any;
  text: string;
}

const Logo = ({ image, text }: LogoProps) => {
  return (
    <Container>
      <Image source={image} resizeMode="contain" />
      <Text>{text}</Text>
    </Container>
  );
};

export default Logo;
