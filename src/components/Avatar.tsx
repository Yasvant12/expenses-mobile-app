import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const Avatar = ({ source }:any) => {
   return (
    <View style={styles.container}>
      <Image source={source} style={styles.avatar} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 25,
    overflow: 'hidden',
    marginLeft:-7
  },
  avatar: {
    flex: 1,
    width: '100%', // Take up the full width of the container
    height: '100%', // Take up the full height of the container
  },
});

export default Avatar;
