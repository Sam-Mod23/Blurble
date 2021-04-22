import React from "react";
import { Button, Text, View } from "react-native";
import userContext from "../userContext";

function HomeScreen(props) {
  const { navigate } = props.navigation;
  return (
    <userContext.Consumer>
      {(value) => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>{value.user.userId}</Text>
          <Button
            title="Go to Book Club"
            onPress={() => navigate("UserClub")}
          />
        </View>
      )}
    </userContext.Consumer>
  );
}
export default HomeScreen;
