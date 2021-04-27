import React, { useState } from "react";
import { View, ScrollView, Image } from "react-native";

import {
  Text,
  Card,
  Button,
  ListItem,
  Input,
  Slider,
} from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

const UserClubScreen = (props) => {
  const comments = [
    {
      username: "Dr Seuss Lover 4",
      body:
        "The thing about life is that most of your peers hit the same life events, at the same time. It’s tedious and a minefield when it comes to gift giving. So, I’ve settled on a secular system as far as kids are concerned. Baby shower, Christening or “just because you care”? Step away from the overpriced “baby’s first tooth” rubbish and don’t concern yourself with keepsake baby booties! Just buy a butt load of these books and keep them in the cupboard. Every time your mate drops a little sproglet, dig one out and write a touching message in the title page. Just make sure you spell their name right…",
      progress: 100,
      id: 1,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,

      id: 2,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,
      id: 3,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,
      id: 4,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "Love this story!! Has a wonderful message for anyone of any age. I read this for the first time when my son received a set of Dr Seuss books as a baby, and we read it as often as I can get away with. I always make sure to emphasize certain parts, both the positive and the negative and discuss them with him (he's 6 years old now). It's incredibly inspiring, teaching you to follow your heart, reach for the stars and not let anything stand in your way. But it also teaches you that things don't always go as planned and you may find yourself lost and not where you want/ expected to be. But it's how you pick yourself up from those situations, which is just as important as when everything goes exactly as you want it to. Can't recommend it more highly.",
      progress: 100,
      id: 5,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,

      id: 6,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,

      id: 7,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,
      id: 8,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,
      id: 9,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,
      id: 10,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "No childhood should be without the wisdom and wit of Dr Seuss, but this book in particular sums up the hopes, dreams and expectations we have for our children. Whether your child is 6, 16, 26 ..... It says almost everything you would wish to say about their journey through life. I first came across this at a conference for entrepreneurs, being read from the stage by one of the speakers. It was both inspiring and motivating, but as I listened, I know it was something I wanted to pass on to my family. I bought the hardback version which tells you something of the degree to which I believe this is an absolute classic.",
      progress: 100,
      id: 11,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,
      id: 12,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "You have brains in your head, you have feet in your shoes, you can steer yourself any direction you choose. Excellent for bedtime reading, reinforcing crucial values, comfort blanket or as a gentle introduction to poetry. I will give this book to our little ones on special occasions like first day at school, first school trip, first dive-in apprehension, first day at uni, or any kind events or rites of passage, to read and re read. We had the words added to our oldest's baby blanket.",
      progress: 100,
      id: 13,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,
      id: 14,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "this is a comment about a book that i read. I thought it was a nice fun read adn it really made time fly",
      progress: 100,
      id: 15,
    },
    {
      username: "Dr Seuss Lover 4",
      body:
        "Bought for my sister and added some photos for her leaving do, she moved to New Zealand. Wanted to add bit of excitement for her new life in the new country. She loved the idea. I got it myself, it was a present from a friend when I went backpacking. Just great story for different occasions apart from being just kids book. Great quality as well!",
      progress: 100,
      id: 16,
    },
  ];
  const { navigation } = props;
  const [page, setPage] = useState(0);

  // getRequest for comments - let group info just pass down on props as is

  return (
    <View>
      <ScrollView>
        <Card>
          <View style={{ flexDirection: "row", paddingBottom: 20 }}>
            <Text
              h3
              style={{
                textAlign: "center",
                flex: 5,
                alignSelf: "center",
              }}
            >
              {props.route.params.title}
            </Text>
            <Image
              style={{
                height: 80,
                resizeMode: "stretch",
                alignSelf: "center",
                flex: 1,
              }}
              source={{
                uri: props.route.params.thumbnail,
              }}
            />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Button
              icon={
                <Ionicons
                  name={"chatbubbles-outline"}
                  size={20}
                  color="#C97064"
                />
              }
              showLabel={false}
              onPress={() =>
                navigation.navigate("Comments", {
                  pages: props.route.params.pages,
                })
              }
              buttonStyle={{
                backgroundColor: "white",
                paddingHorizontal: 30,
              }}
            />

            <Button
              icon={
                <Ionicons name={"ribbon-outline"} size={20} color="#C97064" />
              }
              onPress={() => navigation.navigate("Votes")}
              buttonStyle={{
                backgroundColor: "white",
                paddingHorizontal: 30,
              }}
            />
            <Button
              icon={
                <Ionicons name={"search-outline"} size={20} color="#C97064" />
              }
              onPress={() => navigation.navigate("BookSubmit")}
              buttonStyle={{
                backgroundColor: "white",
                paddingHorizontal: 30,
              }}
            />
          </View>
          <Slider
            value={page}
            onValueChange={setPage}
            maximumValue={props.route.params.pages}
            minimumValue={1}
            step={1}
            trackStyle={{ height: 5, backgroundColor: "#2f2f2f" }}
            thumbStyle={{ height: 30, width: 5, backgroundColor: "#C97064" }}
          />
          <Text>Comments Before pg{page}</Text>
        </Card>
        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}></View>
        <Card>
          {comments.map((comment) => {
            return (
              <ListItem bottomDivider key={comment.id}>
                <ListItem.Content>
                  <ListItem.Title>{comment.username}</ListItem.Title>
                  <View>
                    <Text> </Text>
                    <Text>{comment.body}</Text>
                  </View>
                  <Text> </Text>
                  <View style={{ textAlign: "right" }}>
                    <Text style={{ textAlign: "right" }}>
                      p{comment.progress}
                    </Text>
                  </View>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </Card>
      </ScrollView>
    </View>
  );
};

export default UserClubScreen;
