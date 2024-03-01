import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors';

const LineStyle = () => {
  return (
    <View>
     <View style = {styles.lineStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
    lineStyle:{
          borderWidth: 0.5,
          borderColor:Colors.HALF_BLACK,
     }
   });

export default LineStyle