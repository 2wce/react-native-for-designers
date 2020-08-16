import React, { useRef, useEffect } from "react";
import Card from "../../components/Card";
import {
  SafeAreaView,
  ScrollView,
  Animated,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { NotificationIcon } from "../../components/Icons";
import Logo from "../../components/Logo";
import Course from "../../components/Course";
import Menu from "../../components/Menu";
import { Container, TitleBar, Title, Name, Subtitle, RootView } from "./styles";
import { logos, cards, courses } from "./data";
import { OPEN_MENU } from "../../constants";
import { connect } from "react-redux";
import Avatar from "../../components/Avatar";

interface HomeProps {
  openMenu: any;
  action: string;
  name: string;
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const mapStateToProps = (state: { action: string; name: string }) => {
  return {
    action: state.action,
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    openMenu: () =>
      dispatch({
        type: OPEN_MENU,
      }),
  };
};

const Home = ({ action, openMenu, name }: HomeProps) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const mounted = useRef<boolean | undefined>();

  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      mounted.current = true;
      StatusBar.setBarStyle("dark-content", true);
    } else {
      // do componentDidUpdate logic
      toggleMenu();
    }
  });

  const toggleMenu = () => {
    if (action === "openMenu") {
      Animated.spring(scale, {
        toValue: 0.9,
        useNativeDriver: false,
      }).start();

      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (action === "closeMenu") {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  return (
    <RootView>
      <Menu />
      <AnimatedContainer style={{ transform: [{ scale }], opacity }}>
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <TouchableOpacity
                onPress={openMenu}
                style={{ position: "absolute", top: 0, left: 20 }}
              >
                <Avatar />
              </TouchableOpacity>

              <Title>Welcome back,</Title>
              <Name>{name}</Name>
              <NotificationIcon
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>
            <ScrollView
              style={{
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30,
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {logos.map(({ image, text }, index) => {
                return <Logo key={index} image={image} text={text} />;
              })}
            </ScrollView>

            <Subtitle>Continue learning</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map(({ title, image, caption, logo, subtitle }, index) => {
                return (
                  <Card
                    key={index}
                    title={title}
                    image={image}
                    caption={caption}
                    logo={logo}
                    subtitle={subtitle}
                  />
                );
              })}
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
