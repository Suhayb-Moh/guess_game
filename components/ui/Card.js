import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: windowWidth < 380 ? 18 : 36,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.45,
    shadowRadius: 6,
    elevation: 2,
  },
});
