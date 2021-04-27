import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import firebase from "firebase";

const Login = ({ navigation }) => {
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        behavior: "web",
        iosClientId:
          "http://117770532731-8er3166q5hrmlbnlr24li6v01tjhpq3r.apps.googleusercontent.com/",
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        return result.accessToken;
      } else {
        return {
          cancelled: true,
        };
      }
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title={"Sign in with Google"}
        onPress={() => {
          signInWithGoogleAsync();
        }}
      />
    </View>
  );
};

export default Login;
