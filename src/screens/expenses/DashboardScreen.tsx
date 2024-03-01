import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import Fabicon from '../../components/FabIcon';
import Colors from '../../utils/Colors';
import {FlatList} from 'react-native';
import EmptyList from '../../utils/EmptyList';
import randomImage from '../../utils/randomImage';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

type dashboardProps = NativeStackScreenProps<RootStackParamList, 'group'>;
const items = [
  {id: 1, place: 'Room expense', country: ''},
  {id: 2, place: 'office team', country: ''},
  {id: 3, place: 'Manali trip', country: ''},
  {id: 4, place: 'Train travel', country: ''},
  {id: 5, place: 'Washington dc', country: ''},
  {id: 6, place: 'New york', country: ''},
];

const DashboardScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleFabPress = () => {
    navigation.navigate('addExpense');
  };
  useEffect(() => {
    retrieveGroup();
  }, []);
  const retrieveGroup = async () => {
    try {
      const dataString = await AsyncStorage.getItem('GroupName');
      if (dataString) {
        const data = JSON.parse(dataString);
        console.log('Retrieved data:', data);
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const rendarLine = () => <View style={styles.lineStyle} />;
  const renderHeaderIcon = () => (
    <View style={styles.headerContainer}>
      <Icon name="search" size={20} color="black" />

      <Icon1
        name="group-add"
        size={26}
        color="black"
        onPress={() => navigation.navigate('group')}
      />
    </View>
  );

  const renderImage = () => (
    <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
      <Image
        style={{width: width / 1, height: height / 3.5}}
        source={require('../../assets/images/undraw/TeamSheet.png')}
      />
      <Text style={{width: 280, fontSize: 18, textAlign: 'center'}}>
        Expenses groups you create or are added to will show here.
      </Text>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate('group')}>
        <Icon1 name="group-add" size={26} color={Colors.HALF_BLUE} />
        <Text style={styles.buttonText2}>Start a new group</Text>
      </TouchableOpacity>
    </View>
  );
  const renderGroupList = () => {
    return (
      <>
        <View style={{flex: 1}}>
          {/* here the two view is showing expenses and the geeting data */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
            }}>
            <LinearGradient
              style={{borderRadius: 10}}
              colors={['#26D8ED', '#81D1F1']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <View style={styles.box}>
                <Text style={styles.txtBox}>Owed you</Text>
                <Text style={styles.txtBox}>₹ {'2000'}</Text>
              </View>
            </LinearGradient>
            <LinearGradient
              style={{borderRadius: 10}}
              colors={['#6BEEE8', '#26A5A0']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              // style={{flex: 1}}
            >
              <View style={styles.box}>
                <Text style={styles.txtBox}>You owed</Text>
                <Text style={styles.txtBox}>₹ {'2000'}</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{paddingHorizontal: 16, marginVertical: 12}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {/* Recent created groups */}
              </Text>
            </View>
            <View style={{height: 430}}>
              <FlatList
                data={items}
                numColumns={2}
                ListEmptyComponent={
                  <EmptyList message={"You haven't recorded any trips yet"} />
                }
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{
                  justifyContent: 'space-between',
                }}
                contentContainerStyle={{marginHorizontal: -4}}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('member')}
                    style={{
                      backgroundColor: 'white',
                      padding: 12,
                      borderRadius: 20,
                      marginBottom: 12,
                      elevation: 2,
                    }}>
                    <View>
                      <Image
                        source={randomImage()}
                        style={{width: 120, height: 120, marginBottom: 8}}
                      />
                      <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {item.place}
                      </Text>
                      {/* <Text style={{fontSize: 12}}>{item.country}</Text> */}
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          {renderAddButton()}
        </View>
      </>
    );
  };
  const renderAddButton = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('group')}>
          <Icon1 name="group-add" size={26} color={Colors.HALF_BLUE} />
          <Text style={styles.buttonText2}>Start a new group</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {renderHeaderIcon()}
      {rendarLine()}

      <Text
        style={{
          color: '#2a353a',
          fontSize: 19,
          fontWeight: '500',
          margin: 10,
        }}>
        Welcome to expenses, Yasvant!
      </Text>

      {/* {renderImage()} */}
      {renderGroupList()}
      <Fabicon onPress={handleFabPress} fabStyle={styles.fab} />
      {/* {renderAddButton()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.2,
  },
  headerContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: width / 10,
    padding: width / 50,
    top: 6,
  },
  button2: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#ffffff',
    padding: 7,
    borderRadius: 5,
    width: '63%',
    alignItems: 'center',
    borderColor: Colors.HALF_BLUE,
    borderWidth: 2,
    marginTop: 20,
  },
  buttonText2: {
    color: Colors.HALF_BLUE,
    fontSize: 18,
    fontWeight: '400',
  },
  fab: {
    position: 'absolute',
    width: width / 2.5,
    right: 0,
    // top: height / 4.5,
    backgroundColor: Colors.HALF_BLUE,
    bottom: height / 18.5,
    // color: 'red',
  },
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  box: {
    padding: 35,
    borderRadius: 50,
  },
  txtBox: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default DashboardScreen;
