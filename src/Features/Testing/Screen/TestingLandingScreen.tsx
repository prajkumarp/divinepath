import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import networkService from '../../../Services/NetworkService';

const TestingLandingScreen = () => {

  const [connectionStaus, setconnectionStaus] = useState(String);
  const [connectionInfo, setConnectionInfo] = useState(String);

  useEffect(() => {
    if (networkService.getConnectionStatus()) {
      setconnectionStaus("Connected")
    } else {
      setconnectionStaus("Not Connected")
    }

    // dispatch(setUser(props.props));
  }, []);


  return (
    <View style={styles.container}>
      <Text>Is connected : {connectionStaus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default TestingLandingScreen;