import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ButtonContainer from "./components/ButtonContainer";
import Results from "./components/Results";

export default function App() {
  const [calculator, setCalculator] = useState("")
  const [results, setResults] = useState("")

  const addNumber = (newNum) => {
    setCalculator(calculator + newNum)
    if(results.length !== 0) {
      setResults("")
    }
  }

  const addSymbol = (symbol) => {
    setCalculator(calculator + " " + symbol + " ")
    if(results.length !== 0) {
      setResults("")
    }
  }
  const addTogether = () => {
    let final = eval(calculator)
    setResults(final)
    setCalculator(final)
  }
  const clearDisplay = () => {
    setResults("")
    setCalculator("")
  }
  return (
    <SafeAreaView style={styles.page}>
      <Results
        calculator={calculator}
        results={results}
      />
      <ButtonContainer
        addNumber={addNumber}
        addSymbol={addSymbol}
        addTogether={addTogether}
        clearDisplay={clearDisplay}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    backgroundColor: "#303030",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: "80%",
    height: 70
  }
});
