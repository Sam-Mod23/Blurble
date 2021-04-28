import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { Card } from "react-native-elements";
import userContext from "../userContext";

const ClubsScreen = (props) => {
  const { navigation } = props;

  const [user, setUser] = userContext._currentValue._id;
  const [isLoading, setIsLoading] = useState(true);
  const [allClubs, setAllClubs] = useState([
    {
      nominatedBooks: [],
      memberIds: [],
      adminIds: [],
      comments: [],
      archivedBooks: [],
      _id: "",
      clubName: "",
      description: "",
      currentBook: "",
      __v: 0,
      created_at: "",
      updatedAt: "",
    },
  ]);
  const [userClubs, setUserClubs] = useState([{}, {}]);
  const notClub = [];

  useEffect(() => {
    fetch(`https://blurble-project.herokuapp.com/api/clubs`)
      .then((response) => response.json())
      .then((json) => {
        setAllClubs(json.clubs);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <ScrollView>
        {allClubs.map((item) => {
          return (
            <ClubCard key={item._id} data={item} navigation={navigation} />
          );
        })}
      </ScrollView>
    );
  }
};
export default ClubsScreen;

const ClubCard = (props) => {
  const { navigation } = props;
  const { clubName, currentBook, clubID, description } = props.data;
  const [isLoading, setIsLoading] = useState(true);

  const [book, setBook] = useState({
    volumeInfo: {
      title: "Untitled",
      imageLinks: {
        thumbnail:
          "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png",
      },
      pageCount: 0,
    },
  });

  useEffect(() => {
    fetch(currentBook)
      .then((response) => response.json())
      .then((json) => {
        setBook(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <Card>
        <Card.Title>{clubName}</Card.Title>
        <Card.Divider />
        <Image
          style={{
            width: 150,
            height: 250,
            resizeMode: "stretch",
            alignSelf: "center",
          }}
          source={{
            uri: book.volumeInfo.imageLinks.thumbnail,
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={{ textAlign: "center" }}>{book.volumeInfo.title}</Text>
        <Button
          title="More Info..."
          color="#58B09C"
          onPress={() => {
            navigation.navigate("JoinClub", {
              title: clubName,
              thumbnail: book.volumeInfo.imageLinks.thumbnail,
              pages: book.volumeInfo.pageCount,
              about: description,
            });
          }}
        />
      </Card>
    );
  }
};
