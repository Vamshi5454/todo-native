import { View, Text, Pressable, StyleSheet } from "react-native";
function Hobies({ list, onPress }) {
  return (
    <View>
      {list.map((item) => (
        <Pressable onPress={() => onPress(item.id)}>
          <Text style={styles.items} key={item.id}>
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

export default Hobies;

const styles = StyleSheet.create({
  items: {
    color: "blue",
    fontSize: 16,
  },
});
