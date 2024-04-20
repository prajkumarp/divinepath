import React from 'react'
import { Text } from 'react-native'

import { globalStyle } from '../../Theme/Styles/GlobalStyle'
import TimeUtility from '../../Helpers/TimeUtility'


export const DurationSmallWidget = (props: {
    indefinite: boolean
    duration: number
    textTime?: boolean
    color?: string
}) => {
    return (
        <Text
            style={[globalStyle.categorySubText, { color: props.color }]}>
            {props.textTime
                ? TimeUtility.secondsToText(props.duration, { printWithSeconds: true })
                : TimeUtility.secondToTime(props.duration)}
        </Text>
    )
}
