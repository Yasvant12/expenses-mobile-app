import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';
import Colors from '../../utils/Colors';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'login'>;
const SignUpScreen = (): React.JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/tek.png')}
            style={styles.logo}
          />
          <Text style={{fontSize: 20, fontWeight: '600', color: '#2a353a'}}>
            Expenses
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View>
            <TextInput
              mode="outlined"
              theme={{
                roundness: 5,
              }}
              label="Full name"
              style={{
                width: '98%',
                backgroundColor: '#e7eaee',
                height: 40,
                fontSize: 15,
              }}
              value={name}
              onChangeText={text => setName(text)}
            />

            {name.length > 0 && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => setName('')}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={styles.clearIcon}
                />
              </TouchableOpacity>
            )}
          </View>
          {/*<------------------ Image + text boxes here ---------------------> */}
          <View style={{flexDirection: 'row', gap: 7}}>
            <View style={styles.cardContainer}>
              <Image
                source={require('../../assets/images/user.png')}
                style={styles.profileImage}
              />
              <Image
                source={require('../../assets/images/camera.png')}
                style={styles.cameraIcon}
              />
            </View>
            <View style={{width: 220, marginTop: 8, gap: 7}}>
              <TextInput
                mode="outlined"
                theme={{
                  roundness: 5,
                }}
                label="Email"
                style={{
                  width: '98%',
                  backgroundColor: '#e7eaee',
                  height: 40,
                  fontSize: 15,
                }}
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                mode="outlined"
                theme={{
                  roundness: 5,
                }}
                label="Password"
                style={{
                  width: '98%',
                  backgroundColor: '#e7eaee',
                  height: 40,
                  fontSize: 15,
                }}
                value={password}
                right={<TextInput.Icon icon="eye" />}
                onChangeText={text => setPassword(text)}
              />
              {/* Show/Hide password toggle button */}
              {/* <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => setShowPassword(!showPassword)}>
                <Image
                  source={
                    showPassword
                      ? require('../../assets/images/eye.png')
                      : require('../../assets/images/open.png')
                  }
                  style={styles.toggleIcon}
                />
              </TouchableOpacity> */}
            </View>
          </View>

          {/* <-------------------------------------------> */}
          <TextInput
            mode="outlined"
            theme={{
              roundness: 5,
            }}
            label="phone"
            style={{
              width: '98%',
              backgroundColor: '#e7eaee',
              height: 40,
              fontSize: 15,
            }}
            placeholder="Phone Number (optional)"
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>
        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
          <Text style={{color: '#2a353a'}}>
            I use INR (₹) as my currency.{' '}
            <Text style={{color: '#0D8AB4'}}>
              Change
              <Text></Text>
            </Text>
          </Text>
        </View>

        <Text style={styles.termsText}>
          By signing up, you accept the Expenses Terms of service.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('login')}>
            <Text style={styles.buttonText2}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: -10,
    marginLeft: -15,
  },
  logo: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 20,
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 15,
    gap: 13,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#0D8AB4',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
    borderColor: '#0D8AB4',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonText2: {
    color: '#0D8AB4',
    fontSize: 16,
  },
  termsText: {
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#e7eaee',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  cameraIcon: {
    width: 23,
    height: 23,
    marginTop: 80,
  },
  clearButton: {
    position: 'absolute',
    top: 16,
    right: 14,
    zIndex: 1,
  },
  clearIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  toggleButton: {
    position: 'absolute',
    top: 70,
    right: 10,
  },
  toggleIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default SignUpScreen;
