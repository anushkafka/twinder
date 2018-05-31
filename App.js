import React from "react";
import { Text, View } from "react-native";
import styles from "./styles.js";
import Home from "./screens/Home.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}
