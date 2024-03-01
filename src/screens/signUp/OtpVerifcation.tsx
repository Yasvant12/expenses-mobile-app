import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Image} from 'react-native-animatable';
import {Button, TextInput,useTheme} from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import Colors from '../../utils/Colors';
import {FontFamily, Color, FontSize} from '../../../GlobalStyle';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import DashboardNavigation from '../../navigation/DashboardNavigation';
import {AuthContext} from '../../context/AuthContext';
import PhoneSignup from '../signUp/OtpVerifcation';
import auth from '@react-native-firebase/auth';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
type otpProps = NativeStackScreenProps<RootStackParamList, 'otp'>;

const OtpVerifcation = ({navigation,route}:otpProps) => {
  
  const parm=route.params;
  const {
    userDetails,
    _signWithGmail,
    // loginWithPhone,
    confirmCode,
    // setUserDetail,
  } = AuthContext();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState('');



  const handleConfirmation = async () => {
    try {
      const con=parm && parm.confirm
      const userCredential = await confirmCode(con, enteredOtp);
      // setUserDetail(userCredential);
      navigation.navigate('dashboardNaviagation');
    } catch (error) {
      console.error('Invalid code or error during confirmation:', error);
    }
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
              <View
                style={{
                  padding: 40,
                  alignItems: 'center',
                  rowGap: 10,
                  // marginTop: height / 25,
                }}>
                <Text style={styles.otpVerification}>OTP Verification</Text>
                <Text style={styles.weWillSendContainer}>
                  <Text
                    style={
                      styles.weWillSend
                    }>{`We Will send you a one time password on this  `}</Text>
                  <Text style={styles.otpTypo}>Mobile Number</Text>
                </Text>
                <Text style={[styles.textTypo]}>{parm && parm.phoneNumber}</Text>
              </View>
              <View style={{alignItems: 'center', rowGap: 15}}>
                <TextInput
                  label="Enter otp"
                  style={{
                    height: height / 15,
                    width: width / 1.5,
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    
                  }}
                  value={enteredOtp}
                  onChangeText={text => setEnteredOtp(text)}
                />
                <Button
                  // icon="camera"
                  mode="contained"
                  style={{borderRadius: 4, backgroundColor: Colors.HALF_BLUE}}
                  onPress={() => handleConfirmation()}>
                  Confirm
                </Button>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default OtpVerifcation;

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpTypo: {
    fontWeight: '600',
    color: Colors.BLACK,
  },
  otpVerification: {
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslategray,
    textAlign: 'center',
    fontWeight: '900',
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

  textTypo: {
    fontSize: FontSize.size_mini,
    color: Colors.BLACK,
    fontWeight: '600',
  },
  text1Typo: {
    fontSize: FontSize.size_xs,
  },
  weWillSend: {
    fontFamily: FontFamily.outfitRegular,
  },
  weWillSendContainer: {
    color: Color.colorBlack,
    textAlign: 'center',
    fontFamily: FontFamily.outfitSemiBold,
  },
  text: {
    color: Color.colorBlack,
    textAlign: 'center',
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: '600',
  },
});
