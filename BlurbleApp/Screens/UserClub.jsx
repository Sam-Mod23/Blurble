import * as React from "react";
import { Text, View, Button } from "react-native";

const UserClubScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>xyz Book Club</Text>
      <Button
        title="Comments"
        onPress={() => navigation.navigate("Comments")}
      />
      <Button title="Vote" onPress={() => navigation.navigate("Votes")} />
      <Button
        title="Nominate"
        onPress={() => navigation.navigate("BookSubmit")}
      />
    </View>
  );
};

export default UserClubScreen;
