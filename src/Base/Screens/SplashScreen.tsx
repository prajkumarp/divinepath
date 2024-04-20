
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useEffect } from 'react';
import { colors } from '../Theme/Colors/GlobalColors';


const SplashScreen: React.FC = () => {

  const navigation = useNavigation();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      navigation.navigate('Tab')
    }, 2000);
    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bganimationContainer}>
        <LottieView
          source={require("../Resources/Lottie/PulsingYellow.json")}
          autoPlay
          loop={true}
          useNativeLooping={true}
          style={styles.bgAnimation}
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={{ height: 125, width: 125, position: 'absolute' }}
          source={require("../Resources/Images/joy-logo.png")}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white
  },
  bganimationContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    // top: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgAnimation: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default SplashScreen;