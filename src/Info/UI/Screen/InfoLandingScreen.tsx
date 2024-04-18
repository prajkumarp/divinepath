import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';
import { colors, StatusBarHeight } from '../../../Base/Styles/GlobalStyle';
import InfoViewController from '../../ViewControllers/InfoViewController';

const InfoLandingScreen: React.FC = () => {

  const {
    statusText,
    buttonPressed
  } = InfoViewController();

  return (
    <View style={styles.base}>
      <View style={styles.container}>
        <Text>{statusText}</Text>
        <Button title='Press this' onPress={buttonPressed} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.lightestBlue,
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
export default InfoLandingScreen;