import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Cover = styled.View`
  height: 375px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

export const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 30px;
  width: 300px;
`;

export const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 24px;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
