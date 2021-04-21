import * as React from "react";
import { Button, Text, View } from "react-native";

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Name:</Text>
      <Text>Username:</Text>
      <Text>Email:</Text>
      <Text>Location:</Text>
      <Text>DOB:</Text>
    </View>
  );
}

export default ProfileScreen;
