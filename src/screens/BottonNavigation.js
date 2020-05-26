import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Search from './Search';
import Upload from './Upload';
import Chat from './Chat';
import Profile from './Profile';
const Tab = createMaterialBottomTabNavigator();
const BottomNavigation = () => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#ffffff"
    >
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarColor: '#B14297',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={25}/>
            )
        }}
        />
        <Tab.Screen
        name="Search"
        component={Search}
        options={{
            tabBarLabel: 'Search',
            tabBarColor: '#F7C217',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-search" color={color} size={25}/>
            )
        }}
        />
        <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
            tabBarLabel: 'Upload',
            tabBarColor: '#B14297',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-add" color={color} size={25}/>
            )
        }}
        />
        <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
            tabBarLabel: 'Chat',
            tabBarColor: '#F7C217',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-send" color={color} size={25}/>
            )
        }}
        />
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#B14297',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={25}/>
            )
        }}
        />
    </Tab.Navigator>
);
export default BottomNavigation;