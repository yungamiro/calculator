import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CalculatorButton = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: "50%",

    backgroundColor: "#DDDDDD",
  },
});

export default CalculatorButton;
