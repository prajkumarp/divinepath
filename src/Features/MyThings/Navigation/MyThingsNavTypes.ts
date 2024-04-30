import { NavigatorScreenParams } from '@react-navigation/native';
import { MyThingsRoutes } from './MyThingsRoutes';

export type MeditationStackParamList = {
    [MyThingsRoutes.MyThings]: NavigatorScreenParams<unknown>
}