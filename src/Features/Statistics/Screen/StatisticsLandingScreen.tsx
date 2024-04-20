import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { colors } from '../../../Base/Theme/Colors/GlobalColors';
import { StatusBarHeight } from '../../../Base/Theme/Styles/GlobalStyle';

const StatisticsLandingScreen: React.FC = () => {
  return (
    <View style={styles.base}>
      <View style={styles.container}>
        <Text>Statistics</Text>
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

export default StatisticsLandingScreen;