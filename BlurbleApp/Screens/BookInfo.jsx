import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Card } from "react-native-elements";
import userContext from "../userContext";

function BookInfoScreen(props) {
  [hasBeenPressed, setHasBeenPressed] = useState(false);
  [nominate, setNominate] = useState("Nominate");
  const { item, clubID } = props.route.params;
  const user = userContext._currentValue._id;

  if (item.volumeInfo.imageLinks === undefined) {
    item.volumeInfo.imageLinks = {
      thumbnail:
        "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png",
    };
  }

  if (item.volumeInfo.title === undefined) {
    item.volumeInfo.title = "Untitled";
  }

  if (item.volumeInfo.authors === undefined) {
    item.volumeInfo.authors = ["~"];
  }

  if (item.volumeInfo.publishedDate === undefined) {
    item.volumeInfo.publishedDate = "~";
  }

  if (item.volumeInfo.description === undefined) {
    item.volumeInfo.description = "No Description.";
  }

  const sendSubmission = () => {
    fetch(`https://blurble-project.herokuapp.com/api/clubs/_id=${clubID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ selfLink: item.selfLink }),
    });

    fetch(`https://blurble-project.herokuapp.com/api/users/_id=${user}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ blurblesInc: 74 }),
    });
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Card>
          <Card.Title>{item.volumeInfo.title}</Card.Title>
          <Card.Divider />
          <Text style={{ textAlign: "center" }}>
            {item.volumeInfo.authors.join(", ")}
          </Text>
          <Image
            style={{
              width: 150,
              height: 250,
              resizeMode: "stretch",
              alignSelf: "center",
            }}
            source={{
              uri: item.volumeInfo.imageLinks.thumbnail,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text style={{ textAlign: "center" }}>
            {item.volumeInfo.publishedDate}
          </Text>
          <Card.Divider style={{ margin: 15 }} />
          <Text>{item.volumeInfo.description}</Text>

          <Button
            onPress={() =>
              Alert.alert(
                `Submit ${item.volumeInfo.title} as next Month's book?`,
                "",
                [
                  {
                    text: "Submit",
                    onPress: () => {
                      setNominate("Book Nominated!");
                      setHasBeenPressed(true);
                      sendSubmission();
                    },
                    style: "cancel",
                  },
                  {
                    text: "Cancel",
                  },
                ]
              )
            }
            title={nominate}
            color={"#58B09C"}
            disabled={hasBeenPressed}
          />
        </Card>
      </View>
    </ScrollView>
  );
}
export default BookInfoScreen;
