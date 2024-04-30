import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { colors } from '../../../Base/Theme/Colors/GlobalColors';
import { globalStyle } from '../../../Base/Theme/Styles/GlobalStyle';


const MyThingsLandingScreen: React.FC = () => {
  return (
    <SafeAreaView style={[{ backgroundColor: colors.electricBlue, overflow: 'hidden' }, { width: '100%', height: '100%', paddingBottom: 26 }]} >
            <ScrollView horizontal = {true} style={globalStyle.container} keyboardShouldPersistTaps={"handled"}>
     
        
          <Text style={styles.circle}></Text>
          <Text style={styles.circle}></Text>
          <Text style={styles.circle}></Text>
          <Text style={styles.circle}></Text>
          <Text style={styles.circle}></Text>
          <Text style={styles.circle}></Text>
          <Text style={styles.circle}></Text>
          <Text style={styles.circle}></Text>
          <Text style={styles.circle}></Text>
          <Text style={styles.circle}>' 9 '</Text>
          
          
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
  circle :{
    height : 120 ,
    width : 120,
    marginRight: 20,
    backgroundColor : colors.white,
    borderRadius :80,
    elevation : 8,
  },
});

export default MyThingsLandingScreen;