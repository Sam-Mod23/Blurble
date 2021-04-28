import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, View, ScrollView } from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import userContext from "../userContext";

function VoteScreen() {
  const [club, setClub] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(userContext._currentValue._id);

  const clubID = 1;

  useEffect(() => {
    fetch(`https://blurble-project.herokuapp.com/api/clubs/_id=${clubID}`)
      .then((response) => response.json())
      .then((json) => {
        setClub(json.club);
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
        {club.nominatedBooks.map((item, i) => {
          return <BookItem key={i} data={item} clubID={clubID} />;
        })}
      </ScrollView>
    );
  }
}
export default VoteScreen;

const BookItem = (props) => {
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

  const addVote = () => {
    fetch(
      `https://blurble-project.herokuapp.com/api/clubs/_id=${props.clubID}`,
      { method: "PATCH" },
      { body: { selfLink: props.data.selfLink, incVotes: 1 } }
    ).then(console.log("patch request sent to votes"));
  };

  useEffect(() => {
    fetch(props.data.selfLink)
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
          addVote();
        }}
        icon={<Ionicons name={iconName} color={iconColor} size={20} />}
      />
    </ListItem>
  );
};
