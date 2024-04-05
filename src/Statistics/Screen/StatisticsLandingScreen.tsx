import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const StatisticsLandingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Statistics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default StatisticsLandingScreen;