import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [guess, setGuess] = useState(0);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const getRandomNum = () => {
    setNum(Math.floor(Math.random() * 100) + 1);
    console.log(num);
  }

  const buttonPressed = () => {
    setCount(count + 1)

    if (guess > num) {
      console.log("The guess was too high") 
      setText=("Your guess " + guess + "was too low");
    } 
    if (guess < num) {
      console.log("The guess was too low") 
      setText=("Your guess " + guess + "was too low");
    } 
    if (guess == num) {
      Alert.alert("You guessed the number in " + count + " guesses");
    }

  };


  return (
    <View style={styles.container}>
      <Button
        onPress={getRandomNum}
        title="Generate the number"
      />
      <Text value={text}>
        {'\n'}Guess the random number between 1-100!{'\n'} 
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

