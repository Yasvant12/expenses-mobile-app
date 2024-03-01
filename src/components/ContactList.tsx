import {
  FlatList,
  Image,
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Contacts from 'react-native-contacts';
import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../utils/Colors';
import {Dropdown} from 'react-native-element-dropdown';
import {Button, TextInput} from 'react-native-paper';
import {MultiSelect} from 'react-native-element-dropdown';

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

type contactProps = NativeStackScreenProps<RootStackParamList, 'contactList'>;
const img='https://cdn-icons-png.flaticon.com/128/3075/3075867.png'
const ContactList = ({route}: contactProps) => {
  const [contact, setContact] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const [selected, setSelected] = useState<string[]>([]);
  const ref = useRef(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    console.log(route,"---->route");
    const parm=route?.params?.selectedIconUrl;
  // useEffect(() => {
  //   const parm = route;
  //   console.log(parm.params,'---->>parms');
  // }, [route]);
  useEffect(() => {
    getPermission();
  }, []);
  const onSelectAll = (isSelectAll = true) => {
    const selectItem: string[] = [];
    if (isSelectAll) {
      contact.forEach((contact: any) => {
        selectItem.push(contact.phoneNumbers[0]);
      });
    }
    setSelected(selectItem);
  };

  const renderSelectAllIcon = () => {
    const isSelectAll = selected.length === contact.length;
    return (
      <TouchableOpacity
        style={styles.wrapSelectAll}
        onPress={() => onSelectAll(!isSelectAll)}>
        <Text style={styles.txtSelectAll}>
          {isSelectAll ? `Unselect All` : 'Select All'}
        </Text>
      </TouchableOpacity>
    );
  };
  const getPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        if (res === 'granted') {
          Contacts.getAll()
            .then(con => {
              // console.log("------>>>",con)
              setContact(con);
              setLoading(true);
            })
            .catch(e => {
              console.log(e);
            });
        }
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  };

  const handleImageClick = () => {
    navigation.navigate('IconPage');
  };

  const renderContactDesing = (item: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          padding: 10,
          alignItems: 'center',
        }}>
        {item.thumbnailPath ? (
          <Image
            style={{height: 40, width: 40, borderRadius: 8}}
            src={item.thumbnailPath}
          />
        ) : (
          <Icon name="phone" size={25} />
        )}
        <View style={{rowGap: 6}}>
          <Text
            style={{
              color: Colors.BLACK,
              fontSize: 19,
              textTransform: 'capitalize',
            }}>
            {item && item.displayName && item.displayName}
          </Text>
          {item.phoneNumbers && item.phoneNumbers[0] && (
            <Text style={{fontWeight: '500'}}>
              {item.phoneNumbers[0].number}
            </Text>
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={{padding: 8}}>
      <View>
        <MultiSelect
          inside
          ref={ref}
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          backgroundColor={'rgba(0,0,0,0.2)'}
          search
          data={contact}
          labelField="displayName"
          valueField="phoneNumbers"
          placeholder="Name,phone"
          searchPlaceholder="Search..."
          searchField="displayName"
          value={selected}
          onChange={items => {
            setSelected(items);
          }}
          selectedStyle={styles.selectedStyle}
          flatListProps={{ListHeaderComponent: renderSelectAllIcon}}
          renderItem={item => renderContactDesing(item)}
        />
      </View>
      <View style={{padding: 60, rowGap: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 9,
          }}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={handleImageClick}>
            {!parm ? (<Image
              source={require('../assets/icons/book.png')}
              style={{width: 37, height: 37}}
            />):(
              <Image source={{ uri: parm }}
              style={{width: 37, height: 37}}
              />
            )}
          </TouchableOpacity>
          <TextInput
            label="Enter description"
            value={description}
            style={{width: '100%', backgroundColor: '#ffffff'}}
            onChangeText={text => setDescription(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 9,
          }}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/icons/rupee.png')}
              style={{width: 37, height: 37}}
            />
          </View>
          <TextInput
            label="0.00"
            value={amount}
            style={{width: '100%', backgroundColor: '#ffffff'}}
            onChangeText={text => setAmount(text)}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          mode="contained"
          style={{
            width: '50%',
            borderRadius: 4,
            backgroundColor: Colors.HALF_BLUE
          }}
          onPress={() => console.log('Pressed')}>
          Split Equally
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 240,
    left: 150,
  },
  selectedStyle: {
    borderRadius: 12,
    fontSize:10,
  },
  wrapSelectAll: {
    alignItems: 'flex-end',
    fontSize: 5,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  txtSelectAll: {
    color: 'blue',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  selectedContactContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    // marginTop: 10,
  },
  container: {
    backgroundColor: 'white',
    // padding: 16,
  },
  dropdown: {
    // margin: 3,
    height: 60,
    borderBottomColor: '#858A8C',
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    // position: 'absolute',
    // backgroundColor: 'white',
    // left: 22,
    // top: 8,
    // zIndex: 999,
    // paddingHorizontal: 8,
    // fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 19,
  },
  selectedTextStyle: {
    fontSize: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  contactImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  contactDetails: {
    marginLeft: 10,
  },
  contactName: {
    color: Colors.BLACK,
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  contactPhoneNumber: {
    fontWeight: '500',
  },
});
export default ContactList;
