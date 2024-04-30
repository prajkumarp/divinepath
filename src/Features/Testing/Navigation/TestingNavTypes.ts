import { NavigatorScreenParams } from '@react-navigation/native';
import { TestingRoutes } from './TestingRoutes';


export type TestingStackParamList = {
    [TestingRoutes.Testing]: NavigatorScreenParams<unknown>
}
