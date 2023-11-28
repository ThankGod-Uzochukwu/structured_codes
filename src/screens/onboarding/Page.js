import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import {PRIMARY} from "../../utils/Colors";
import Touch from '../../widgets/touch/index'





const images = [
    require('../../../assets/image/onboarding1.png'),
    require('../../../assets/image/onboarding2.png'),
    require('../../../assets/image/onboarding3.png'),
]

const beans = [
  require('../../../assets/image/bean1.png'),
  require('../../../assets/image/bean2.png'),
  require('../../../assets/image/bean3.png'),
]

const Page = ({index, message, next, skip, title, }) => {
  return (
    <View flex>
      <View style={{flex: 1}}>
            <TouchableOpacity onPress={skip} style={{alignItems: 'flex-end', marginRight: '5%', marginTop: '5%'}}>
                <Text style={{fontWeight: '500', fontSize: 15}}>Skip</Text>
            </TouchableOpacity>
        </View>
        
      <View flex>
        <Image source={images[index]} style={{alignSelf: 'center'}} />
        <Text style={{alignSelf: 'center', fontWeight: '600', fontSize: 18, marginTop: 50}} >{title}</Text>
        <Text style={{alignSelf: 'center', marginTop: 30, marginLeft: '5%', marginRight: '5%'}} >{message}</Text>
        <View >
            {[1, 2, 3].map((_, i) =>
            <View key={_} color={index === i ? PRIMARY : '#DCDCDC'}/>)}
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 50, marginLeft: '5%', marginRight: '5%'}} >
            <Image source={beans[index]} />
            <Touch title='NEXT' onPress={() => next(index)} style={{backgroundColor: '#4B2C20', paddingTop: 15 }} />
        </View>
      </View>
      
    </View>
  )
}

export default Page