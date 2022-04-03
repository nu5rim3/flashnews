import * as React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather } from '@expo/vector-icons';

// tabs
import General from './tabs/General';
import Sports from './tabs/Sports';
import Health from './tabs/Health';
import Science from './tabs/Science';
import Entertainment from './tabs/Entertainment';
import Business from './tabs/Business';
import Technology from './tabs/Technology';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { textTransform: 'capitalize' },
        tabBarItemStyle: { width: 110 },
        tabBarStyle: { shadowColor: 'transparent', elevation: 0 },
        animationEnabled: true,
        swipeEnabled: true,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: { backgroundColor: '#000000', height: 5, borderRadius: 5 }
      }}
    >
      <Tab.Screen name="General" component={General} />
      <Tab.Screen name="Sports" component={Sports} />
      <Tab.Screen name="Health" component={Health} />
      <Tab.Screen name="Science" component={Science} />
      <Tab.Screen name="Entertainment" component={Entertainment} />
      <Tab.Screen name="Business" component={Business} />
      <Tab.Screen name="Technology" component={Technology} />
    </Tab.Navigator>
  );
}