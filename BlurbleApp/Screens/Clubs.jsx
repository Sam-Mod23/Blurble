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

const groups = [
  {
    clubID: "9876",
    clubName: "Hilary Mantels Minions",
    currentBook: {
      selfLink: "https://www.googleapis.com/books/v1/volumes/ioMdzgEACAAJ",
    },
    description:
      "A book club is a reading group, usually consisting of a number of people who read and talk about books based on a topic or an agreed-upon reading list. It's common for book clubs to choose a specific book to read and discuss at the same time. Formal book clubs meet on a regular basis at a set location. Most book clubs meet monthly in order to give members time to read the next book. Book clubs can be focused on literary critique or on less academic topics. Some book clubs are focused on a certain genre, such as romance or horror. There are even book clubs dedicated to a particular author or series. Whatever reading material you prefer, if you can't find a book club for it why not think about starting your own? ",
  },
  {
    clubID: "8765",
    clubName: "Staying Frosty",
    currentBook: {
      selfLink: "https://www.googleapis.com/books/v1/volumes/cQ0aCgAAQBAJ",
    },
    description:
      "A book club is a reading group, usually consisting of a number of people who read and talk about books based on a topic or an agreed-upon reading list. It's common for book clubs to choose a specific book to read and discuss at the same time. Formal book clubs meet on a regular basis at a set location. Most book clubs meet monthly in order to give members time to read the next book. Book clubs can be focused on literary critique or on less academic topics. Some book clubs are focused on a certain genre, such as romance or horror. There are even book clubs dedicated to a particular author or series. Whatever reading material you prefer, if you can't find a book club for it why not think about starting your own? ",
  },
  {
    clubID: "7654",
    clubName: "The Blurble Burglary Book Club",
    currentBook: {
      selfLink: "https://www.googleapis.com/books/v1/volumes/-eMuDQAAQBAJ",
    },
    description:
      "A book club is a reading group, usually consisting of a number of people who read and talk about books based on a topic or an agreed-upon reading list. It's common for book clubs to choose a specific book to read and discuss at the same time. Formal book clubs meet on a regular basis at a set location. Most book clubs meet monthly in order to give members time to read the next book. Book clubs can be focused on literary critique or on less academic topics. Some book clubs are focused on a certain genre, such as romance or horror. There are even book clubs dedicated to a particular author or series. Whatever reading material you prefer, if you can't find a book club for it why not think about starting your own? ",
  },
  {
    clubID: "6543",
    clubName: "Lords of the Flies",
    currentBook: {
      selfLink: "https://www.googleapis.com/books/v1/volumes/DKU1EsmnpMQC",
    },
    description:
      "A book club is a reading group, usually consisting of a number of people who read and talk about books based on a topic or an agreed-upon reading list. It's common for book clubs to choose a specific book to read and discuss at the same time. Formal book clubs meet on a regular basis at a set location. Most book clubs meet monthly in order to give members time to read the next book. Book clubs can be focused on literary critique or on less academic topics. Some book clubs are focused on a certain genre, such as romance or horror. There are even book clubs dedicated to a particular author or series. Whatever reading material you prefer, if you can't find a book club for it why not think about starting your own? ",
  },
  {
    clubID: "5432",
    clubName: "We <3 Books",
    currentBook: {
      selfLink: "https://www.googleapis.com/books/v1/volumes/_4GQDwAAQBAJ",
    },
    description:
      "A book club is a reading group, usually consisting of a number of people who read and talk about books based on a topic or an agreed-upon reading list. It's common for book clubs to choose a specific book to read and discuss at the same time. Formal book clubs meet on a regular basis at a set location. Most book clubs meet monthly in order to give members time to read the next book. Book clubs can be focused on literary critique or on less academic topics. Some book clubs are focused on a certain genre, such as romance or horror. There are even book clubs dedicated to a particular author or series. Whatever reading material you prefer, if you can't find a book club for it why not think about starting your own? ",
  },
  {
    clubID: "4321",
    clubName: "Murder Mystery Fanatics",
    currentBook: {
      selfLink: "https://www.googleapis.com/books/v1/volumes/C8vhxQEACAAJ",
    },
    description:
      "A book club is a reading group, usually consisting of a number of people who read and talk about books based on a topic or an agreed-upon reading list. It's common for book clubs to choose a specific book to read and discuss at the same time. Formal book clubs meet on a regular basis at a set location. Most book clubs meet monthly in order to give members time to read the next book. Book clubs can be focused on literary critique or on less academic topics. Some book clubs are focused on a certain genre, such as romance or horror. There are even book clubs dedicated to a particular author or series. Whatever reading material you prefer, if you can't find a book club for it why not think about starting your own? ",
  },
];

const ClubsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      {groups.map((item) => {
        return (
          <ClubCard key={item.clubID} data={item} navigation={navigation} />
        );
      })}
    </ScrollView>
  );
};
export default ClubsScreen;

const ClubCard = (props) => {
  const { navigation } = props;
  const { clubName, currentBook, clubID, description } = props.data;

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
    fetch(currentBook.selfLink)
      .then((response) => response.json())
      .then((json) => setBook(json));
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
};
