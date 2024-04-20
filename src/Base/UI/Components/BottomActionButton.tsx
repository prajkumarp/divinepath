import React from 'react'
import { View } from 'react-native'
import { RoundedButton, RoundedButtonProps } from './RoundedButton'
import { globalStyle } from '../../Theme/Styles/GlobalStyle'


export const BottomActionButton = (props: RoundedButtonProps) => {
    return (
        <View style={[globalStyle.bottomActionButtons, props.style]}>
            <RoundedButton
                icon={props.icon}
                color={props.color}
                mode={props.mode}
                onPress={props.onPress}>
                {props.children}
            </RoundedButton>
        </View>

    )
}