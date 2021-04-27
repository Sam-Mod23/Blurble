import React, { useState } from "react";
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

function HomeStackScreen() {
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
        options={{
          title: "Club Discussion",
          ...headerOptions,
        }}
      />
      <HomeStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Comments", ...headerOptions }}
      />
      <HomeStack.Screen
        name="Votes"
        component={VoteScreen}
        options={{ title: "Vote", ...headerOptions }}
      />
      <HomeStack.Screen
        name="BookSubmit"
        component={BookSubmitScreen}
        options={{ title: "Choose Book", ...headerOptions }}
      />
      <HomeStack.Screen
        name="BookInfo"
        component={BookInfoScreen}
        options={{ title: "Information", ...headerOptions }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
