import React, {useState} from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <View>
        <TextInput
          secureTextEntry={!showPassword}
          placeholder='Type your Password'
          value={password}
          onChange={text => setPassword(text)}
          autoCapitalize={"none"}
          returnKeyType={'done'}
          style={styles.input}
        />
        <TouchableOpacity style={styles.row} onPress={togglePasswordVisibility}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={30} />
        </TouchableOpacity>
      </View>
    );
  };

export default PasswordInput;  

const styles = StyleSheet.create({
    input: {
      height: 50,
      borderColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 10,
      borderRadius: 20,
      marginTop: 10,
      width: 320,
      shadowColor: '#B1B1B1',
      shadowOpacity: 20,
      shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 5, 
    elevation: 2,
    },

    row:{
        position: 'absolute',
        right: 20, 
        top: 20, 
    }

})