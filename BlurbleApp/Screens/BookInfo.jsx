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

function BookInfoScreen(props) {
  [pressed, setPressed] = useState(false);
  [nominate, setNominate] = useState("Nominate");
  const { navigation } = props;
  const { item } = props.route.params;

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
    item.volumeInfo.authors = "~";
  }

  if (item.volumeInfo.publishedDate === undefined) {
    item.volumeInfo.publishedDate = "~";
  }

  if (item.volumeInfo.description === undefined) {
    item.volumeInfo.description = "No Description.";
  }
  // const sendSubmission = () => {
  //   fetch("PATCH GROUP NOMINATED BOOKS LIST", {method: "PATCH", body: {
  //     user id: from context,
  //     ISBN: `${item.volumeIfo.industryIdentifiers[0].identifier}
  //   }})
  //  fetch("PATCH USER VOTED STATUS", {method: "PATCH", body: {
  //  club id: from props
  //  voted: true
  //}})
  // }

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
                      console.log(`${item.volumeInfo.title} was nominated`);
                      setNominate("Book Nominated!");
                      setPressed(true);
                      // sendSubmission();
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
            disabled={pressed}
          />
        </Card>
      </View>
    </ScrollView>
  );
}
export default BookInfoScreen;
