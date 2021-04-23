import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SearchBar, ListItem } from "react-native-elements";

const BookSubmitScreen = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (search.length < 1) {
      return;
    } else {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then((response) => response.json())
        .then((json) => setData(json.items));
    }
  }, [search]);

  return (
    <View>
      <ScrollView>
        <SearchBar
          placeholder={"Search for a book"}
          onChangeText={setSearch}
          value={search}
        />
        {data.map((item) => {
          return (
            <ListItem key={item.id} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.volumeInfo.title}</ListItem.Title>
                <ListItem.Subtitle>
                  {item.volumeInfo.subtitle}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </ScrollView>
    </View>
  );
};

// const BookList = (props) => {
//   const { data } = props;
//   return data.map((item) => {
//     <ListItem key={item.id} bottomDivider>
//       <ListItem.Content>
//         <ListItem.Title>{item.volumeInfo.title}</ListItem.Title>
//         <ListItem.Subtitle>{item.volumeInfo.subtitle}</ListItem.Subtitle>
//       </ListItem.Content>
//     </ListItem>;
//   });
// };

export default BookSubmitScreen;
