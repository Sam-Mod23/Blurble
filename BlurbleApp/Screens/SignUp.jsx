import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  Alert,
} from "react-native";
import { Input, Button } from "react-native-elements";

import Ionicons from "react-native-vector-icons/Ionicons";

const SignUpScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <ScrollView style={{ paddingHorizontal: 30, paddingTop: 30 }}>
      <Input
        label="Name"
        placeholder="Name..."
        leftIcon={<Ionicons name="person-outline" />}
      />
      <Input
        label="Username"
        placeholder="Username..."
        leftIcon={<Ionicons name="key-outline" />}
      />
      <Input
        label="Email"
        placeholder="email@youremail.com..."
        leftIcon={<Ionicons name="key-outline" />}
      />
      <Input
        label="Date of Birth"
        placeholder="DD/MM/YYYY"
        leftIcon={<Ionicons name="key-outline" />}
      />
      <Input
        label="Create Password"
        placeholder="Password..."
        leftIcon={<Ionicons name="key-outline" />}
        secureTextEntry={true}
        onTextInput={setPassword}
      />
      <Input
        label="Confirm Password"
        placeholder="Password..."
        leftIcon={<Ionicons name="key-outline" />}
        secureTextEntry={true}
        onTextInput={setPassword2}
      />
      <Button
        style={{ marginTop: 20, marginBottom: 100 }}
        title=" Sign-Up"
        icon={<Ionicons name="create" size={20} color="#C97064" />}
        buttonStyle={{ backgroundColor: "#2F2F2F" }}
        onPress={() => {
          if (password === password2) navigation.navigate("Profile");
          else Alert.alert("Passwords must match");
        }}
      />
    </ScrollView>
  );
};

export default SignUpScreen;
