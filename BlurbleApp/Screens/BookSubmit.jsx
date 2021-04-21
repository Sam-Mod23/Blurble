import * as React from "react";
import { Button, Text, View } from "react-native";

function BookSubmitScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Nomination Screen</Text>
      <Button
        title="Book Info"
        onPress={() => navigation.navigate("BookInfo")}
      />
    </View>
  );
}
export default BookSubmitScreen;
