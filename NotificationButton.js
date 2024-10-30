import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const NotificationButton = () => (
  <View style={styles.container}>
  <TouchableOpacity style={styles.button}>
    <Ionicons name={"notifications"} size={24} color="white" />
    <Text style={styles.buttonText}>{'Notifications'}</Text>
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
    backgroundColor: 'darkblue',
    borderRadius: 25,
    paddingVertical: 10,
    width: '91%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default NotificationButton;