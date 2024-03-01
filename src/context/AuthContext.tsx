// MyContext.js
import React, {createContext, useContext, useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const MyContext = createContext({
  userDetails: null,
  _signWithGmail: () => {},
  signOut: () => {},
  loginWithPhone: () => {},
  confirmCode: () => {},
});

export const MyProvider = ({children}: any) => {
  const [userDetails, setUserDetail] = useState<any>(null);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '506799964275-cc37vispll702dhtpqf3e0kv00a1qcfe.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const user = auth().signInWithCredential(googleCredential);
      const data = auth().currentUser;
      setUserDetail(data);
      return user;
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  }
  async function _signWithGmail() {
    try {
      await onGoogleButtonPress();
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }
  const signOut = async () => {
    console.log('google authentication');
    try {
      await GoogleSignin.signOut();
      setUserDetail(null);
    } catch (error) {
      console.error(error);
    }
  };

  // -----------------Mobile number login------------------------------------------------------------

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      // setUserDetail(user);
    });
    return unsubscribe;
  }, []);

  const loginWithPhone = phoneNumber => {
    const confirmation = auth().signInWithPhoneNumber(phoneNumber);
    // setUserDetail(confirmCode);
    return confirmation;
  };

  const confirmCode = async (confirmation, enteredOtp) => {
    try {
      const userCredential = await confirmation.confirm(enteredOtp);
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  return (
    <MyContext.Provider
      value={{
        userDetails,
        _signWithGmail,
        signOut,
        confirmCode,
        loginWithPhone,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export const AuthContext = () => {
  return useContext(MyContext);
};
