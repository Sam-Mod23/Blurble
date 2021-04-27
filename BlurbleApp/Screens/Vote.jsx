import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

const list = [
  {
    votes: 0,
    selfLink: "https://www.googleapis.com/books/v1/volumes/GpuNDwAAQBAJ",
  },
  {
    votes: 2,
    selfLink: "https://www.googleapis.com/books/v1/volumes/NxaVzQEACAAJ",
  },
  {
    votes: 99,
    selfLink: "https://www.googleapis.com/books/v1/volumes/DiK_UShlVCEC",
  },
  {
    votes: 3,
    selfLink: "https://www.googleapis.com/books/v1/volumes/wS-EzQEACAAJ",
  },
  {
    votes: 98,
    selfLink: "https://www.googleapis.com/books/v1/volumes/P1f3twEACAAJ",
  },
  {
    votes: 15,
    selfLink: "https://www.googleapis.com/books/v1/volumes/exTZzQEACAAJ",
  },
];

function VoteScreen() {
  return (
    <ScrollView>
      {list.map((item, i) => {
        return <BookItem key={i} data={item} />;
      })}
    </ScrollView>
  );
}
export default VoteScreen;

const BookItem = (props) => {
  // get request for selfLink from API - replace prop-extraction on line 47

  const { selfLink } = props.data;

  const [votes, setVotes] = useState(props.data.votes);
  const [iconName, setIconName] = useState("flame-outline");
  const [canPress, setCanPress] = useState(true);
  const [iconColor, setIconColor] = useState("#2f2f2f");

  const [book, setBook] = useState({
    volumeInfo: {
      title: "",
      imageLinks: {
        thumbnail:
          "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png",
      },
    },
  });

  useEffect(() => {
    fetch(selfLink)
      .then((response) => response.json())
      .then((json) => setBook(json));
  }, []);

  if (book.volumeInfo.imageLinks === undefined) {
    book.volumeInfo.imageLinks = {
      thumbnail:
        "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png",
    };
  }

  return (
    <ListItem bottomDivider>
      <Avatar source={{ uri: book.volumeInfo.imageLinks.thumbnail }} />
      <ListItem.Content>
        <ListItem.Title>{book.volumeInfo.title}</ListItem.Title>
        <ListItem.Subtitle>Votes : {votes}</ListItem.Subtitle>
      </ListItem.Content>
      <Button
        disabled={!canPress}
        type="clear"
        onPress={() => {
          setIconName("flame");
          setVotes(votes + 1);
          setCanPress(false);
          setIconColor("#C97064");
        }}
        icon={<Ionicons name={iconName} color={iconColor} size={20} />}
      />
    </ListItem>
  );
};
