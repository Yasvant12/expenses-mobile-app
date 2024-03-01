import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../utils/Colors';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';
import {TextInput} from 'react-native-paper';
import LineStyle from '../../components/LineStyle';
import ContactList from '../../components/ContactList';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'login'>;

const AddExpense = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', gap: 20}}>
          <Icon1
            name="arrow-left"
            size={25}
            color={'#000000'}
            onPress={() => navigation.goBack()}
          />
          <Text style={{color: Colors.BLACK, fontWeight: '500', fontSize: 20}}>
            Add Expenses
          </Text>
        </View>

        <Icon
          name="done"
          size={25}
          color={'#000000'}
          onPress={() => console.log('looged-->')}
        />
      </View>
      <LineStyle />
      <ContactList />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#ffffff',
    padding: 7,
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    height: 80,
    width: 80,
    marginLeft: 30,
    marginTop: 10,
  },
  fullImage: {
    width: 80,
    height: 80,
    // borderRadius: 80 / 2,
    objectFit: 'cover',
  },
});

export default AddExpense;
