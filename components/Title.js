import { Text, View, StyleSheet } from "react-native";
function Title({ children }) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: "#ddb52f",
    fontWeight: "bold",
    borderColor: "#ddb52f",
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
  },
});
