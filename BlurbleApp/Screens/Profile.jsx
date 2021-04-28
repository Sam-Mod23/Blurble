import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import { Avatar, ListItem, Card } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import userContext from "../userContext";

function ProfileScreen({ navigation }) {
  const [userID, setUserID] = useState(userContext._currentValue._id);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    __v: 0,
    _id: "",
    avatar: "",
    badges: [],
    blurbles: 0,
    clubs: [
      {
        club_id: 0,
        hasNominated: true,
        progress: 0,
      },
      {
        club_id: 0,
        hasNominated: true,
        progress: 0,
      },
    ],
    created_at: "",
    email: "",
    isOver18: true,
    name: "",
    updatedAt: "",
    username: "",
  });
  const [redeemBlurbles, setRedeemBlurbles] = useState(0);

  useEffect(() => {
    fetch(`https://blurble-project.herokuapp.com/api/users/_id=${userID}`)
      .then((response) => response.json())
      .then((json) => {
        setUser(json.user);
        setIsLoading(false);
      });
  }, [redeemBlurbles]);

  const list = [
    { title: "Name:", subtitle: user.name },
    { title: "Username:", subtitle: user.username },
    { title: "Email:", subtitle: user.email },
    { title: "Over 18:", subtitle: user.isOver18.toString() },
    { title: "Clubs:", subtitle: user.clubs.length },
  ];

  const flubber =
    "https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000";

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card>
          {console.log("I updated!")}
          <Avatar
            size="xlarge"
            source={{ uri: user.avatar }}
            rounded
            overlayContainerStyle={{ backgroundColor: "#C97064" }}
            containerStyle={{
              marginTop: 30,
              alignSelf: "center",
              marginBottom: 30,
            }}
          />

          {list.map((item, i) => {
            return (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                  <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
          <View
            style={{
              flex: 1,

              marginTop: 30,
              alignSelf: "center",
              marginBottom: 30,
            }}
          >
            <Button
              style={{ alignSelf: "center", marginTop: 30 }}
              color={"#58B09C"}
              title={"Blurbles!"}
              onPress={() => {
                setRedeemBlurbles(redeemBlurbles + 1);
              }}
            />

            <View style={{ flexDirection: "row" }}>
              <Avatar
                size="medium"
                source={{
                  uri:
                    "https://i.pinimg.com/originals/f6/31/24/f63124109f6c4e09cfa83162f4f20378.png",
                }}
                containerStyle={{ alignSelf: "center" }}
              />
              <Text style={{ alignSelf: "center", fontSize: 75 }}>
                {user.blurbles}
              </Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
