import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';

const Cart = () => {
  return (
    <SafeAreaView>

      <View>
        <SimpleLineIcons name="handbag" size={30} color="black" />
      </View>

    </SafeAreaView>
  )
}

export default Cart