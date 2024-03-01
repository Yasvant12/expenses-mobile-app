import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Colors from '../../utils/Colors';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').height;
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
type groupMembersProps = NativeStackScreenProps<
  RootStackParamList,
  'VerificationContact'
>;
const profiles = [
  {id: 1, name: 'John Doe', image: 'https://example.com/john.jpg'},
  {id: 2, name: 'Jane Doe', image: 'https://example.com/jane.jpg'},
  // Add more profiles as needed
];

const ProfileListItem = ({profile}: any) => {
  return (
    <View style={styles.listItem}>
      {profile.thumbnailPath ? (
        <Image
        style={styles.avatar}
          src={profile.thumbnailPath}
        />
      ) : (
        <Image
          source={require('../../assets/icons/user2.png')}
          style={styles.avatar}
        />
      )}

      <View style={styles.textContainer}>
        <Text style={styles.name}>{profile.displayName}</Text>
        {profile.phoneNumbers && profile.phoneNumbers[0] && (
          <Text style={{fontWeight: '500'}}>
            {profile.phoneNumbers[0].number}
            {'@phone.com'}
          </Text>
        )}
        {/* <Text>{'@phone.com'}</Text> */}
      </View>
      <FeatherIcon color="#000000" name="edit" size={26} />
    </View>
  );
};

const VerificationContactInfo = ({route,navigation}: groupMembersProps) => {
    const [number,setNumber]=useState<any>([]);
  const par = route?.params?.selectedNumber;
  useEffect(()=>{
    setNumber(route?.params?.selectedNumber);
  },[])


  const AddGroupMember=()=>{
    Alert.alert(' ', 'Your new group member have been added')
    navigation.navigate('member',{
        selectedNumber:number,
      });
  }

  return (
    <>
      <View style={{flex: 1, marginTop: 30}}>
        {par && par?.map((data, id) => (
          <ProfileListItem key={id} profile={data} />
        ))}
        <Text style={{textAlign: 'center', padding: 17, fontSize: 14}}>
          These people will be notified you've added them to your group.you can
          start adding expenses right away.
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.finishButton} onPress={()=>AddGroupMember()}>
          <Text style={{color: '#ffffff', fontSize: 18, fontWeight: '600'}}>
            Finish
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
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
    fontWeight: '600',
  },
  finishButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.HALF_BLUE,
    margin: 10,
    borderRadius: 8,
    height: 47,
    elevation: 5,
  },
});
export default VerificationContactInfo;
