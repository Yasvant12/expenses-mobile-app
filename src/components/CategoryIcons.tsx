// IconPage.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import Colors from '../utils/Colors';


type iconProps = NativeStackScreenProps<RootStackParamList, 'IconPage'>;
const IconPage = ({navigation}: iconProps) => {
  const categories = [
    {
      name: 'Entertainment',
      color:'#C2DFFF',
      icons: [
        {
          name: 'Games',
          url:'https://cdn-icons-png.flaticon.com/128/686/686589.png',
        },
        {
          name: 'Movies',
          url: 'https://cdn-icons-png.flaticon.com/128/1179/1179120.png',
        },
      ],
    },
    {
      name: 'Food and drink',
      color:'#F0F8FF',
      icons: [
        {
          name: 'Groceceries',
          url: 'https://cdn-icons-png.flaticon.com/128/10414/10414380.png',
        },
        {
          name: 'Dining out',
          url: 'https://cdn-icons-png.flaticon.com/128/4223/4223218.png',
        },
        // Add more icons as needed
      ],
    },
    {
      name: 'Home',
      color:'#40E0D0',
      icons: [
        {
          name: 'Rent',
          url: 'https://cdn-icons-png.flaticon.com/128/1441/1441242.png',
        },
        {
          name: 'Mortgage',
          url: 'https://cdn-icons-png.flaticon.com/128/4221/4221578.png',
        },
      ],
    },
    {
      name: 'Life',
      color:"#A0D6B4",
      icons: [
        {
          name: 'Insurence',
          url: 'https://cdn-icons-png.flaticon.com/128/2966/2966334.png',
        },
        {
          name: 'Clothing',
          url: 'https://cdn-icons-png.flaticon.com/128/2966/2966334.png',
        },
      ],
    },
    {
      name: 'Transportation',
      color:'#F0FFF0',
      icons: [
        {
          name: 'Parking',
          url: 'https://cdn-icons-png.flaticon.com/128/2830/2830180.png',
        },
        {
          name: 'Car',
          url: 'https://cdn-icons-png.flaticon.com/128/2736/2736918.png',
        },
      ],
    },
    {
      name: 'Uncategorized',
      color:'#FFEBCD',
      icons: [
        {
          name: 'General',
          url: 'https://cdn-icons-png.flaticon.com/128/13632/13632007.png',
        },
      ],
    },
    {
      name: 'Utilities',
      color:'#BCB88A',
      icons: [
        {
          name: 'Electricity',
          url: 'https://cdn-icons-png.flaticon.com/128/780/780500.png',
        },
        {
          name: 'water',
          url: 'https://cdn-icons-png.flaticon.com/128/824/824188.png',
        },
      ],
    },
  ];

  const handleIconClick = (iconUrl:any) => {
    console.log('URl', iconUrl);
    // Pass the selected icon URL back to the previous screen
    navigation.navigate('contactList', {selectedIconUrl: iconUrl});
  };
 const img='../assets/icons/book.png';
  return (
    <ScrollView>
      <View style={{padding: 13}}>
        {categories.map(category => (
          <View key={category.name} style={{paddingTop: 10}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              {category.name}
            </Text>
            {category.icons.map(icon => (
              <View
                style={{
                  flexDirection: 'row',
                  //   justifyContent: 'center',
                  alignItems: 'center',
                  gap: 9,
                }}>
                  
                <View style={styles.imageContainer}>
                  <TouchableOpacity onPress={(iconUrl)=>handleIconClick(icon.url)} style={{padding:5,backgroundColor:category.color}}>
                    <Image
                      source={{ uri: icon.url }}
                      style={{width: 37, height: 37,tintColor:'#000000'}}
                    />
                  </TouchableOpacity>
                  <Text>{icon.name}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    gap:8,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
});

export default IconPage;
