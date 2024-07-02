import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const generateRandomNumber = () => {
    const min = parseInt(minValue);
    const max = parseInt(maxValue);
    if (!isNaN(min) && !isNaN(max) && min <= max) {
      setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    } else {
      alert('Please enter valid numbers with min <= max');
    }
  };

  const handleMinValue = (text) => {
    setMinValue(text);
  };

  const handleMaxValue = (text) => {
    setMaxValue(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Random Number Generator In React Native
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={handleMinValue}
        value={minValue}
        placeholder="Min value goes here"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleMaxValue}
        value={maxValue}
        placeholder="Max value goes here"
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={generateRandomNumber}>
        <Text style={styles.buttonText}>
          Generate Random Number
        </Text>
      </TouchableOpacity>
      {
        randomNumber !== null &&
        <Text style={styles.randomNumber}>
          Number is: {randomNumber}
        </Text>
      }
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
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
    fontSize: 24,
    marginBottom: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
