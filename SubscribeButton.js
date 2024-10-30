import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const SubscribeButton = () => (
  <View style={styles.container}>
  <TouchableOpacity style={styles.button}>
    <Ionicons name={"send"} size={24} color="darkblue" />
    <Text style={styles.buttonText}>{'Subscibe'}</Text>
  </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    width: '10%',
    borderColor: 'black',
    borderWidth: 1
  },
  buttonText: {
    color: 'darkblue',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default SubscribeButton;