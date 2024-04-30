
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MeditationRoutes } from './MeditationRoutes';
import MeditationLandingScreen from '../Screen/MeditationLandingScreen';



const MeditationNavStack: React.FC = () => {

    const Stack = createNativeStackNavigator()

    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
                initialRouteName={MeditationRoutes.Meditation}
                screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
                <Stack.Screen
                    name={MeditationRoutes.Meditation}
                    component={MeditationLandingScreen}
                />
            </Stack.Navigator>
        </View>);
}

export default MeditationNavStack


