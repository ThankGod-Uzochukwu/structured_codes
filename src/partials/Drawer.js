import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import your screens
import Home from '../screens/home/index';
// 
const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    
  );
};

export default SideDrawer;
