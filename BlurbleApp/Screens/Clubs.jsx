import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Card } from "react-native-elements";
import userContext from "../userContext";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

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
  const [userClubs, setUserClubs] = useState([1]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    fetch(`https://blurble-project.herokuapp.com/api/clubs`)
      .then((response) => response.json())
      .then((json) => setAllClubs(json.clubs))
      .then(() => {
        fetch(`https://blurble-project.herokuapp.com/api/users/_id=${user}`)
          .then((response) => response.json())
          .then((json) => {
            setUserClubs(
              json.user.clubs.map((clubObject) => {
                return clubObject.club_id;
              })
            );
            setIsLoading(false);
          });
      });
  }, [refreshing]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {allClubs.map((item) => {
          if (!userClubs.includes(item._id)) {
            return (
              <ClubCard key={item._id} data={item} navigation={navigation} />
            );
          }
        })}
      </ScrollView>
    );
  }
};
export default ClubsScreen;

const ClubCard = (props) => {
  const { navigation } = props;
  const { clubName, currentBook, _id, description } = props.data;
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
              clubID: _id,
            });
          }}
        />
      </Card>
    );
  }
};
