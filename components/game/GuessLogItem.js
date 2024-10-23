import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.roundNumberText}>#{roundNumber}</Text>
      <Text style={styles.roundNumberText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 10,
    backgroundColor: Colors.tertiary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.45,
    shadowRadius: 6,
    fontFamily: "Open-Sans",
    fontSize: 18,
  },

  roundNumberText: {
    fontFamily: "Open-Sans",
    fontSize: 16,
  },
});
