import React, { useRef, useEffect } from "react";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { items } from "./data";
import { CLOSE_MENU } from "../../constants";
import MenuItem from "../MenuItem";
import {
  Container,
  Cover,
  Image,
  Title,
  Subtitle,
  CloseView,
  Content,
} from "./styles";

interface Props {
  action: string;
  closeMenu: any;
}

const mapStateToProps = (state: { action: string }) => {
  return {
    action: state.action,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeMenu: () =>
      dispatch({
        type: CLOSE_MENU,
      }),
  };
};

const SCREEN_HEIGHT = Dimensions.get("window").height;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Menu = ({ action, closeMenu }: Props) => {
  const top = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const mounted = useRef<boolean | undefined>();

  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      mounted.current = true;
      toggleMenu();
    } else {
      // do componentDidUpdate logic
      toggleMenu();
    }
  });

  const toggleMenu = () => {
    if (action === "openMenu") {
      Animated.spring(top, {
        toValue: 54,
        useNativeDriver: false,
      }).start();
    }

    if (action === "closeMenu") {
      Animated.spring(top, {
        toValue: SCREEN_HEIGHT,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <AnimatedContainer style={{ top }}>
      <Cover>
        <Image source={require("../../assets/background2.jpg")} />
        <Title>Kuda Mupeni</Title>
        <Subtitle>Developer at SovTech</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={closeMenu}
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>
      <Content screenHeight={SCREEN_HEIGHT}>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Content>
    </AnimatedContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
