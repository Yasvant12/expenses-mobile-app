/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screens/home/HomeScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import SignUpScreen from './src/screens/signUp/SignUpScreen';
import DashboardScreen from './src/screens/expenses/DashboardScreen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet} from 'react-native';
import DashboardNavigation from './src/navigation/DashboardNavigation';
import GroupComponent from './src/components/GroupComponent';
import GroupMember from './src/components/GroupMember';
import AddExpense from './src/screens/expenses/AddExpense';
const navTheme = DefaultTheme;
navTheme.colors.background = '#ffffff';
import {MyProvider} from './src/context/AuthContext';
import CategoryIcons from './src/components/CategoryIcons';
import ContactList from './src/components/ContactList';
import AddGroupMember from './src/screens/expenses/AddGroupMember';
import VerificationContactInfo from './src/screens/expenses/VerificationContactInfo';
import OtpVerifcation from './src/screens/signUp/OtpVerifcation';
export type RootStackParamList = {
  Home: undefined;
  login: undefined;
  signUp: undefined;
  dashboardNaviagation: undefined;
  group: undefined;
  member: {selectedNumber: Array<any>} | undefined | any;
  addExpense: undefined;
  IconPage: undefined;
  contactList: {selectedIconUrl: string} | undefined;
  addGroupMember: undefined;
  VerificationContact: {selectedNumber: Array<any>} | undefined;
  otp: any | undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={navTheme}>
      <MyProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'homeScreen',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              title: 'homeScreen',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signUp"
            component={SignUpScreen}
            options={{
              title: 'signUp',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="dashboardNaviagation"
            component={DashboardNavigation}
            options={{
              title: 'dashboardNavigation',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="group"
            component={GroupComponent}
            options={{
              title: 'group',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="member"
            component={GroupMember}
            options={{
              title: 'member',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="addExpense"
            component={AddExpense}
            options={{
              title: 'addExpense',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="contactList"
            component={ContactList}
            options={{
              title: '',
            }}
          />

          <Stack.Screen
            name="IconPage"
            component={CategoryIcons}
            options={{
              title: '',
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="addGroupMember"
            component={AddGroupMember}
            options={{
              title: '',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="VerificationContact"
            component={VerificationContactInfo}
            options={{
              title: 'Verify contact info',
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="otp"
            component={OtpVerifcation}
            options={{
              title: 'Otp verificaiton',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </MyProvider>
    </NavigationContainer>
  );
}

export default App;
