import { Button, StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import React from 'react'

const GameScreen = ({userOption}) => {

    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum;
        }
    };
    const [currentGuess, setCurrentGuess] = React.useState(generateRandomBetween(1, 100, userOption));

  return (
    <View style={styles.screen}>
      <Text>El numero del oponente es:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text>Tu numero es mayor o menor?</Text>
      <Card style={styles.buttonContainer}>
        <Button title='MAYOR' onPress={() => {}}/>
        <Button title='MENOR'onPress={() => {}}/>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        padding: 10,
        maxWidth:'80%'
    }
})