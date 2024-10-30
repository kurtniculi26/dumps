import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text style={styles.number}>30</Text>
        <Text style={styles.feat}>Apps</Text>
        <Text style={styles.status}>Deployed</Text>
      </View>

      <View style={styles.flexContainer}>
        <Text style={styles.number}>30</Text>
        <Text style={styles.feat}>Apps</Text>
        <Text style={styles.status}>Deployed</Text>
      </View>

      <View style={styles.flexContainer}>
        <Text style={styles.number}>30</Text>
        <Text style={styles.feat}>Apps</Text>
        <Text style={styles.status}>Deployed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  flexContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 50,
    paddingLeft: 50
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  feat: {
    fontSize: 20,
  },
  status: {
    fontSize: 16,
    color: 'grey'
  },
});

export default Stats;
