import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EmptyList = ({ message }:any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/empty.png')} />
      <Text style={styles.text}>{message || 'Data not found'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    // Add any additional styles for the image
  },
  text: {
    fontWeight: 'bold',
    color: '#888',
    // Add any additional styles for the text
  },
});

export default EmptyList;
