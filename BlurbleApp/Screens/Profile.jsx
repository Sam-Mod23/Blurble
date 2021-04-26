import * as React from "react";
import { Button, Text, View } from "react-native";
import { Avatar, ListItem, Card } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

function ProfileScreen({ navigation }) {
  const list = [
    { title: "Name:", subtitle: "John Smith" },
    { title: "Username:", subtitle: "Jsmith123" },
    { title: "Email:", subtitle: "Jsmit@gmail.com" },
    { title: "Location:", subtitle: "Manchester" },
    { title: "DOB:", subtitle: "25/5/88" },
  ];
  return (
    <View style={{ flex: 1 }}>
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
      </Card>
    </View>
  );
}

export default ProfileScreen;
