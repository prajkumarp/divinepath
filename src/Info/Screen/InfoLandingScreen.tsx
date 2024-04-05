import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const InfoLandingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Info</Text>
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

export default InfoLandingScreen;