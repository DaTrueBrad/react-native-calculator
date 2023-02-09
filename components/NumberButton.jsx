import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function NumberButton(props) {
  const styles = StyleSheet.create({

    numberButton: {
      // aspectRatio: "1 / 1",
      flex: props.size,
      height: 80,
      backgroundColor: "#232323",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      textAlignVertical: "center",
      textAlign: "center",
      fontSize: 30,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 3,
      shadowRadius: 3
    },
    numberText: {
      color: "white",
      fontSize: 35
    }
  })
  return (
    <Pressable style={styles.numberButton} onPress={() => props.buttonFunc(props.value)}>
      <Text style={styles.numberText}>{props.value}</Text>
    </Pressable>
  );
}

  