import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Button, Input, Slider, Divider, Tooltip } from "react-native-elements";

import Ionicons from "react-native-vector-icons/Ionicons";
import userContext from "../userContext";

function CommentsScreen(props) {
  const [page, setPage] = useState(1);
  const [body, setBody] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState(" Post Comment");
  const { book, clubID } = props.route.params;

  const createComment = () => {
    fetch(
      `https://blurble-project.herokuapp.com/api/comments/club_id=${clubID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          username: userContext._currentValue.username,
          user_id: userContext._currentValue._id,
          body: body,
          book: props.route.params.book,
          progress: page,
        }),
      }
    );
  };

  return (
    <ScrollView style={{ paddingHorizontal: 30, paddingTop: 30 }}>
      <Input
        label="Comment"
        placeholder="Comment goes here..."
        leftIcon={<Ionicons name="cafe-outline" />}
        multiline
        onChangeText={setBody}
      />
      <Text>Progress</Text>
      <Slider
        label="Progress"
        value={page}
        onValueChange={setPage}
        maximumValue={props.route.params.pages}
        minimumValue={1}
        step={1}
        trackStyle={{ height: 5, backgroundColor: "#2f2f2f" }}
        thumbStyle={{ height: 30, width: 5, backgroundColor: "#C97064" }}
      />
      <Text>pg {page}</Text>

      <Button
        style={{ marginTop: 20, marginBottom: 100 }}
        title={buttonText}
        icon={<Ionicons name="paper-plane" size={20} color="#C97064" />}
        buttonStyle={{ backgroundColor: "#2F2F2F" }}
        disabled={disabled}
        onPress={() => {
          setDisabled(true), setButtonText(" Comment Posted!"), createComment();
        }}
      />
    </ScrollView>
  );
}
export default CommentsScreen;
