import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const MeditationLandingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Meditation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default MeditationLandingScreen;