import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.subtitleText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  subtitleText: {
    color: Colors.tertiary,
    marginBottom: 8,
    fontSize: 20,
    fontFamily: "Open-Sans",
  },
});
