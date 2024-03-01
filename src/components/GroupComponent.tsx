import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../utils/Colors';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
type MemberProps = NativeStackScreenProps<RootStackParamList, 'member'>;

const GroupComponent = () => {
  const [text, setText] = React.useState('');
  const [selectedImage, setSelectedImage] = useState({uri: ''});
  const [img, setimg] = useState(false);

  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      setSelectedImage({uri: image.path});
      setimg(true);
      // Handle the picked image, e.g., upload it to a server
      console.log(image);
    } catch (error) {
      console.error(error);
    }
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const createGroup = async () => {
    if (text === '') {
      Alert.alert(' ', "You haven't entered a name for your group yet!");
    } else {
      try {
        // Retrieve existing groups or initialize an empty array
        const existingGroupsString = await AsyncStorage.getItem('Groups');
        const existingGroups = existingGroupsString
          ? JSON.parse(existingGroupsString)
          : [];

        // Add the new group to the array
        const newGroup = {image: selectedImage, text: text};
        existingGroups.push(...existingGroups,{newGroup});

        // Save the updated array back to AsyncStorage
        await AsyncStorage.setItem('Groups', JSON.stringify(existingGroups));
        console.log('Data stored successfully!');
        navigation.navigate('member',{groupName:text,GroupImage:text});
      } catch (error) {
        console.error('Error storing data:', error);
      }
    }
  };

  return (
    <View style={{backgroundColor: '#ffffff', paddingBottom: 300}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('dashboardNaviagation')}>
          <Image
            source={require('../assets/images/close.png')}
            style={styles.clearIcon}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 22, color: Colors.BLACK}}>Create a group</Text>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity onPress={() => createGroup()}>
          <Text
            style={{
              color: Colors.HALF_BLUE,
              fontSize: 15,
              fontWeight: '500',
            }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineStyle} />
      <View style={{flexDirection: 'row', gap: 7, padding: 20}}>
        <TouchableOpacity style={styles.cardContainer} onPress={pickImage}>
          {!img ? (
            <Icon1 name="camera-plus-outline" size={28} onPress={pickImage} />
          ) : (
            <Image source={selectedImage} style={{height: 30, width: 30}} />
          )}
        </TouchableOpacity>
        <TextInput
          mode="outlined"
          theme={{
            roundness: 5,
          }}
          label="Group name"
          value={text}
          style={{
            width: '83%',
            backgroundColor: '#ffffff',
            height: 40,
          }}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={{paddingLeft: 23}}>
        <Text>Type</Text>
        <ScrollView horizontal>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Button
              icon="airplane"
              mode="contained"
              labelStyle={{color: 'white'}}
              buttonColor={Colors.HALF_BLUE}
              onPress={() => setText("Trip")}>
              Trip
            </Button>
            <Button
              icon="home"
              mode="contained"
              buttonColor={Colors.HALF_BLUE}
              onPress={() => setText("Home")}>
              Home
            </Button>
            <Button
              icon="heart-outline"
              mode="contained"
              buttonColor={Colors.HALF_BLUE}
              onPress={() => setText("Couple")}>
              Couple
            </Button>
            <Button
              icon="text-box-outline"
              mode="contained"
              buttonColor={Colors.HALF_BLUE}
              onPress={() => setText("Other")}>
              Other
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.8,
    borderColor: '#CECAC9',
    marginTop: 10,
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 18,
    padding: 8,
  },
  clearIcon: {
    height: 18,
    width: 18,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
});
export default GroupComponent;
