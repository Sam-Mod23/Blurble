import * as React from "react";
import { Button, Text, View } from "react-native";

const JoinClubScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Single Club Join Screen</Text>
      <Button
        title="Join Club"
        onPress={() => navigation.navigate("UserClub")}
      />
    </View>
  );
};

export default JoinClubScreen;
