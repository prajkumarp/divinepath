import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { colors, StatusBarHeight } from '../../Base/Styles/GlobalStyle';

const MyThingsLandingScreen: React.FC = () => {
  return (
    <View style={styles.base}>
      <View style={styles.container}>
        <Text>My Things</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.electricBlue,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: StatusBarHeight
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default MyThingsLandingScreen;