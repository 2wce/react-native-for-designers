import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home";
import SectionScreen from "../screens/Section";
import CoursesScreen from "../screens/Courses";
import ProjectsScreen from "../screens/Projects";

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const CoursesStack = createStackNavigator();
const ProjectsStack = createStackNavigator();

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const CoursesStackScreen = () => {
  return (
    <CoursesStack.Navigator>
      <CoursesStack.Screen name="Courses" component={CoursesScreen} />
    </CoursesStack.Navigator>
  );
};

const ProjectsStackScreen = () => {
  return (
    <ProjectsStack.Navigator>
      <ProjectsStack.Screen name="Projects" component={ProjectsScreen} />
    </ProjectsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-home"
              size={26}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CoursesStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-albums"
              size={26}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-folder"
              size={26}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
