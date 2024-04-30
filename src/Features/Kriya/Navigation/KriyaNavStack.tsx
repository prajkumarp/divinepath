
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KriyaRoutes } from './KriyaRoutes';
import KriyaLandingScreen from '../Screen/KriyaLandingScreen';

const KriyaNavStack: React.FC = () => {

    const Stack = createNativeStackNavigator()

    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
                initialRouteName={KriyaRoutes.Kriya}
                screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
                <Stack.Screen
                    name={KriyaRoutes.Kriya}
                    component={KriyaLandingScreen}
                />
            </Stack.Navigator>
        </View>);
}

export default KriyaNavStack


