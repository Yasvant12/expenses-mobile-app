import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../utils/Colors';
import Fabicon from '../../components/FabIcon';
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from '../../../GlobalStyle';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {colors} from '../../utils/Them';
import LineStyle from '../../components/LineStyle';
var letters = [
  '#E0F3FFFF',
  '#FFEBF2FF',
  '#E1E0FFFF',
  '#F2FFEDFF',
  '#0000FF14',
  '#FFE92614',
  '#FFE0FEFF',
  '#DBFCFFFF',
  '#FFF5F5FF',
  '#DEF5FFFF',
];
export const renderActivityList = (item: any) => {
  return (
    <View style={[styles.row, {backgroundColor: letters[item.id]}]}>
      <View style={[styles.rowIcon, {backgroundColor: '#007afe'}]}>
        <FeatherIcon color="#fff" name="moon" size={20} />
      </View>
      <View>
        <View
          style={{flexDirection: 'row', columnGap: 4, alignItems: 'center'}}>
          <Text style={styles.rowLabel}>Yasvant</Text>
          <Text>added</Text>
          <Text style={{fontSize: 16, color: Colors.BLACK}}>Dinner</Text>
        </View>
        <Text style={{fontSize: 12, color: '#B9B2B1'}}>
          3 days ago,10:59 pm
        </Text>
      </View>

      <View style={styles.rowSpacer} />
      <View style={{flexDirection: 'row', columnGap: 10, alignItems: 'center'}}>
        <View>
          <Text style={{fontSize:13}}>You owe</Text>
          <Text style={{fontSize:13}}>₹230.00</Text>
        </View>
        <View>
          <View
            style={[
              styles.rowIcon,
              {
                backgroundColor:item.id % 2 === 0 ?'#F07063' : 'green',
                marginRight: 0,
                width: 26,
                height: 26,
              },
            ]}>
            {item.id % 2 === 0 ?(<FeatherIcon color="#fff" name="arrow-down" size={20} />):(
              <FeatherIcon color="#fff" name="arrow-up" size={20} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
export const data = [
  {
    id: '1',
    name: 'Golden curry...',
    date: '8 days ago,10:59 pm',
    address: 'Hajipur-844102',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2: '',
    description:
      ' Via the irruka app. Totally i received 11 enquiries and Today igot 5 candidates from irrukka app team',
    color: '#8CD0EC',
  },
  {
    id: '2',
    name: 'Sujith',
    date: 'a days ago',
    address: 'coimbatore-641666',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2:
      'https://as2.ftcdn.net/v2/jpg/04/01/73/39/1000_F_401733994_Ix4Tycd6qvyKQZ8Rwllc98CSTD9Bpiwy.jpg',
    description: ' this is this',
    color: '#7DA9DD',
  },
  {
    id: '3',
    name: 'Sri Kumarn Labels',
    date: '2 days ago',
    address: 'Perumanallur-641666',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2: '',
    description:
      'it is a general coders minght and could be for the right and right',
    color: '#B6C2EC',
  },
  {
    id: '4',
    name: 'BaBa clothing solution',
    date: 'few min ago',
    address: '28/7,Tiruppur- 641603',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2:
      'https://as1.ftcdn.net/v2/jpg/04/01/73/40/1000_F_401734018_ZkyWdeVqNuhY0oh2W6buTKJIOgVVo4ED.jpg',
    description: 'dedicated worked we had seen over there!!!!',
    color: '#D2B6EC',
  },
  {
    id: '5',
    name: 'Golden curry...',
    date: '8 days ago',
    address: 'Hajipur-844102',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2: '',
    description:
      ' Via the irruka app. Totally i received 11 enquiries and Today igot 5 candidates from irrukka app team',
    color: '#BE88F1',
  },
  {
    id: '6',
    name: 'Sujith',
    date: 'a days ago',
    address: 'coimbatore-641666',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2:
      'https://as2.ftcdn.net/v2/jpg/04/01/73/39/1000_F_401733994_Ix4Tycd6qvyKQZ8Rwllc98CSTD9Bpiwy.jpg',
    description: ' this is this',
    color: '#E6ABF0',
  },
  {
    id: '7',
    name: 'Sri Kumarn Labels',
    date: '2 days ago',
    address: 'Perumanallur-641666',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2: '',
    description:
      'it is a general coders minght and could be for the right and right',
    color: '#F0ABEA',
  },
  {
    id: '8',
    name: 'BaBa clothing solution',
    date: 'few min ago',
    address: '28/7,Tiruppur- 641603',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2:
      'https://as1.ftcdn.net/v2/jpg/04/01/73/40/1000_F_401734018_ZkyWdeVqNuhY0oh2W6buTKJIOgVVo4ED.jpg',
    description: 'dedicated worked we had seen over there!!!!',
    color: '#F3B3DF',
  },
  {
    id: '9',
    name: 'Sujith',
    date: 'a days ago',
    address: 'coimbatore-641666',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2:
      'https://as2.ftcdn.net/v2/jpg/04/01/73/39/1000_F_401733994_Ix4Tycd6qvyKQZ8Rwllc98CSTD9Bpiwy.jpg',
    description: ' this is this',
    color: '#F6EEA3',
  },
  {
    id: '10',
    name: 'Sri Kumarn Labels',
    date: '2 days ago',
    address: 'Perumanallur-641666',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2: '',
    description:
      'it is a general coders minght and could be for the right and right',
    color: '#F6D4A3',
  },
  {
    id: '11',
    name: 'BaBa clothing solution',
    date: 'few min ago',
    address: '28/7,Tiruppur- 641603',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2:
      'https://as1.ftcdn.net/v2/jpg/04/01/73/40/1000_F_401734018_ZkyWdeVqNuhY0oh2W6buTKJIOgVVo4ED.jpg',
    description: 'dedicated worked we had seen over there!!!!',
    color: '#FBBA95',
  },
  {
    id: '12',
    name: 'BaBa clothing solution',
    date: 'few min ago',
    address: '28/7,Tiruppur- 641603',
    image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    image2:
      'https://as1.ftcdn.net/v2/jpg/04/01/73/40/1000_F_401734018_ZkyWdeVqNuhY0oh2W6buTKJIOgVVo4ED.jpg',
    description: 'dedicated worked we had seen over there!!!!',
    color: '#FBBA95',
  },
];
const UserActivity = () => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <View style={styles.headerContainer}>
        <Icon name="search" size={20} color="black" />
      </View>
      <LineStyle />
      <View style={{padding: 13}}>
        <Text
          style={{fontSize: 23, color: Colors.DARK_BLACK, fontWeight: '500',height:30}}>
          Activity
        </Text>
      </View>

      <View style={{padding: Dimensions.get('screen').width / 26}}>
        <FlatList
          data={data}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => renderActivityList(item)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  activityContainer: {
    flexDirection: 'row',
    gap: 10,
    // justifyContent:'center',
    alignItems: 'center',
    padding: 13,
  },

  container: {
    // flex: 1,
    position: 'relative',
  },
  fullImage: {
    // flex: 1,
    width: 60,
    height: 60,
  },
  circularImage: {
    position: 'absolute',
    top: 40,
    left: 34,
    // bottom: 16,
    // right: 95,
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 60,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },

});
export default UserActivity;
