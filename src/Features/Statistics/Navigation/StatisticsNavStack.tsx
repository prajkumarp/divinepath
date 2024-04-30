
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatisticsRoutes } from './StatisticsRoutes';
import StatisticsLandingScreen from '../Screen/StatisticsLandingScreen';


const StatisticsNavStack: React.FC = () => {

    const Stack = createNativeStackNavigator()

    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
                initialRouteName={StatisticsRoutes.Statistics}
                screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
                <Stack.Screen
                    name={StatisticsRoutes.Statistics}
                    component={StatisticsLandingScreen}
                />
            </Stack.Navigator>
        </View>);
}

export default StatisticsNavStack


