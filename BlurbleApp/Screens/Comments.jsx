import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Button, Input, Slider, Divider, Tooltip } from "react-native-elements";

import Ionicons from "react-native-vector-icons/Ionicons";

function CommentsScreen(props) {
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState(" Post Comment");

  return (
    <ScrollView style={{ paddingHorizontal: 30, paddingTop: 30 }}>
      <Input
        label="Title"
        placeholder="Title..."
        leftIcon={<Ionicons name="bookmark-outline" />}
        onChangeText={setTitle}
      />
      <Input
        label="Subject"
        placeholder="Subject..."
        leftIcon={<Ionicons name="bookmarks-outline" />}
        onChangeText={setSubject}
      />
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
          setDisabled(true), setButtonText(" Comment Posted!");
        }}
      />
    </ScrollView>
  );
}
export default CommentsScreen;
