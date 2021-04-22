import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.id}</Text>
  </TouchableOpacity>
);

function BookSubmitScreen(props) {
  const [data, setData] = useState();
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=lord of the rings`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
      });
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

/* const renderItem = ({item}) => {<Item title={item.title}/>
  return (
    <>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      ></View>
      <ScrollView
        style={{ flex: 5, justifyContent: "center", alignItems: "center" }}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => {
            item.title;
          }}
        />
      </ScrollView>
    </>
  );
}
*/

export default BookSubmitScreen;
