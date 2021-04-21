import * as React from "react";
import { Button, Text, View } from "react-native";

function ClubsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Clubs screen</Text>
      <Button
        title="Go to Club"
        onPress={() => navigation.navigate("JoinClub")}
      />
    </View>
  );
}
export default ClubsScreen;
