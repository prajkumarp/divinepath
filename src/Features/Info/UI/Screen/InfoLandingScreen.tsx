import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import InfoViewController from '../../ViewControllers/InfoViewController';
import { colors } from '../../../../Base/Theme/Colors/GlobalColors';
import { globalStyle } from '../../../../Base/Theme/Styles/GlobalStyle';
import i18next from '../../../../Base/Resources/Translations/i18n'
import { DonateWidget } from '../../../../Base/UI/Widgets/DonateWidgets';

const InfoLandingScreen: React.FC = () => {

  const {
    statusText,
    buttonPressed
  } = InfoViewController();

  return (
    <SafeAreaView style={[{ backgroundColor: colors.lightestBlue, overflow: 'hidden' }, { width: '100%', height: '100%', paddingBottom: 26 }]} >
      <ScrollView style={globalStyle.container} keyboardShouldPersistTaps={"handled"}>
        <View style={styles.container}>

          <Text style={globalStyle.header}>{i18next.t('info.account')}</Text>
          <Text>{statusText}</Text>
          <TouchableOpacity style={globalStyle.button} onPress={buttonPressed}><Text>Press this</Text></TouchableOpacity>
          <Button title='Press this' onPress={buttonPressed} />
          <Text>{i18next.t('info.title')}</Text>
          <View style={globalStyle.categoryContainerLast}>
            <DonateWidget />
          </View>
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
export default InfoLandingScreen;