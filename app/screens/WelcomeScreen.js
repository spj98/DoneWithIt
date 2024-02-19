import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
});

export default WelcomeScreen;
