import styled from "styled-components/native";

export const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-radius: 10px;
`;

export const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

export const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
`;

export const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

export const RootView = styled.View`
  background: black;
  flex: 1;
`;
