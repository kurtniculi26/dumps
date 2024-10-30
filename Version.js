import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Version = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  },
  version: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Version;
