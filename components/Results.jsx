import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Results({calculator, results}) {
  return (
    <View style={styles.resultsContainer}>
      <Text style={styles.results}>{results.length === 0 ? calculator : results}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resultsContainer: {
    width: "98%",
    backgroundColor: "#232323",
    borderRadius: 10,
    padding: 5,
    height: 80,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'flex-end',
    shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 100,
      shadowRadius: 4
  },
  results: {
    fontSize: 40,
    color: 'white'
  }
})