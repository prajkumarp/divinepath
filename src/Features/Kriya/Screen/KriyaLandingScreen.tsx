import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { colors } from '../../../Base/Theme/Colors/GlobalColors';
import { StatusBarHeight } from '../../../Base/Theme/Styles/GlobalStyle';


const KriyaLandingScreen: React.FC = () => {
  return (
    <View style={styles.base}>
      <View style={styles.container}>
        <Text>Kriya</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.goldenYellow,
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

export default KriyaLandingScreen;