import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Touch = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4B2C20',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    height: 45
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center'
  },
});

export default Touch;
