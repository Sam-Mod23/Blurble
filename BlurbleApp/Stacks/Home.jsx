import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  HomeScreen,
  UserClubScreen,
  CommentsScreen,
  VoteScreen,
  BookSubmitScreen,
  BookInfoScreen,
} from "../Screens";

const headerOptions = {
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: "#2F2F2F",
  },
  headerTintColor: "#EDEDF4",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 25,
  },
};

const HomeStack = createStackNavigator();

function HomeStackScreen(props) {
  const { user } = props;
  console.log(user, "user in Home stack");
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Blurble", ...headerOptions }}
      />
      <HomeStack.Screen
        name="UserClub"
        component={UserClubScreen}
        options={{ title: "xyz Book Club", ...headerOptions }}
      />
      <HomeStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Comments", ...headerOptions }}
      />
      <HomeStack.Screen
        name="Votes"
        component={VoteScreen}
        options={{ title: "Next Month's Book", ...headerOptions }}
      />
      <HomeStack.Screen
        name="BookSubmit"
        // component={BookSubmitScreen}
        // myProp="Hello"
        options={{ title: "Choose Book", ...headerOptions }}
      >
        {(props) => {
          return <BookSubmitScreen {...props} user={user} />;
        }}
      </HomeStack.Screen>
      <HomeStack.Screen
        name="BookInfo"
        component={BookInfoScreen}
        options={{ title: "Book Information", ...headerOptions }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
