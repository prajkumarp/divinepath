import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { colors } from '../../../Base/Theme/Colors/GlobalColors';
import { globalStyle } from '../../../Base/Theme/Styles/GlobalStyle';


const MyThingsLandingScreen: React.FC = () => {
  return (
    <SafeAreaView style={[{ backgroundColor: colors.electricBlue, overflow: 'hidden' }, { width: '100%', height: '100%', paddingBottom: 26 }]} >
      <ScrollView style={globalStyle.container} keyboardShouldPersistTaps={"handled"}>
        <View style={styles.container}>
          <Text>My things</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default MyThingsLandingScreen;