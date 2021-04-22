import React from "react";
import { Button, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Go to Book Club"
        onPress={() => navigation.navigate("UserClub")}
      />
    </View>
  );
}
export default HomeScreen;
