import react from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}></View>
      <View style={styles.deleteButton}></View>
      <Image
        resizeMode={"contain"}
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 50,
    left: 30,
  },
  container: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  deleteButton: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 50,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
