import {
  Dimensions,
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
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ActivityIndicator, Button, FAB, TextInput} from 'react-native-paper';
import LineStyle from '../../components/LineStyle';
import Colors from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
type groupMembersProps = NativeStackScreenProps<
  RootStackParamList,
  'addGroupMember'
>;
const AddGroupMember = ({route, navigation}: groupMembersProps) => {
  const [contact, setContact] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState<string[]>([]);
  const [selectedContacts, setSelectedContacts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // const parm = route?.params?.selectedIconUrl;

  useEffect(() => {
    getPermission();
  }, []);

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
  const handleContactSelection = (contact: any) => {
    // Check if the contact is already selected
    if (
      !selectedContacts.find(
        selectedContact => selectedContact.recordID === contact.recordID,
      )
    ) {
      setSelectedContacts(prevSelectedContacts => [
        ...prevSelectedContacts,
        contact,
      ]);
    }
  };

  const renderContactDesing = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleContactSelection(item)}
        style={{
          flexDirection: 'row',
          gap: 15,
          padding: 10,
          alignItems: 'center',
        }}>
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
      </TouchableOpacity>
    );
  };
  // Handling the selected contact ui
  const renderSelectedContacts = () => {
    return (
      <View style={{flexDirection: 'row', padding: 6}}>
        {selectedContacts.map(selectedContact => (
          <View
            key={selectedContact.recordID}
            style={{
              alignItems: 'center',
              marginRight: 16,
            }}>
            {selectedContact.thumbnailPath ? (
              <Image
                style={{height: 40, width: 40, borderRadius: 8, marginRight: 8}}
                src={selectedContact.thumbnailPath}
              />
            ) : (
              <Image
                style={{height: 40, width: 40, borderRadius: 8, marginRight: 8}}
                source={require('../../assets/icons/user2.png')}
              />
            )}
            <Text>{selectedContact.displayName.split(' ')[0]}</Text>
          </View>
        ))}
      </View>
    );
  };
  return (
    <View style={{padding: 8}}>
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 10}}>
        <TouchableOpacity>
          <FeatherIcon color="#000000" name="arrow-left" size={26} />
        </TouchableOpacity>
        <TextInput
          label="Search Contacts"
          value={searchQuery}
          onChangeText={query => setSearchQuery(query)}
          style={{
            marginBottom: 16,
            backgroundColor: '#ffffff',
            width: 300,
            height: 60,
          }}
        />
      </View>
      <View>
        <Text>Selected Contacts:</Text>
        {renderSelectedContacts()}
        <LineStyle />
      </View>
      <View>
        <FAB
          style={styles.fab}
          onPress={() =>
            navigation.navigate('VerificationContact', {
              selectedNumber: selectedContacts,
            })
          }
          label="Add"
          uppercase
          color="#ffffff"
        />
      </View>
      {!loading ? (
        <ActivityIndicator
          style={styles.loader}
          size="large"
          color={Colors.HALF_BLUE}
        />
      ) : (
        <View>
          <FlatList
            // data={contact.filter(item =>
            //   item.displayName
            //     .toLowerCase()
            //     .includes(searchQuery.toLowerCase()),
            // )}
            data={contact}
            keyExtractor={item => item.recordID}
            renderItem={({item}) => renderContactDesing(item)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    left: height / 3,
    top: height / 1.6,
    zIndex: 500,
    backgroundColor: Colors.HALF_BLUE,
  },
  loader: {
    position: 'absolute',
    top: 240,
    left: 150,
  },
  icon: {
    marginRight: 5,
  },
});
export default AddGroupMember;
