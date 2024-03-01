import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utils/Colors';
import SettledUp from './SettledUp';
import Fabicon from '../../components/FabIcon';
import LineStyle from '../../components/LineStyle';
import FeatherIcon from 'react-native-vector-icons/Feather';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const renderItem = ({item}: any) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={[styles.rowIcon, {backgroundColor: Colors.HALF_BLUE}]}>
        <Image source={item.image} style={{height: 22, width: 22}} />
      </View>

      <Text style={styles.rowLabel}>Mohan kumar</Text>

      <View style={styles.rowSpacer} />
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:12,color:Colors.HALF_RED}}>You owe</Text>
        <Text style={{fontSize:13,color:Colors.HALF_RED}}>₹ 130.00</Text>
      </View>
    </TouchableOpacity>
  );
};

const data = [
  {
    id: '1',
    name: 'John Doe',
    image: require('../../assets/images/user.png'),
    profitLoss: -500,
  },
  {
    id: '2',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '3',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '4',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '5',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '6',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '7',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '8',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '9',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '10',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '11',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '12',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '13',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
  {
    id: '14',
    name: 'Jane Smith',
    image: require('../../assets/images/user.png'),
    profitLoss: 1000,
  },
];

const FrindsList = () => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <View style={styles.headerContainer}>
        <Icon name="search" size={20} color="black" />
        <Icon1 name="person-add-alt-1" size={26} color="black" />
      </View>
      <LineStyle />

      {/* <Fabicon onPress={console.log('pressed')}/> */}
      <View style={{marginHorizontal:8,marginVertical:7}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
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
    gap: width / 10,
    padding: width / 50,
    top: 6,
  },
  headerIcon: {
    width: 28,
    height: 28,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 15,
    // backgroundColor: '#e0e0e0c4',
    backgroundColor:
      'linear-gradient(90deg, rgba(39,114,203,0.23862044817927175) 0%, rgba(45,81,185,0.5551470588235294) 50%, rgba(18,16,221,1) 94%)',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
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
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLabel1: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ababab',
    marginRight: 4,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowLabelLogout: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#dc2626',
  },
});

export default FrindsList;
