/**
 * Ananda Meditation React Native App
 *
 * @format
 */

import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from "./src/Base/Screens/SplashScreen";
import TabNavStack from "./src/Base/Navigation/TabNavStack";
import networkService from "./src/Services/NetworkService";
import { setUser } from './src/Base/Store/Slice/UserSlice';
import { createStore } from '@reduxjs/toolkit';


function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();
  // const dispatch = useDispatch();

  useEffect(() => {
    // Start monitoring network connectivity
    networkService.startMonitoring();
  }, []);

  useEffect(() => {
    console.log(networkService.getConnectionStatus());
    // dispatch(setUser(props.props));
  }, []);

  return (
    <PaperProvider theme={{ version: 2 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Tab" component={TabNavStack} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
export default App;
