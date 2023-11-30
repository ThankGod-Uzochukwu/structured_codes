import React from 'react';
import { TextInput, StyleSheet  } from 'react-native';

const MyInputText = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
    />
  );
};

export default MyInputText;

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
    //   ...Platform.select({
    //     ios: {
    //       shadowColor: '#ffffff',
    //       shadowOpacity: 5,
    //       shadowRadius: 3,
    //       shadowOffset: {
    //         width: 2,
    //         height: 1,
    //       },
    //     },
    //     android: {
    //       elevation: 2,
    //     },
    //   }),
    },
  });
