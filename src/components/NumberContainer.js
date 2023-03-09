import { StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/Colors'
import React from 'react'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    conatiner:{
        borderWidth:2,
        borderColor: Colors.ready,
        padding: 10,
        borderRadius:10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number:{
        color: Colors.ready,
        fontSize: 22
    }
})