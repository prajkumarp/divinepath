import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import InfoViewController from '../../ViewControllers/InfoViewController';
import { colors } from '../../../../Base/Theme/Colors/GlobalColors';
import { globalStyle, StatusBarHeight } from '../../../../Base/Theme/Styles/GlobalStyle';

const InfoLandingScreen: React.FC = () => {

  const {
    statusText,
    buttonPressed
  } = InfoViewController();

  return (
    <View style={styles.base}>
      <View style={styles.container}>
        <Text>{statusText}</Text>
        <TouchableOpacity style={globalStyle.button} onPress={buttonPressed}><Text>Press this</Text></TouchableOpacity>
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