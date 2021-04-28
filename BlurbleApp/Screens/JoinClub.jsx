import React, { useState } from "react";
import { ScrollView, Button, View, Image } from "react-native";
import { Card, Text } from "react-native-elements";
import userContext from "../userContext";

const JoinClubScreen = (props) => {
  const { navigation } = props;
  const [join, setJoin] = useState(false);
  const [button, setButton] = useState("Join Club");
  const { clubID } = props.route.params;

  const userID = userContext._currentValue._id;

  if (props.route.params.pages === undefined) {
    props.route.params.pages = 1000;
  }

  const patchClub = () => {
    fetch(`https://blurble-project.herokuapp.com/api/clubs/_id=${clubID}`),
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({ addMember: userID }),
      };
  };

  const patchUser = () => {};

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
            patchClub();
            navigation.navigate("UserClub", {
              title: props.route.params.title,
              thumbnail: props.route.params.thumbnail,
              pages: props.route.params.pages,
              clubID: clubID,
            });
          }}
        />
      </Card>
    </ScrollView>
  );
};
export default JoinClubScreen;
