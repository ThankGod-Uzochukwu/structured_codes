import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import {PRIMARY} from "../../utils/Colors";



const images = [
    require('../../../assets/image/onboarding1.png'),
    require('../../../assets/image/onboarding2.png'),
    require('../../../assets/image/onboarding3.png'),
]

const Page = ({index, message, next, skip, title, }) => {
  return (
    <View flex>
      <View flex center aligned px={25}>
        <Image source={images[index]} mb={70} h={123} w={123} />
        <Text fs={24} mb={24} bold dark>{title}</Text>
        <Text opacity={0.5} lh={25} dark mx={27} center>{message}</Text>
        <View my={40} row aligned>
            {[1, 2, 3].map((_, i) =>
            <View key={_} h={12} mx={4} w={12} radius={12} color={index === i ? PRIMARY : '#DCDCDC'}/>)}
        </View>

        <View hide={index !== 2} w={'100%'}>
            <Button primary w={'100%'} onPress={skip} title={'Lets start'}/>
        </View>

        <View hide={index === 2} aligned w={'100%'} spaced row>
            <TouchableOpacity onPress={skip}>
                <Text bold>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => next(index)}><Text bold>NEXT</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Page