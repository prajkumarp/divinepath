import React from 'react'
import { View } from 'react-native-animatable'
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import i18next from 'i18next'
import { Linking } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Text } from 'react-native-paper'
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../Theme/Colors/GlobalColors'
import { linkTrackingParameters } from '../../Helpers/Config'
import { faHandsHeart as faHandsHeart } from '@fortawesome/pro-light-svg-icons'

export const moderateScaleTextMultiplier = 0.1

export const DonateWidget = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundButton}>
                <FontAwesomeIcon
                    icon={faHandsHeart}
                    size={24}
                    style={styles.icon} />
                <Text>    </Text>
                <Text style={styles.buttonText}>{i18next.t('donate')}</Text>
            </TouchableOpacity>
        </View>

    )
}

const buttonClickedHandler = () => {
    //TODO: Fix this later
    //   FirebaseLogEvents.donateClicked()
    Linking.openURL('https://www.ananda.org/support/?' + linkTrackingParameters)
}

// Styles
const styles = StyleSheet.create({
    roundButton: {
        width: Dimensions.get('window').width - 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: colors.lightestBlue,
        flex: 1,
        flexDirection: 'row',
    },
    buttonText: {
        textAlign: 'left',
        fontWeight: '500',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: moderateScale(24, moderateScaleTextMultiplier),
        color: colors.white,
    },
    icon: {
        justifyContent: 'center',
        color: colors.white
    },
});
