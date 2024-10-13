import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import Hobies from "./components/Hobies";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState([]);
  const [hobbyList, setHobbyList] = useState([]);

  const handleChange = (e) => {
    setTask(e);
  };
  const handleItems = (id) => {
    setHobbyList((prevList) => prevList.filter((hobby) => hobby.id != id));
  };
  console.log(task);
  const handlePress = () => {
    if (task != "") {
      const newTask = { id: Date.now(), name: task };
      setHobbyList((prevList) => [...prevList, newTask]);
      setTask("");
    }
  };

  console.log(hobbyList);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleChange}
        value={task}
        placeholder="Write something"
        style={styles.Input}
      />
      <Button title="Hit it" onPress={handlePress} />
      <Hobies list={hobbyList} onPress={handleItems} />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    color: "blue",
    borderColor: "#000000",
    borderWidth: 1,
    padding: 9,
    // placeholderTextColor: "#blue",
  },
});
