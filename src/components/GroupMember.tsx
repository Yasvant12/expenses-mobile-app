import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Image} from 'react-native-animatable';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Avatar from '../components/Avatar';
import Fabicon from './FabIcon';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';


import Colors from '../utils/Colors';
import ExpenseCard from './ExpenseCard';
import CardTransaction from './CardTransaction';
import TypeTitleOnly from './TypeTitleOnly';

type MemberProps = NativeStackScreenProps<RootStackParamList, 'member'>;

const GroupMember = ({route}: MemberProps) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const avatarSource = {
    uri: 'https://images.unsplash.com/photo-1682695795255-b236b1f1267d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
  };
     
  return (
    <>
      <ScrollView
        style={{flex: 1, backgroundColor: '#ffffff'}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: height / 2.5,
            backgroundColor: '#81D1F1',
          }}>
          <View style={styles.brandView}>
            <Icon
              name="keyboard-backspace"
              size={28}
              color={Colors.BLACK}
              onPress={navigation.goBack}
            />
            <Text
              style={{fontSize: 19, fontWeight: '600', color: Colors.BLACK}}>
              Expenses
            </Text>
            <Text></Text>
          </View>
          <View style={{marginBottom: height / 15, padding: 10}}>
            <Text
              style={{fontSize: 17, fontWeight: '600', color: Colors.WHITE}}>
              Total Expenses
            </Text>
            <Text
              style={{fontSize: 30, fontWeight: '700', color: Colors.WHITE}}>
              ₹1720
            </Text>
          </View>
        </View>
        {/* Bottom view here */}
        <View style={[styles.BottomView]}>
          <View style={{padding: 20, rowGap: 13}}>
            <Text
              style={{color: Colors.BLACK, fontSize: 20, fontWeight: '600'}}>
              Manali Trip
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={styles.container}>
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=600',
                  }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                {route.params ? (
                  <>
                    {route.params &&
                      route.params.selectedNumber.map((item, id) => {
                        return <Avatar key={id} source={avatarSource} />;
                      })}
                  </>
                ) : (
                  <Text>No expenses added here yet</Text>
                )}
              </View>
              {/* <View> */}
              {/* <Icon2 name='plus-circle-outline'  size={35} color={'#14A3DD'}/> */}
              {/* </View> */}
              {/* <Text></Text> */}
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: height / 20,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: '500', color: Colors.BLACK}}>
                Your're the only one here!
              </Text>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  navigation.navigate('addGroupMember');
                }}>
                <View
                  style={{
                    backgroundColor: '#A0D9F0',
                    borderRadius: 50,
                    padding: 7,
                  }}>
                  <Icon1 name="group-add" size={26} color="#12A7E2" />
                </View>
                <Text style={styles.buttonText2}>Add group members</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity style={styles.button2}>
                  <View
                    style={{
                      backgroundColor: '#A0D9F0',
                      borderRadius: 50,
                      padding: 6,
                      alignItems: 'center',
                    }}>
                    <Icon1 name="share" size={26} color="#12A7E2" />
                  </View>
                  <Text style={styles.buttonText2}>Share group links</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* <View>
          <ScrollView
            style={{
              height: height / 1.8,
              padding: 7,
            }}
            nestedScrollEnabled={true}
            >
            <TypeTitleOnly
              dateRange="Today"
              typeTitleOnlyPosition="absolute"
              typeTitleOnlyTop={172}
              typeTitleOnlyLeft={0}
              typeTitleOnlyWidth={375}
              typeTitleOnlyHeight={48}
            />
            <CardTransaction
              itemCode={require('../assets/icons/cart.png')}
              categoryTypeText="Shopping"
              itemDescription="Buy some grocery"
              discountAmount="- $120"
              timeSlotText="10:00 AM"
            />
            <CardTransaction
              itemCode={require('../assets/icons/bill.png')}
              categoryTypeText="Subscription"
              itemDescription="Disney+ Annual.."
              discountAmount="- $80"
              timeSlotText="03:30 PM"
              propTop={317}
              propBackgroundColor="#eee5ff"
              propColor="#fd3c4a"
            />
            <CardTransaction
              itemCode={require('../assets/icons/cart.png')}
              categoryTypeText="Shopping"
              itemDescription="Buy some grocery"
              discountAmount="- $120"
              timeSlotText="10:00 AM"
            />
            <TypeTitleOnly
              dateRange="Yesterday"
              typeTitleOnlyPosition="absolute"
              typeTitleOnlyTop={503}
              typeTitleOnlyLeft={0}
              typeTitleOnlyWidth={375}
              typeTitleOnlyHeight={48}
            />
            <CardTransaction
              itemCode={require('../assets/icons/income.png')}
              categoryTypeText="Salary"
              itemDescription="Salary for July"
              discountAmount="+ 5000"
              timeSlotText="04:30 PM"
              propTop={551}
              propBackgroundColor="#cffaea"
              propColor="#00a86b"
            />
            <CardTransaction
              itemCode={require('../assets/icons/income.png')}
              categoryTypeText="Salary"
              itemDescription="Salary for July"
              discountAmount="+ 5000"
              timeSlotText="04:30 PM"
              propTop={551}
              propBackgroundColor="#cffaea"
              propColor="#00a86b"
            />
          </ScrollView>
        </View> */}
      </ScrollView>

      <Fabicon
        onPress={() => navigation.navigate('addExpense')}
        fabStyle={styles.fab}
      />
    </>
  );
};

export default GroupMember;

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 7,
    flexDirection: 'row',
  },
  container: {
    width: 80,
    height: 80,
    borderRadius: 55,
    marginRight: 23,
  },
  button2: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#ffffff',
    width: '83%',
    alignItems: 'center',
    marginTop: 17,
  },
  buttonText2: {
    color: '#0D8AB4',
    fontSize: 18,
    fontWeight: '400',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  BottomView: {
    // flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  fab: {
    position: 'absolute',
    width: width / 2.5,
    right: 0,
    bottom: width / 4.4,
    // top: height / 4.5,
    backgroundColor: Colors.HALF_BLUE,
    // color: 'red',
  },
});
