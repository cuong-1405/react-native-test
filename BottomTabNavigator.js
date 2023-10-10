import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import MeScreen from "./MeScreen";
import MessagesScreen from "./MessagesScreen";
import MyNetworkScreen from "./MyNetworkScreen";
import SearchScreen from "./SearchScreen";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons from the library

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Me") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Messages") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          } else if (route.name === "My Network") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          }

          // You can customize the icon's appearance here
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato", // Color when tab is active
        inactiveTintColor: "gray", // Color when tab is inactive
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Me" component={MeScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="My Network" component={MyNetworkScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
