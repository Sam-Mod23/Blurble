import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SearchBar, ListItem } from "react-native-elements";

// const BookList = (props) => {
//   console.log(props, "<<< props");
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

const BookSubmitScreen = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=the+lord+of+the+rings`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
      });
  }, []);

  return (
    <View>
      {console.log(data, "<<< data")}
      <SearchBar
        placeholder={"Search for a book"}
        onChangeText={setSearch}
        value={search}
        onSubmit
      />
      {/* <BookList data={data} /> */}
      {data.map((item) => {
        <ListItem key={item.id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.volumeInfo.title}</ListItem.Title>
            <ListItem.Subtitle>{item.volumeInfo.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>;
      })}
    </View>
  );
};

export default BookSubmitScreen;
