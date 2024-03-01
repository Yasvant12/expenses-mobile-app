import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const SettledUp = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={{fontSize: 30}}>
        Hiding friends that have been settled up over one month.
      </Text>
      <TouchableOpacity style={styles.button2}>
        <Icon1 name="group-add" size={26} color="#0D8AB4" />
        <Text style={styles.buttonText2}>Show 10 settled-up friends</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    lineStyle: {
      borderWidth: 0.8,
      borderColor: '#CECAC9',
      marginTop: 10,
    },
    headerContainer: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      gap: 18,
      padding: 13,
    },
    headerIcon: {
      width: 28,
      height: 28,
    },
    button2: {
      flexDirection: 'row',
      gap: 10,
      backgroundColor: '#ffffff',
      padding: 7,
      borderRadius: 5,
      width: '63%',
      alignItems: 'center',
      borderColor: '#0D8AB4',
      borderWidth: 2,
      marginTop: 20,
    },
    buttonText2: {
      color: '#0D8AB4',
      fontSize: 18,
      fontWeight: '400',
    },
    container: {
      flex: 1,
      marginTop: 40,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // marginVertical: 10,
      // marginHorizontal: 20,
      padding: 17,
      // borderRadius: 10,
      // backgroundColor: '#e0e0e0',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    profit: {
      color: 'green',
    },
    loss: {
      color: 'red',
    },
    footerContainer:{
      padding:10
    }
  });
export default SettledUp;
