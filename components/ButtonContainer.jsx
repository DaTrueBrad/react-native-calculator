import { View, Text, StyleSheet } from "react-native";
import React from "react";
import NumberButton from "./NumberButton";

export default function ButtonContainer({addNumber, addSymbol, addTogether,clearDisplay}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <NumberButton value="C" size="1" buttonFunc={clearDisplay}/>
        <NumberButton value="*" size="1" buttonFunc={addSymbol} />
        <NumberButton value="/" size="1" buttonFunc={addSymbol} />
      </View>
      <View style={styles.row}>
        <NumberButton value="7" size="1" buttonFunc={addNumber} />
        <NumberButton value="8" size="1" buttonFunc={addNumber} />
        <NumberButton value="9" size="1" buttonFunc={addNumber} />
        <NumberButton value="+" size="1" buttonFunc={addSymbol} />
      </View>
      <View style={styles.row}>
        <NumberButton value="4" size="1" buttonFunc={addNumber} />
        <NumberButton value="5" size="1" buttonFunc={addNumber} />
        <NumberButton value="6" size="1" buttonFunc={addNumber} />
        <NumberButton value="-" size="1" buttonFunc={addSymbol} />
      </View>
      <View style={styles.row}>
        <NumberButton value="1" size="1" buttonFunc={addNumber} />
        <NumberButton value="2" size="1" buttonFunc={addNumber} />
        <NumberButton value="3" size="1" buttonFunc={addNumber} />
        <NumberButton value="=" size="1" buttonFunc={addTogether} />
      </View>
      <View style={styles.row}>
        <NumberButton value="0" size="1" buttonFunc={addNumber} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 5
    width: "98%",
  },
  twoCol: {
    flex: 2,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "#fff",
    gap: 3,
    // flex: 4
  },
});
