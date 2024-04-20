import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StoreState } from './Store'

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector