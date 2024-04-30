
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TestingRoutes } from './TestingRoutes';
import TestingLandingScreen from '../Screen/TestingLandingScreen';



const TestingNavStack: React.FC = () => {

    const Stack = createNativeStackNavigator()

    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
                initialRouteName={TestingRoutes.Testing}
                screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
                <Stack.Screen
                    name={TestingRoutes.Testing}
                    component={TestingLandingScreen}
                />
            </Stack.Navigator>
        </View>);
}

export default TestingNavStack


