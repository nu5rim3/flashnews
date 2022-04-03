import React from 'react'
import { StatusBar, Image, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from './Home';
import { DeatilScreen } from './Detail';
import AboutScreen from './About';
import SearchScreen from './Search';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerTitle: () => (<Image style={{ width: 100, height: 50 }}
              source={require('../../assets/logo.png')} />),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
              >
                <Feather name="search" size={24} color="black" />
              </TouchableOpacity>)
          })} />
        <Stack.Screen name="Detail" component={DeatilScreen}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerTitle: () => (<Image style={{ width: 100, height: 50 }}
              source={require('../../assets/logo.png')} />),
            headerLeft: Platform.OS === 'ios' ? () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
              >
                <Feather name="arrow-left" size={24} color="black" />
              </TouchableOpacity>) : null
          })} />
        <Stack.Screen name="About" component={AboutScreen}
          options={{
            headerShadowVisible: false,
          }} />
        <Stack.Screen name="Search" component={SearchScreen}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerTitle: () => (<Image style={{ width: 100, height: 50 }}
              source={require('../../assets/logo.png')} />),
            headerLeft: Platform.OS === 'ios' ? () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
              >
                <Feather name="arrow-left" size={24} color="black" />
              </TouchableOpacity>) : null
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}