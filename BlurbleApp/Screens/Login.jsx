import * as React from "react";
import { Text, View, ScrollView, ActivityIndicator, Image } from "react-native";
import { Input, Button } from "react-native-elements";

import Ionicons from "react-native-vector-icons/Ionicons";

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ paddingHorizontal: 30, paddingTop: 30 }}>
      <Input
        label="Username"
        placeholder="Username..."
        leftIcon={<Ionicons name="person-outline" />}
      />
      <Input
        label="Password"
        placeholder="Password..."
        leftIcon={<Ionicons name="key-outline" />}
        secureTextEntry={true}
      />

      <Button
        style={{ marginTop: 20 }}
        title=" Login"
        icon={<Ionicons name="paper-plane" size={20} color="#C97064" />}
        buttonStyle={{ backgroundColor: "#2F2F2F" }}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
      <Button
        style={{ marginTop: 20, marginBottom: 100 }}
        title=" Sign-Up"
        icon={<Ionicons name="create" size={20} color="#C97064" />}
        buttonStyle={{ backgroundColor: "#2F2F2F" }}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </ScrollView>
  );
};

export default LoginScreen;
