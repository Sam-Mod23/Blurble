import * as React from "react";
import { Button, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  JoinClubScreen,
  ClubsScreen,
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

const ClubSearchStack = createStackNavigator();

function ClubSearchStackScreen() {
  return (
    <ClubSearchStack.Navigator>
      <ClubSearchStack.Screen
        name="Clubs"
        component={ClubsScreen}
        options={{ title: "Clubs", ...headerOptions }}
      />
      <ClubSearchStack.Screen
        name="JoinClub"
        component={JoinClubScreen}
        options={{ title: "Join Clubs", ...headerOptions }}
      />
      <ClubSearchStack.Screen
        name="UserClub"
        component={UserClubScreen}
        options={{ title: "Club Discussion", ...headerOptions }}
      />
      <ClubSearchStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Comments", ...headerOptions }}
      />
      <ClubSearchStack.Screen
        name="Votes"
        component={VoteScreen}
        options={{ title: "Vote", ...headerOptions }}
      />
      <ClubSearchStack.Screen
        name="BookSubmit"
        component={BookSubmitScreen}
        options={{ title: "Nominate Book", ...headerOptions }}
      />
      <ClubSearchStack.Screen
        name="BookInfo"
        component={BookInfoScreen}
        options={{ title: "Information", ...headerOptions }}
      />
    </ClubSearchStack.Navigator>
  );
}

export default ClubSearchStackScreen;
