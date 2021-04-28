import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { View, ScrollView, Image } from "react-native";

import {
  Text,
  Card,
  Button,
  ListItem,
  Input,
  Slider,
} from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

const UserClubScreen = (props) => {
  const { navigation } = props;
  const { clubID } = props.route.params;
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState({
    comments: [
      {
        username: "'madolfm'",
        body:
          "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        club_name: "Northcoders Book Club",
        club_id: 2,
        book: "https://www.googleapis.com/books/v1/volumes/iptCAwAAQBAJ",
        progress: 29,
        __v: 0,
        created_at: "2021-04-26T20:09:29.958+00:00",
        updatedAt: "2021-04-26T20:09:29.958+00:00",
      },
    ],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://blurble-project.herokuapp.com/api/comments/club_id=${clubID}?orderBy=desc&progress=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setComments(json.comments);
        setIsLoading(false);
      });
  }, [page]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View>
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

            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Button
                icon={
                  <Ionicons
                    name={"chatbubbles-outline"}
                    size={20}
                    color="#C97064"
                  />
                }
                showLabel={false}
                onPress={() =>
                  navigation.navigate("Comments", {
                    pages: props.route.params.pages,
                    book: props.route.params.book,
                    clubID: clubID,
                  })
                }
                buttonStyle={{
                  backgroundColor: "white",
                  paddingHorizontal: 30,
                }}
              />

              <Button
                icon={
                  <Ionicons name={"ribbon-outline"} size={20} color="#C97064" />
                }
                onPress={() => navigation.navigate("Votes", { clubID: clubID })}
                buttonStyle={{
                  backgroundColor: "white",
                  paddingHorizontal: 30,
                }}
              />
              <Button
                icon={
                  <Ionicons name={"search-outline"} size={20} color="#C97064" />
                }
                onPress={() =>
                  navigation.navigate("BookSubmit", { clubID: clubID })
                }
                buttonStyle={{
                  backgroundColor: "white",
                  paddingHorizontal: 30,
                }}
              />
            </View>
            <Slider
              value={page}
              onValueChange={setPage}
              maximumValue={props.route.params.pages}
              minimumValue={1}
              step={1}
              trackStyle={{ height: 5, backgroundColor: "#2f2f2f" }}
              thumbStyle={{ height: 30, width: 5, backgroundColor: "#C97064" }}
            />
            <Text>Comments Before pg{page}</Text>
          </Card>
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}></View>
          <Card>
            {comments ? (
              comments.map((comment) => {
                return (
                  <ListItem bottomDivider key={comment._id}>
                    <ListItem.Content>
                      <ListItem.Title>{comment.username}</ListItem.Title>
                      <View>
                        <Text> </Text>
                        <Text>{comment.body}</Text>
                      </View>
                      <Text> </Text>
                      <View style={{ textAlign: "right" }}>
                        <Text style={{ textAlign: "right" }}>
                          p{comment.progress}
                        </Text>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                );
              })
            ) : (
              <View>
                <Text>No Comments before page {page}</Text>
              </View>
            )}
          </Card>
        </ScrollView>
      </View>
    );
  }
};

export default UserClubScreen;
