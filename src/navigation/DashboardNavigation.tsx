import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import DashboardScreen from '../screens/expenses/DashboardScreen';
import Setting from '../screens/setting/Setting';
import FrindsList from '../screens/expenses/FrindsList';
import UserActivity from '../screens/expenses/UserActivity';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import Colors from '../utils/Colors';

const DashboardNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Groups',
          tabBarLabelStyle: {fontSize: 14, fontWeight: '600'},
          headerShown: false,
          tabBarIcon: tabInfo => {
            const iconColor = tabInfo.focused ?  Colors.HALF_BLUE : '#2a353a';
            return <Icon name="account-group-outline" size={28} color={iconColor} />;
          },
        }}
      />
      <Tab.Screen
        name="friend"
        component={FrindsList}
        options={{
          tabBarLabel: 'Friends',
          tabBarLabelStyle: {fontSize: 14, fontWeight: '600'},
          headerShown: false,
          tabBarIcon: tabInfo => {
            const iconColor = tabInfo.focused ? Colors.HALF_BLUE : '#2a353a';
            return <Icon name="account-outline" size={28} color={iconColor} />;
          },
        }}
      />
      <Tab.Screen
        name="activity"
        component={UserActivity}
        options={{
          tabBarLabel: 'Activity',
          tabBarLabelStyle: {fontSize: 14, fontWeight: '600'},
          headerShown: false,
          tabBarIcon: tabInfo => {
            const iconColor = tabInfo.focused ? Colors.HALF_BLUE : '#2a353a';
            return <Icon1 name="activity" size={24} color={iconColor} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Setting}
        options={{
          tabBarLabel: 'Account',
          tabBarLabelStyle: {fontSize:14,fontWeight:'600'},
          headerShown: false,
          tabBarIcon: tabInfo => {
            const iconColor = tabInfo.focused ? Colors.HALF_BLUE : '#2a353a';
            return <Icon1 name="settings" size={24} color={iconColor} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigation;
