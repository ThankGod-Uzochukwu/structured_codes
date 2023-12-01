import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native'
import React, {useEffect, useState} from 'react'
import { BACKGROUND, BACKGROUND_GRAY } from '../../utils/Colors'
import Touch from '../../widgets/touch';
import * as LocalAuthentication from 'expo-local-authentication';






const { height: deviceHeight } = Dimensions.get('window');

const FaceID = ({navigation}) => {


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


//   useEffect(() =>{
//     async function authenticate() {
//         const result = await LocalAuthentication.authenticateAsync();
//     }
//     authenticate();
//   }, []);


  return (
    <SafeAreaView flex backgroundColor= {BACKGROUND}>
    <View style={{marginTop: '25%' }}>
        <Image 
        source={require('../../../assets/image/Frame.png')}
        style={{ height: 350, alignSelf: 'center'}}
      />

      <View flex style={{marginTop: '-35%'}}>

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
            <Image 
                source={require('../../../assets/image/FaceID.png')}
                style={{ alignSelf: 'center', marginBottom: '10%'}}
            />
            <View style={{ marginBottom: '10%'}}>
                <Text style={{ fontSize: 28, alignSelf: 'center'}}>Want to enable faceID?</Text>
                <Text style={{ fontSize: 16, alignSelf: 'center', marginTop: 20, marginBottom: -20}}>This helps you login quicker!</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Touch title='Yes' onPress={enableFaceID} />
                <Touch title='No' onPress={() => navigation.navigate('Login')}/>
            </View>

        </View>
        
        </View>

      </View>

      
    </SafeAreaView>
  )
}

export default FaceID