import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { View, StatusBar, StyleSheet, Platform, StatusBarStyle } from 'react-native'

export interface GeneralStatusBarColorProps {
    statusBarStyle?: StatusBarStyle
    backgroundColor?: string
}

const GeneralStatusBarColor = (props: GeneralStatusBarColorProps) => {

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle(props.statusBarStyle ? props.statusBarStyle : 'default', true)
            Platform.OS === 'android' && props.backgroundColor && StatusBar.setBackgroundColor(props.backgroundColor, true)
        }, [])
    )

    return <View />

}

export default GeneralStatusBarColor