import { NavigatorScreenParams } from '@react-navigation/native';
import { TabRoutes } from './TabRoutes';

export type AppStackParamList = {
    [TabRoutes.Meditation]: NavigatorScreenParams<unknown>;
    [TabRoutes.MyThings]: NavigatorScreenParams<unknown>;
    [TabRoutes.Kriya]: NavigatorScreenParams<unknown>;
    [TabRoutes.Statistics]: NavigatorScreenParams<unknown>;
    [TabRoutes.Info]: NavigatorScreenParams<unknown>;
};