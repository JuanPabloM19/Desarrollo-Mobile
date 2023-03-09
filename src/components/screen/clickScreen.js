import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import React from 'react'

const ClickScreen = () => {

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Comenzar Juego</Text>
      </View>
  )
}

export default ClickScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    ...titleStyle,
  },
})