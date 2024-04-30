import React from 'react';
import { View, StyleSheet, Text, Pressable,Button, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import InfoViewController from '../../ViewControllers/InfoViewController';
import { colors } from '../../../../Base/Theme/Colors/GlobalColors';
import { globalStyle } from '../../../../Base/Theme/Styles/GlobalStyle';
import i18next from '../../../../Base/Resources/Translations/i18n'
import { DonateWidget, LoginIn } from '../../../../Base/UI/Widgets/DonateWidgets';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faExclamation, faExclamationCircle, faInfo, faMobile, faSignIn } from '@fortawesome/pro-light-svg-icons'
import { blue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const InfoLandingScreen: React.FC = () => {

  const {
    statusText,
    buttonPressed,
    handleLogin,
  } = InfoViewController();

  return (
    <SafeAreaView style={[{ backgroundColor: colors.lightestBlue, overflow: 'hidden' }, { width: '100%', height: '100%', paddingBottom: 26 }]} >
      <StatusBar/>
      <ScrollView style={globalStyle.container} keyboardShouldPersistTaps={"handled"}>
     
      <Text style={[globalStyle.header ,{fontSize:30}]}>{i18next.t('info.account')}</Text>
      <Text></Text> 
      <View style={globalStyle.categoryContainerTop}>
            <LoginIn />
            <Text></Text> 
            <Text></Text> 
      <Text style={globalStyle.normalText}>{i18next.t('Sigining up allows you to syncronize your progress with our server ,so that you never lose your data.')}</Text>
        </View>
        <Text></Text> 
       <Text></Text>
        <Text></Text>
        <Text style={[globalStyle.header ]}>{i18next.t('Inbox')}</Text> 
      <View style={styles.rcard}>
        <Text style ={globalStyle.categoryText}> Sign up to preserve your progress  </Text>
        <Text style ={globalStyle.normalText}> sigining up allows you to syncronize your progres with our server,so that you never lose your data {'\n'} </Text> 
        <Text style ={[globalStyle.normalText ,{color:'blue'}]} Pressable onPress={buttonPressed}> Dismiss</Text>
        <Text style ={[globalStyle.normalText ,{color:'darkblue'},{marginLeft: 190},{marginVertical:-20}]} Pressable onPress={buttonPressed}> SIGN UP / LOG IN</Text>
        
       </View>        
       <Text></Text> 
       <Text></Text>
        <Text></Text>
       <Text style={[globalStyle.header ]}>{i18next.t('Links')}</Text> 
       <TouchableOpacity  onPress={buttonPressed}>
          <FontAwesomeIcon icon = {faInfo} size={18} />
          
           <Text style={[globalStyle.normalText ,{fontWeight:'bold'},{marginLeft:30},{marginVertical :-19}]}>{i18next.t('Learn more about Meditaion')}</Text> 
           <Text style={[globalStyle.normalText ,{marginLeft:29},{marginVertical :15}]}>{i18next.t('Online and in Person classes,books,and videos')}</Text> 
           </TouchableOpacity>
           <TouchableOpacity onPress={buttonPressed} >
           <FontAwesomeIcon  icon = {faExclamationCircle} size={18} />
           <Text style={[globalStyle.normalText ,{fontWeight:'bold'},{marginLeft:33},{marginVertical :-39},{paddingVertical:19}]}>{i18next.t('Privacy Policy')}</Text>   
           
           <Text></Text>
           <Text></Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={buttonPressed} >
           <FontAwesomeIcon  icon = {faEnvelope} size={18} />
           <Text style={[globalStyle.normalText ,{fontWeight:'bold'},{marginLeft:33},{marginVertical :-33},{paddingVertical:16}]}>{i18next.t('Feedback')}</Text>
                      <Text style={[globalStyle.normalText ,{marginLeft:33},{marginVertical :15}]}>{i18next.t('Send us an email meditaionapp@ananda.org')}</Text> 
                      </TouchableOpacity >
          <TouchableOpacity>
           <FontAwesomeIcon  icon = {faMobile} size={18} />
           <Text style={[globalStyle.normalText ,{fontWeight:'bold'},{marginLeft:33},{marginVertical :-22},{paddingTop:2}]}>{i18next.t('Check other apps from Ananda')}</Text>
           <Text style={[globalStyle.normalText ,{marginLeft:33},{marginVertical :10},{paddingVertical:6}]}>{i18next.t('Go to the Google Play Store')}</Text>
           </TouchableOpacity  >
           <Text style={[globalStyle.header ]}>{i18next.t('About')}</Text>
           <Text></Text>
           <FontAwesomeIcon  icon = {faInfo} size={18} />
           <Text style={[globalStyle.normalText ,{fontWeight:'bold'},{marginLeft:33},{marginVertical :-29},{paddingTop:2}]}>{i18next.t('About This App and Device')}</Text>
           <Text style={[globalStyle.normalText ,{marginLeft:33},{marginVertical :18},{paddingVertical:8}]}>{i18next.t('Version 2.2.4')}</Text>
           <Text style={[globalStyle.normalText ,{marginLeft:33},{marginVertical :-33}]}>{i18next.t('Android SDK 34')}</Text>
           <Text></Text>
          <Text></Text>
           <View style={globalStyle.categoryContainerLast}>
            <DonateWidget />
          </View>
          <Text></Text>
          <Text></Text>
          <Text></Text>

          
                  
                
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
   flexdirection : 'column',
    justifyContent: 'space-around',
   backgroundColor: colors.white,
    width :600,
    height:300,
  },
  rcard :{
    height : 130 ,
    width : 350,
    padding: 10,
    marginRight: 20,
    marginLeft:5,
    backgroundColor : colors.white,
    borderRadius :10,
    elevation : 10,
  },
 



});
export default InfoLandingScreen;

