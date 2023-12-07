import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Cart from '../screens/cart'
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {CommonActions} from "@react-navigation/native";





const Sidebar = ({}) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const navigateTo = (name) => {
        const navigationAction = CommonActions.navigate({name,});
        navigation.dispatch(navigationAction);
    };

  return (

    <SafeAreaView style={{marginTop: 10 }}>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

      <TouchableOpacity onPress={navigation.closeDrawer}>
        <FontAwesome name="navicon" size={30} color="black" />
      </TouchableOpacity>
      
      <Image 
        source={require('../../assets/image/logo.png')}
        width
      />
      <TouchableOpacity>
        <Cart />
      </TouchableOpacity>
      
      </View>

    </SafeAreaView>
  )
}

export default Sidebar

