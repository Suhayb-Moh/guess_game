import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 25,
    color: Colors.quaternary,
    borderColor: Colors.quaternary,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 12,
    borderRadius: 12,
    textAlign: "center",
    maxWidth: "80%",
  },
});
