import { useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber, gameReset }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleNumberChange = (number) => {
    setEnteredNumber(number);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const backToHome = () => {
    Alert.alert("Reset", "Are you sure you want to reset the game?", [
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          setEnteredNumber("");
          gameReset(true);
        },
      },
      { text: "No", style: "cancel" },
    ]);
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
        },
        {
          text: "No",
          style: "destructive",
          onPress: () => {
            setEnteredNumber("");
            gameReset(true);
          },
        },
      ]
    );

    onPickNumber(enteredNumberValue);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Game</Title>
      <Card>
        <InstructionText style={styles.titleText}>Start Game</InstructionText>
        <InstructionText>Pick a number between 1 and 99</InstructionText>
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
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputText: {
    hieght: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: 2,
    color: Colors.tertiary,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    fontSize: 24,
    fontFamily: "Open-Sans-Bold",
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
