import { Button, StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card';
import React from 'react'

const Homescreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Bienvenido a tu tienda</Text>
    </View>
  )
}

export default Homescreen

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
        maxWidth:'80%'
    }
})