import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
      <Button title="Go to Info" onPress={() => navigation.navigate("Info")} />
    </View>
  );
}

function InfoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Info!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function ClubsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Clubs screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const DetailsStack = createStackNavigator();
function DetailsStackScreen() {
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen name="Details" component={DetailsScreen} />
      <DetailsStack.Screen name="Info" component={InfoScreen} />
    </DetailsStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Blurble",
          headerStyle: {
            backgroundColor: "#2F2F2F",
          },
          headerTintColor: "#EDEDF4",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="icon"
              color="black"
            ></Button>
          ),
        }}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Info" component={InfoScreen} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Details" component={DetailsScreen} />
      <ProfileStack.Screen name="Info" component={InfoScreen} />
    </ProfileStack.Navigator>
  );
}

const ClubSearchStack = createStackNavigator();

function ClubSearchStackScreen() {
  return (
    <ClubSearchStack.Navigator>
      <ClubSearchStack.Screen name="Clubs" component={ClubsScreen} />
      <ClubSearchStack.Screen name="Details" component={DetailsScreen} />
      <ClubSearchStack.Screen name="Info" component={InfoScreen} />
    </ClubSearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Clubs") {
              iconName = focused ? "library" : "library-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#c97064",
          inactiveTintColor: "#2f2f2f",
        }}
      >
        <Tab.Screen name="Clubs" component={ClubSearchStackScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
