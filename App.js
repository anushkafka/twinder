import React from "react";
import { Text, View } from "react-native";
import styles from "./styles.js";
import RootNavigator from "./navigation/RootNavigator.js";

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}
