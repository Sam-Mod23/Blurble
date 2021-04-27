import * as React from "react";
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

function ProfileScreen({ navigation }) {
  // get request using userId on user endpoint

  const list = [
    { title: "Name:", subtitle: "John Smith" },
    { title: "Username:", subtitle: "Jsmith123" },
    { title: "Email:", subtitle: "Jsmit@gmail.com" },
    { title: "Location:", subtitle: "Manchester" },
    { title: "DOB:", subtitle: "25/5/88" },
  ];
  const flubber =
    "https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000";
  return (
    <ScrollView style={{ flex: 1 }}>
      <Card>
        <Avatar
          size="xlarge"
          title={<Ionicons name="sad" size={90} color="#EDEDF4" />}
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
          <Text style={{ alignSelf: "center", marginTop: 30 }}>Blurbles!</Text>
          <View style={{ flexDirection: "row" }}>
            <Avatar
              size="medium"
              source={{
                uri:
                  "https://i.pinimg.com/originals/f6/31/24/f63124109f6c4e09cfa83162f4f20378.png",
              }}
              containerStyle={{ alignSelf: "center" }}
            />
            <Text style={{ alignSelf: "center", fontSize: 75 }}>50</Text>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
}

export default ProfileScreen;
