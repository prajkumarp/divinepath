import React, { ReactNode } from 'react'
import { Button } from 'react-native-paper'

import { ViewStyle, TextStyle, StyleProp } from 'react-native'
import { colors } from '../../Theme/Colors/GlobalColors'
import { globalStyle } from '../../Theme/Styles/GlobalStyle'

export interface RoundedButtonProps {
    mode: 'text' | 'outlined' | 'contained' | undefined
    color: string
    icon?: string | undefined
    onPress: (() => void) | undefined
    labelStyle?: StyleProp<TextStyle>
    style?: ViewStyle
    dark?: boolean
    loading?: boolean
    children?: ReactNode
}

export const RoundedButton = (props: RoundedButtonProps) => {
    return (
        <Button
            icon={props.icon}
            disabled={props.onPress === undefined}
            buttonColor={props.color}
            mode={props.mode}
            dark={props.dark}
            loading={props.loading}
            labelStyle={[props.labelStyle, { textTransform: 'none' }]}
            style={[
                globalStyle.button,
                props.mode === 'outlined' && {
                    backgroundColor: colors.transparentWhite,
                    borderColor: props.color,

                },
                props.style
            ]}
            contentStyle={globalStyle.buttonContent}
            onPress={props.onPress}>
            {props.children}
        </Button>
    )
}
