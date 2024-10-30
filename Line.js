import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: 'black',
  },
});

export default Line;
