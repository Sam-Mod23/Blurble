import * as React from "react";
import { userContext } from "./userContext";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  HomeStackScreen,
  ProfileStackScreen,
  ClubSearchStackScreen,
} from "./Stacks";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Clubs") {
              iconName = focused ? "library" : "library-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#c97064",
          inactiveTintColor: "#EDEDF4",
          showLabel: false,
          style: { backgroundColor: "#2f2f2f" },
        }}
      >
        <Tab.Screen name="Clubs" component={ClubSearchStackScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
