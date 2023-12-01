// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SECONDARY } from '../../utils/Colors';

const Texts = ({ title }) => {
  return (
      <Text color={SECONDARY} style={styles.title}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#42261D'
  },
});

export default Texts;
