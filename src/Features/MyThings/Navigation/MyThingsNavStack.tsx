
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyThingsRoutes } from './MyThingsRoutes';
import MyThingsLandingScreen from '../Screen/MyThingsLandingScreen';

const MyThingsNavStack: React.FC = () => {

    const Stack = createNativeStackNavigator()

    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
                initialRouteName={MyThingsRoutes.MyThings}
                screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
                <Stack.Screen
                    name={MyThingsRoutes.MyThings}
                    component={MyThingsLandingScreen}
                />
            </Stack.Navigator>
        </View>);
}

export default MyThingsNavStack


