import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { colors } from '../../../Base/Theme/Colors/GlobalColors';
import { globalStyle } from '../../../Base/Theme/Styles/GlobalStyle';


const KriyaLandingScreen: React.FC = () => {
  return (
    <SafeAreaView style={[{ backgroundColor: colors.goldenYellow, overflow: 'hidden' }, { width: '100%', height: '100%', paddingBottom: 26 }]} >
      <StatusBar/>
      <ScrollView style={globalStyle.container} keyboardShouldPersistTaps={"handled"}>
        <View style={styles.container}>
          <Text>Kriya</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default KriyaLandingScreen;