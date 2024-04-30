import { NavigatorScreenParams } from '@react-navigation/native';
import { MeditationRoutes } from './MeditationRoutes';



export type MeditationStackParamList = {
    [MeditationRoutes.Meditation]: NavigatorScreenParams<unknown>
}