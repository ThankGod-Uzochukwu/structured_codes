import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Images = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/image/Frame.png')} // Adjust the path based on your project structure
        resizeMode="contain" // Adjust the resizeMode property as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 100, // Adjust the width and height as needed
    height: 100,
  },
});

export default Images;
