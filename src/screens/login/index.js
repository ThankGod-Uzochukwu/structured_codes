import { View, Text, SafeAreaView, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, Dimensions, Alert   } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BACKGROUND, BACKGROUND_GRAY, BLUE } from '../../utils/Colors'
import Images from '../../widgets/image'
import Touch from '../../widgets/touch'
import Texts from '../../widgets/title'
import MyInputText from '../../widgets/textinput'
import Icon from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../../widgets/password'
import * as Yup from "yup";
import RadioCheck from '../../widgets/radio'
import * as LocalAuthentication from 'expo-local-authentication';








const { height: deviceHeight } = Dimensions.get('window');

const Login = ({navigation}) => {


    const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);

    const enableFaceID = async () => {
      try {
        const { success } = await LocalAuthentication.authenticateAsync({
          promptMessage: 'Authenticate with FaceID',
        });
  
        if (success) {
          // FaceID authentication successful, you can update your state or perform other actions here
          setIsFaceIdEnabled(true && navigation.navigate('Main'));
        }
      } catch (error) {
        console.error('FaceID authentication error:', error);
      }
    };

    const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');

    
    // const handleSubmit = ({navigation}) => {
        
    //     if (!username || !email || !password) {
    //       Alert.alert('Error', 'Please fill in all fields');
    //     } else if (!isValidEmail(email)) {
    //       Alert.alert('Error', 'Please enter a valid email address');
    //     } else if (password.length < 8) {
    //       Alert.alert('Error', 'Password must be at least 8 characters long');
    //     } else {

    //         navigation.navigate('faceID');
    //       // If all validations pass, you can proceed with your logic
    //       // For example, you might send the data to a server or navigate to the next screen
    //       // Your logic here...
    
    //       // Reset the form fields
    //       setUsername('');
    //       setEmail('');
    //       setPassword('');
    //     }
    //   };
    
    //   const isValidEmail = (email) => {
    //     // Add your email validation logic here
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    //   };

    
   

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
            paddingBottom: 30, 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20, 
            height: deviceHeight 
            }}
            >
            
            <ScrollView showsVerticalScrollIndicator='false'>

            <KeyboardAvoidingView behavior='padding'>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Texts title='Login'></Texts>
                        <TouchableOpacity onPress={enableFaceID}>
                            <Image 
                            source={require('../../../assets/image/FaceID.png')}
                            resizeMode= 'contain'
                            style={{height: 40}}
                        />
                        </TouchableOpacity>
                        
                    </View>
                    
                    <Text style={{marginTop: '5%'}}>We are so excited you’re ready to become apart of our coffee network! don’t forget  check out your perks!</Text>
                </View>

                <View style={{marginTop: '5%', }}>
                    <Text style={{color:'#14898D'}}>Username</Text>
                    <MyInputText 
                        placeholder='Enter Username'
                        value={username}
                        onChange={text => setUsername(text)}
                        autoCapitalize={"none"}
                        returnKeyType={'next'}
                    />
                
                    <Text style={{marginTop: '5%', color:'#14898D'}}>Password</Text>
                    
                    <PasswordInput />

                    <View style={{flexDirection: 'row', marginLeft: -15, marginTop: 10, marginBottom: -10}} >
                        <RadioCheck />
                        <Text style={{alignSelf: 'center', color: '#42261D', fontWeight: '600'}}>Keep me logged in</Text>
                    </View>

                </View>

                <View>
                    <Touch title='LOGIN' onPress={() => navigation.navigate('Main')}  />
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10}}>
                        <Text style={{color: '#14898D'}}>Forgot password?</Text>
                        <TouchableOpacity>
                            <Text style={{marginLeft: -90}}>Reset here</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{alignSelf: 'center', color: '#5E5858D4', marginTop: 10}}>Don’t have an account?</Text>
                    <Touch onPress={() => navigation.navigate('Register')} title='CREATE NEW ACCOUNT' />
                </View>

            </KeyboardAvoidingView>
            </ScrollView>
          
        </View>
        </View>
        
    </SafeAreaView>
  )
}

export default Login