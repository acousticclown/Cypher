import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import * as firebase from "firebase/app";
import "firebase/auth";

const SettingScreen = ({ navigation }) => {

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Signed Out Successfully");
      })
      .catch((error) => {
        console.out(error);
      })
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => signOut()} title="Sign Out" />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});