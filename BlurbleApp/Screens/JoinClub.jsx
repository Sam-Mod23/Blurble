import React, { useState } from "react";
import { ScrollView, Button, View, Image } from "react-native";
import { Card, Text } from "react-native-elements";

const JoinClubScreen = (props) => {
  const { navigation } = props;
  const [join, setJoin] = useState(false);
  const [button, setButton] = useState("Join Club");

  if (props.route.params.pages === undefined) {
    props.route.params.pages = 1000;
  }

  console.log(props.route.params.pages);
  return (
    <ScrollView>
      <Card>
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <Text
            h3
            style={{
              textAlign: "center",
              flex: 5,
              alignSelf: "center",
            }}
          >
            {props.route.params.title}
          </Text>
          <Image
            style={{
              height: 80,
              resizeMode: "stretch",
              alignSelf: "center",
              flex: 1,
            }}
            source={{
              uri: props.route.params.thumbnail,
            }}
          />
        </View>
        <Text>{props.route.params.about}</Text>
        <Button
          disabled={join}
          title={button}
          color="#58B09C"
          onPress={() => {
            setJoin(true);
            setButton("Joined!");
            navigation.navigate("UserClub", {
              title: props.route.params.title,
              thumbnail: props.route.params.thumbnail,
              pages: props.route.params.pages,
            });
          }}
        />
      </Card>
    </ScrollView>
  );
};
export default JoinClubScreen;
