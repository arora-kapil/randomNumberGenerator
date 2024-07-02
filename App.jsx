import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [randomNumber, setRandomNumber] = useState()

  const generateRandomNumber = () => {
    const min = 1;
    const max = 100;
    setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Random Number Generator In React Native
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={generateRandomNumber}>
        <Text style={styles.buttonText}>
          Random Number
        </Text>
      </TouchableOpacity>
      {
        randomNumber &&
        <Text style={styles.randomNumber}>
          Number is: {randomNumber}
        </Text>
      }
    </View>)
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  randomNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
    color: "green",
    fontWeight: 'bold',
  }
});