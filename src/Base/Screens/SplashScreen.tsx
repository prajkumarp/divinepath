
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';


const SplashScreen: React.FC = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/lottie/UnderConstruction1.json')}
        autoPlay
        loop={false}
        style={styles.animation}
        useNativeLooping={true}
        onAnimationFinish={(isCanceled) => {
          if (!isCanceled) {
            navigation.navigate('Tab');
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;