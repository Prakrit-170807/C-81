import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawer_navigator from "./Tabs/drawernavigation"
import Tab_navigator from './Tabs/tabnavigation';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab_navigator/>
      <Drawer_navigator/>
    </NavigationContainer>
  );
}