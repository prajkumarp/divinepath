// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

// Screens
import InfoLandingScreen from '../../Features/Info/UI/Screen/InfoLandingScreen';
import { colors } from '../Theme/Colors/GlobalColors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, View } from 'react-native';
import { globalStyle, iconSize } from '../Theme/Styles/GlobalStyle';
import i18next from '../../Base/Resources/Translations/i18n';
import { faInfoCircle as faInfoCircle } from '@fortawesome/pro-light-svg-icons'
import { faUser as faUser } from '@fortawesome/pro-light-svg-icons';
import { faChartBar as faChartBar } from '@fortawesome/pro-light-svg-icons';
import { faTools as faTools } from '@fortawesome/pro-light-svg-icons';
import KriyaNavStack from '../../Features/Kriya/Navigation/KriyaNavStack';
import MeditationNavStack from '../../Features/Meditation/Navigation/MeditationNavStack';
import MyThingsNavStack from '../../Features/MyThings/Navigation/MyThingsNavStack';
import StatisticsNavStack from '../../Features/Statistics/Navigation/StatisticsNavStack';
import TestingNavStack from '../../Features/Testing/Navigation/TestingNavStack';


const TabNavStack: React.FC = () => {


    const Tab = createMaterialBottomTabNavigator();

    return (

        <Tab.Navigator
            initialRouteName="Meditation"
            // shifting={true}
            activeColor={colors.tabIconColor}
            inactiveColor={colors.transparentWhite}
        // barStyle={{ backgroundColor: colors.lightBlue }}
        >
            <Tab.Screen name="Meditation" component={MeditationNavStack}
                options={{
                    tabBarColor: colors.lightestBlue,
                    tabBarLabel: i18next.t('appName'),
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                style={[globalStyle.smallLogo, !focused && { opacity: 0.75 }]}
                                source={require('../../Base/Resources/Images/Lotus.png')}
                            />
                        </View>
                    ),
                }} />
            <Tab.Screen name="My Things" component={MyThingsNavStack}
                options={{
                    tabBarColor: colors.electricBlue,
                    tabBarLabel: 'My Things',
                    tabBarIcon: () => (
                        <View>
                            <FontAwesomeIcon
                                icon={faUser}
                                style={{ color: colors.tabIconColor }}
                                size={iconSize.small}
                            />
                        </View>
                    ),
                }} />
            <Tab.Screen name="Kriya" component={KriyaNavStack}
                options={{
                    tabBarColor: colors.goldenYellow,
                    tabBarLabel: 'Kriya',
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image style={[globalStyle.smallLogo, !focused && { opacity: 1.0 }]} source={require('../../Base/Resources/Images/rose-small.png')} />
                        </View>
                    ),
                }} />
            <Tab.Screen name="Statistics" component={StatisticsNavStack}
                options={{
                    tabBarColor: colors.electricBlue,
                    tabBarLabel: i18next.t('navigation.statistics'),
                    tabBarIcon: () => (
                        <View>
                            <FontAwesomeIcon
                                icon={faChartBar}
                                style={{ color: colors.tabIconColor }}
                                size={iconSize.small}
                            />
                        </View>
                    ),
                }} />
            <Tab.Screen name="Info" component={InfoLandingScreen}
                options={{
                    tabBarColor: colors.lightestBlue,
                    tabBarLabel: i18next.t('info.title'),
                    tabBarIcon: () => (
                        <View>
                            <FontAwesomeIcon
                                // icon={['fal', 'info-circle']}
                                icon={faInfoCircle}
                                style={{ color: colors.tabIconColor }}
                                size={iconSize.small}
                            />
                        </View>
                    ),
                }} />
            <Tab.Screen name="Testing" component={TestingNavStack}
                options={{
                    tabBarColor: colors.black,
                    tabBarLabel: "Testing",
                    tabBarIcon: () => (
                        <View>
                            <FontAwesomeIcon
                                // icon={['fal', 'info-circle']}
                                icon={faTools}
                                style={{ color: colors.tabIconColor }}
                                size={iconSize.small}
                            />
                        </View>
                    ),
                }} />
        </Tab.Navigator >

    );
}

export default TabNavStack;