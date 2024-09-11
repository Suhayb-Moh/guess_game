import { useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleNumberChange = (number) => {
    setEnteredNumber(number);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const handleConfirmButtonPress = () => {
    const enteredNumberValue = parseInt(enteredNumber);

    if (
      isNaN(enteredNumberValue) ||
      enteredNumberValue <= 0 ||
      enteredNumberValue > 99
    ) {
      Alert.alert("Invalid Number", "Please enter a number between 1 and 99", [
        { text: "OK", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    Alert.alert(
      "Start Game",
      `You've selected the number ${enteredNumberValue}. Are you ready to play?`,
      [
        {
          text: "Yes",
          style: "default",
          onPress: () => console.log("Game started"),
        },
        { text: "No", style: "cancel" },
      ]
    );

    onPickNumber(enteredNumberValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Start Game</Text>
        <TextInput
          style={styles.inputText}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleNumberChange}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirmButtonPress}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.45,
    shadowRadius: 6,
    elevation: 2,
  },
  inputText: {
    hieght: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    fontSize: 24,
    color: "white",
    marginBottom: 16,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
