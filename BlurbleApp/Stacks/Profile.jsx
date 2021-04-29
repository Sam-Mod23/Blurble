import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, Alert } from "react-native";

import { ProfileScreen, LoginScreen, SignUpScreen } from "../Screens";

const ProfileStack = createStackNavigator();

const headerOptions = {
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: "#2F2F2F",
  },
  headerTintColor: "#EDEDF4",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  // headerRight: () => (
  //   <Button
  //     onPress={() =>
  //       Alert.alert("Logout?", "Do you wish to log out?", [
  //         {
  //           text: "Logout",
  //           onPress: () => "LoginScreen",
  //           style: "destructive",
  //         },
  //         {
  //           text: "Cancel",
  //           onPress: () => console.log("cancel pressed"),
  //           style: "cancel",
  //         },
  //       ])
  //     }
  //     title="Logout"
  //     color="#EDEDF4"
  //   />
  // ),
};

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          ...headerOptions,
        }}
      />
      <ProfileStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
          ...headerOptions,
        }}
      />
      <ProfileStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: "Sign-Up",
          ...headerOptions,
        }}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;
