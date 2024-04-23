// App.jsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalculatorButton from "./components/CalculatorButton";
// import { Clipboard } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
    };
  }

  handleButtonPress = (value) => {
    if (value === "=") {
      this.calculateResult();
    } else if (value === "C") {
      this.clearDisplay();
    } else if (value === "DEL") {
      this.deleteLastInput();
    } else {
      this.setState((prevState) => ({
        displayValue:
          prevState.displayValue === "0"
            ? value
            : prevState.displayValue + value,
      }));
    }
  };

  calculateResult = () => {
    try {
      const result = eval(this.state.displayValue);
      if (!isNaN(result) && result !== Infinity && result !== -Infinity) {
        this.setState({ displayValue: result.toString() });
      } else {
        this.setState({ displayValue: "Error" });
      }
    } catch (error) {
      this.setState({ displayValue: "Error" });
    }
  };

  clearDisplay = () => {
    this.setState({ displayValue: "0" });
  };

  deleteLastInput = () => {
    this.setState((prevState) => ({
      displayValue:
        prevState.displayValue.length > 1
          ? prevState.displayValue.slice(0, -1)
          : "0",
    }));
  };

  // handleLongPress = () => {
  //   Clipboard.setString(this.state.displayValue);
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.displayValue}</Text>
        <View style={styles.buttonsContainer}>
          {[
            "1",
            "2",
            "3",
            "+",
            "4",
            "5",
            "6",
            "-",
            "7",
            "8",
            "9",
            "*",
            "0",
            "C",
            "=",
            "/",
            "DEL",
          ].map((button) => (
            <CalculatorButton
              key={button}
              title={button}
              onPress={() => this.handleButtonPress(button)}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  display: {
    fontSize: 50,
    marginBottom: "80%",
    color: "#ffffff",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
  },
});
