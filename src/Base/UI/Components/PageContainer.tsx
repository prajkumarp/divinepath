import React, { ReactNode } from 'react'
import { Image, View } from "react-native-animatable"
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView, StatusBarStyle, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { colors } from '../../Theme/Colors/GlobalColors'
import { globalStyle } from '../../Theme/Styles/GlobalStyle'
import GeneralStatusBarColor from './GeneralStatusBarColor'

export interface PageContainerProps {
    children: ReactNode
    withRoundedTop?: boolean
    backgroundColor?: string
    withScrollView?: boolean
    statusBarColor?: string
    statusBarStyle?: StatusBarStyle
    backgroundImageUrl?: string
    numOfBottomButtons?: number
}


export const PageContainer = (props: PageContainerProps) => {
    if (props.withRoundedTop) {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <SafeAreaView style={[{ backgroundColor: props.backgroundColor, overflow: 'visible' }, { width: '100%', height: '100%' }]} >
                    <GeneralStatusBarColor backgroundColor={props.statusBarColor} statusBarStyle={props.statusBarStyle} />
                    <View>
                        {props.backgroundImageUrl ?
                            <Image
                                source={{
                                    uri: props.backgroundImageUrl,
                                }}
                                style={{
                                    position: 'absolute',
                                    height: "100%",
                                    width: "100%",
                                    borderTopRightRadius: 24,
                                    borderTopLeftRadius: 24,
                                    resizeMode: 'cover',
                                }} />
                            : <View />}
                        {props.withScrollView ?
                            <View style={[globalStyle.roundedCornerPage, { width: '100%', height: '100%', paddingBottom: 26 }, props.backgroundImageUrl ? { backgroundColor: colors.semiTransparentGray } : null]}>
                                <ScrollView style={[globalStyle.container]} keyboardShouldPersistTaps={"always"}>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <View>
                                            {props.children}
                                            {props.numOfBottomButtons &&
                                                <View style={{ height: props.numOfBottomButtons * 50 }} />
                                            }
                                        </View>
                                    </TouchableWithoutFeedback>
                                </ScrollView>
                            </View> :
                            <View style={[globalStyle.roundedCornerPage, { width: '100%', height: '100%' }]}>
                                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                    <View>
                                        {props.children}
                                        {props.numOfBottomButtons &&
                                            <View style={{ height: props.numOfBottomButtons * 48 }} />
                                        }
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        }
                    </View>
                </SafeAreaView >
            </View>
        )


    }
    return (
        <View>
            <SafeAreaView style={[{ backgroundColor: props.backgroundColor, overflow: 'visible' }, { width: '100%', height: '100%', paddingBottom: 26 }]} >
                <GeneralStatusBarColor backgroundColor={props.statusBarColor} statusBarStyle={props.statusBarStyle} />
                {props.withScrollView ?
                    <ScrollView style={globalStyle.container} keyboardShouldPersistTaps={"handled"}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View>
                                {props.children}

                                {props.numOfBottomButtons &&
                                    <View style={{ height: props.numOfBottomButtons * 50 }} />

                                }
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                    :
                    <View style={[globalStyle.container]}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View>
                                {props.children}

                                {props.numOfBottomButtons &&
                                    <View style={{ height: props.numOfBottomButtons * 50 }} />

                                }
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                }
            </SafeAreaView>
        </View>
    )
}