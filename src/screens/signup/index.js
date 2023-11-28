import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { BACKGROUND, BACKGROUND_GRAY } from '../../utils/Colors'
import Images from '../../widgets/image'
import Touch from '../../widgets/touch'
import Texts from '../../widgets/title'





const Register = () => {
  return (
    <SafeAreaView flex backgroundColor={BACKGROUND}>
        <Images />
        <View flex style={{marginTop: 10}}>

            <View 
            backgroundColor={BACKGROUND_GRAY} 
            style={{ borderColor: "#5B302066", 
            borderLeftWidth: 2, 
            borderRightWidth: 2, 
            borderTopWidth: 2, 
            paddingLeft: 30, 
            paddingRight: 30, 
            paddingTop: 30, 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20}}
            >
            
            <View>
                <View>
                    <Texts title='Sign Up'></Texts>
                    <Text>We are so excited you’re ready to become apart of our coffee network! don’t forget  check out your perks!</Text>
                </View>
                <View>
                    
                </View>
            </View>

            <View>
                <Touch title='REGISTER' />
                <Text>Already have an account?</Text>
                <Touch title='SIGN IN' />
            </View>

        </View>
        </View>
        
    </SafeAreaView>
  )
}

export default Register