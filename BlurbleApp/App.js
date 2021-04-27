import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { userContext } from "./userContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  HomeStackScreen,
  ProfileStackScreen,
  ClubSearchStackScreen,
} from "./Stacks";
import { LoginScreen } from "./Screens";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();
const isLoggedIn = false;
const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
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
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
