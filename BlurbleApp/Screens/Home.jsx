import React, { useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
  Text,
} from "react-native";
import { Card } from "react-native-elements";
import BookInfoScreen from "./BookInfo";

// const groups = [
//   {
//     clubID: "1234",
//     clubName: "Manchester Harry Potter readers",
//     currentBook: {
//       selfLink: "https://www.googleapis.com/books/v1/volumes/N6DeDQAAQBAJ",
//     },
//   },
//   {
//     clubID: "5678",
//     clubName: "Lord of the Rings all time fans",
//     currentBook: {
//       selfLink: "https://www.googleapis.com/books/v1/volumes/E6M_PgAACAAJ",
//     },
//   },
//   {
//     clubID: "9123",
//     clubName: "En-Seussiasts",
//     currentBook: {
//       selfLink: "https://www.googleapis.com/books/v1/volumes/_E5BDwAAQBAJ",
//     },
//   },
//   {
//     clubID: "4567",
//     clubName: "00-readers",
//     currentBook: {
//       selfLink: "https://www.googleapis.com/books/v1/volumes/yORSvQEACAAJ",
//     },
//   },
//   {
//     clubID: "8901",
//     clubName: "History Lovers Anonymous",
//     currentBook: {
//       selfLink: "https://www.googleapis.com/books/v1/volumes/HmShg3dnLSMC",
//     },
//   },
//   {
//     clubID: "2345",
//     clubName: "Random book Club",
//     currentBook: {
//       selfLink: "https://www.googleapis.com/books/v1/volumes/cTbIDwAAQBAJ",
//     },
//   },
// ];

const user_id = 1;

function HomeScreen({ navigation }) {
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newClubs = [];
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
      <ScrollView>
        {clubs.map((item) => {
          return <GroupItem key={item.club_id} navigation={navigation} />;
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
  const { key, navigation } = props;
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
    fetch(`https://blurble-project.herokuapp.com/api/clubs/_id=${key}`)
      .then((response) => response.json())
      .then((json) => {
        fetch(json.club.currentBook.selfLink)
          .then((response) => response.json())
          .then((json) => setBook(json));
      });
  }, []);

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
        title="Discuss..."
        color="#58B09C"
        onPress={() => {
          navigation.navigate("UserClub", {
            title: clubName,
            thumbnail: book.volumeInfo.imageLinks.thumbnail,
            pages: book.volumeInfo.pageCount,
          });
        }}
      />
    </Card>
  );
};
