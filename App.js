import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [guess, setGuess] = React.useState(0);
  const [text, setText] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [num, setNum] = React.useState(Math.floor(Math.random() * 100) + 1);

  const buttonPressed = () => {
    setCount(count + 1)

    if (guess > num) {
      setText("Your guess " + guess + " was too low");

    } else if (guess < num) {
      setText("Your guess " + guess + " was too low");

    } else if (guess == num) {
      Alert.alert("You guessed the number in " + count + " guesses");

    } else {
      Alert.alert("Something went wrong");
    }
  }


  return (
    <View style={styles.container}>
      <Text>
        Guess the random number between 1-100!{'\n'} 
        {'\n'}
        {text}
      </Text>
      <TextInput
        placeholder={'Enter here'}
        style={{ borderColor: 'gray', borderWidth: 1, width: 70, height: 40 }}
        keyboardType='number-pad'
        onChangeText={guess => setGuess(Number(guess))}
        value={guess}
      />
      <Button
        onPress={buttonPressed}
        title="Make a guess"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  }
});

