import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Image} from 'react-native-animatable';
import {Button, Divider, TextInput} from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import Colors from '../../utils/Colors';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import DashboardNavigation from '../../navigation/DashboardNavigation';
import {AuthContext} from '../../context/AuthContext';
import auth from '@react-native-firebase/auth';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'login'>;

const LoginScreen = ({route}: LoginProps) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState<any>(null);
  // const parm=route.params;
  const {
    userDetails,
    _signWithGmail,
    loginWithPhone,
    // confirmCode,
    // setUserDetail,
  } = AuthContext();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogin = (phoneNumber : any) => {
    loginWithPhone(phoneNumber)
      .then((confirmation: any) => {
        setShowOtpInput(true);
        setConfirm(confirmation);
        console.log(confirmation,'confirmation');
        navigation.navigate('otp',{phoneNumber:phoneNumber,confirm:confirmation});
      })
      .catch((error: any) => console.error('Error during login:', error));
  };

  return (
    <>
      {userDetails !== null ? (
        <DashboardNavigation />
      ) : (
        <>
          <ScrollView
            style={{flex: 1, backgroundColor: '#ffffff'}}
            showsVerticalScrollIndicator={false}>
            <View
              // source={image}
              style={{
                height: height / 2.5,
                backgroundColor: '#81D1F1',
              }}>
              <View style={styles.brandView}>
                <Image
                  source={require('../../assets/images/tek.png')}
                  style={{height: 100, width: 100}}
                />
                <Text style={styles.brandViewText}>Expenses</Text>
              </View>
            </View>
            {/* Bottom view here */}
            <View style={styles.BottomView}>
              <View style={{padding: 40}}>
                <Text style={{color: '#81D1F1', fontSize: 34}}>Welcome</Text>
                {/* Form input view */}
                <View
                  style={{marginTop: 50, rowGap: 20, justifyContent: 'center'}}>
                  <PhoneInput
                    ref={phoneInput}
                    // value="91"
                    // defaultValue={'IN'}
                    placeholder="6204422312"
                    defaultCode="IN"
                    layout="first"
                    textContainerStyle={{backgroundColor: '#F4F6F6'}}
                    onChangeText={text => {
                      setValue(text);
                    }}
                    onChangeFormattedText={text => {
                      setFormattedValue(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                    containerStyle={{backgroundColor: '#F4F6F6'}}
                  />
                  <Button
                    mode="contained"
                    style={{
                      borderRadius: 10,
                      padding: 7,
                      backgroundColor: '#81D1F1',
                      width: 290,
                    }}
                    onPress={() => handleLogin(formattedValue)}>
                    Continue
                  </Button>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      columnGap: 2,
                    }}>
                    <Divider style={{width: 250}} />
                    <Text style={{fontSize: 16}}>or</Text>
                    <Divider style={{width: 250}} />
                  </View>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                      justifyContent: 'center',
                      backgroundColor: '#81D1F1',
                      padding: 7,
                      borderRadius: 5,
                    }}
                    onPress={() => {
                      _signWithGmail();
                    }}>
                    <Image
                      style={{width: 30, height: 40}}
                      source={require('../../assets/images/google.png')}
                    />
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 15,
                        fontWeight: '500',
                      }}>
                      Continue with Google
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneInput: {
    borderColor: '#81D1F1', 
    borderWidth: 1, 
    borderRadius: 10,
    padding: 10, 
    marginBottom: 20,
  },
  brandViewText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 40,
    textTransform: 'capitalize',
  },
  BottomView: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});
