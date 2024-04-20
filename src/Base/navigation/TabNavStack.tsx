// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

// Screens
import MeditationLandingScreen from '../../Features/Meditation/Screen/MeditationLandingScreen';
import MyThingsLandingScreen from '../../Features/MyThings/Screen/MyThingsLandingScreen';
import KriyaLandingScreen from '../../Features/Kriya/Screen/KriyaLandingScreen';
import StatisticsLandingScreen from '../../Features/Statistics/Screen/StatisticsLandingScreen';
import InfoLandingScreen from '../../Features/Info/UI/Screen/InfoLandingScreen';



const TabNavStack: React.FC = () => {


    const Tab = createMaterialBottomTabNavigator();

    return (

        <Tab.Navigator
            initialRouteName="Meditation"
            activeColor="black"
            inactiveColor='blue'
            shifting={false}
            labeled={true}
        >
            <Tab.Screen name="Meditation" component={MeditationLandingScreen} options={{ tabBarColor: '#FFFFFF00' }} />
            <Tab.Screen name="My Things" component={MyThingsLandingScreen} options={{ tabBarColor: 'red' }} />
            <Tab.Screen name="Kriya" component={KriyaLandingScreen} options={{ tabBarColor: 'yellow' }} />
            <Tab.Screen name="Statistics" component={StatisticsLandingScreen} options={{ tabBarColor: 'red' }} />
            <Tab.Screen name="Info" component={InfoLandingScreen} options={{ tabBarColor: 'blue' }} />
        </Tab.Navigator>

    );
}

export default TabNavStack;