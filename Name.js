import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Name = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Kurt Niculi Dayao</Text>
      <Text style={styles.roleText}>React Native Developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  roleText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Name;
