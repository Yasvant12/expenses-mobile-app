import React from 'react';
import {View, Text, Image} from 'react-native';
import {categoryBG, colors} from '../utils/Them';
import Colors from '../utils/Colors';

export default function ExpenseCard({item}) {
  return (
    <View
      style={{
        backgroundColor: categoryBG[item.category],
        padding: 15,
        marginVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center',columnGap:5}}>
        <Text style={{textAlign: 'center', width: 40}}>Feb 20</Text>
        <Image
          source={require('../assets/icons/book.png')}
          style={{width: 30, height:30}}
        />
        <View>
          <Text style={{color: colors.heading, fontWeight: 'bold'}}>
            {item.title}
          </Text>
          <Text style={{color: colors.heading, fontSize: 12}}>
            {'You paid $5000'}
          </Text>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: '500', color: Colors.BLACK}}>
          {'You lent'}
        </Text>
        <Text>${item.amount}</Text>
      </View>
    </View>
  );
}
