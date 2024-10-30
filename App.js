import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UpperPanel from './UpperPanel';
import Avatar from './Avatar';
import Name from './Name';
import Stats from './Stats';
import Line from './Line';
import EditButton from './EditButton';
import NotificationButton from './NotificationButton';
import SettingsButton from './SettingsButton';
import StaticInput from './StaticInput';
import SubscribeButton from './SubscribeButton';
import Version from './Version';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <UpperPanel />
        <Avatar/>
        <Name/>
        <Stats/>
        <Line/>
        <EditButton/>
        <NotificationButton/>
        <SettingsButton/>
        <Line/>
        <StaticInput/>
        <SubscribeButton/>
        <Version/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flexContainer: {
    width: '100%',
  },
});
