import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
  Text,
  RefreshControl,
} from "react-native";
import { Card } from "react-native-elements";
import userContext from "../userContext";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function HomeScreen({ navigation }) {
  const [user_id, setUser_Id] = useState(userContext._currentValue._id);
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getClubs = () => {
    fetch(`https://blurble-project.herokuapp.com/api/users/_id=${user_id}`)
      .then((response) => response.json())
      .then((json) => {
        setClubs(json.user.clubs);
        setIsLoading(false);
      });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setIsLoading(true);
    wait(2000).then(() => setRefreshing(false));
    getClubs();
  }, []);

  useEffect(() => {
    fetch(`https://blurble-project.herokuapp.com/api/users/_id=${user_id}`)
      .then((response) => response.json())
      .then((json) => {
        setClubs(json.user.clubs);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else if (clubs.length) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {clubs.map((item, i) => {
          return (
            <GroupItem key={i} club_id={item.club_id} navigation={navigation} />
          );
        })}
      </ScrollView>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Looks like you're not a member of any book clubs yet...</Text>
        <Button
          title="Look for clubs!"
          color="#58B09C"
          onPress={() => {
            navigation.navigate("Clubs");
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;

const GroupItem = (props) => {
  const { club_id, navigation } = props;

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
  const [club, setClub] = useState("");

  useEffect(() => {
    fetch(`https://blurble-project.herokuapp.com/api/clubs/_id=${club_id}`)
      .then((response) => {
        return response.json();
      })
      .then(({ club }) => {
        setClub(club.clubName);
        return fetch(club.currentBook)
          .then((response) => {
            return response.json();
          })
          .then((bookInfo) => {
            setBook(bookInfo);
          });
      });
  }, []);

  return (
    <Card>
      <Card.Title>{club}</Card.Title>
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
        title="Discuss..."
        color="#58B09C"
        onPress={() => {
          console.log(club);
          navigation.navigate("UserClub", {
            title: club,
            thumbnail: book.volumeInfo.imageLinks.thumbnail,
            pages: book.volumeInfo.pageCount,
            clubID: club_id,
            book: book.selfLink,
          });
        }}
      />
    </Card>
  );
};
