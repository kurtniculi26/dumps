import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UpperPanel = () => {
  return (
    <View style={styles.upperPanel}>
      <Ionicons name="arrow-back" size={32} color="black" />
      <Text style={styles.text}>Profile</Text>
      <Ionicons name="notifications" size={32} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  upperPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 20,
    paddingRight: 100,
    paddingLeft: 100
  },
  text: {
    marginHorizontal: 10,
    fontSize: 18,
    color: 'black',
  },
});

export default UpperPanel;
