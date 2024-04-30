import { NavigatorScreenParams } from '@react-navigation/native';
import { KriyaRoutes } from "./KriyaRoutes"


export type KriyaStackParamList = {
    [KriyaRoutes.Kriya]: NavigatorScreenParams<unknown>
}