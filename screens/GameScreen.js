import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      {/* <Text style={styles.title}>Opponent's Guess</Text> */}

      <Title>Opponent's Guess</Title>
      <View>
        <Text style={styles.gameScreenText}>Higher or Lower?</Text>
      </View>
      <View>
        <Text style={styles.gameScreenText}>Your Guess:</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c0036",
    padding: 24,
  },

  gameScreenText: {
    fontSize: 24,
    color: "white",
  },
});
