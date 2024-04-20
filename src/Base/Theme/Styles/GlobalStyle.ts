import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../Colors/GlobalColors';

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

export const moderateScaleTextMultiplier = 0.1

const { height, width } = Dimensions.get('window')

const isIPhone = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV
    ? (width === X_WIDTH && height === X_HEIGHT) ||
    (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false

export const StatusBarHeight = Platform.select({
  ios: isIPhone() ? 44 : 60,
  android: StatusBar.currentHeight,
  default: 0,
})

const isPortrait = () => {
  const dim = Dimensions.get('window')
  return dim.height >= dim.width
}

const isLargeScreen = () => {
  const { height, width } = Dimensions.get('window')
  if (isPortrait()) {
    return width > 600
  } else {
    return height > 600
  }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

// Calculates width of the current screen. Used mostly for the carousel shadows
function widthCalculation(percentage: number) {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}

const slideWidth = widthCalculation(75)
const itemHorizontalMargin = widthCalculation(2)

export const sliderWidth = viewportWidth
export const itemWidth = slideWidth + itemHorizontalMargin * 2

// For fontAwesome icons
export const iconSize = {
  tiny: 16,
  small: 24,
  medium: 32,
  large: 48,
}

export const globalStyle = StyleSheet.create({
  container: {
    //marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingTop: 8,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    overflow: 'visible',
  },
  roundedCornerPage: {
    backgroundColor: colors.lightGray,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    height: "100%",
    overflow: 'visible',
  },
  roundedCornerPageTransparent: {
    //backgroundColor: colors.lightGray,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    height: "100%",
    overflow: 'visible',
  },
  header: {
    fontSize: moderateScale(32, moderateScaleTextMultiplier),
    marginVertical: 6,
    lineHeight: moderateScale(36, moderateScaleTextMultiplier),
    letterSpacing: 0.15,
    color: colors.lightBlue,
    fontFamily: 'barkentina'
  },
  categoryText: {
    alignSelf: 'stretch',
    textAlign: 'left',
    fontWeight: '500',
    fontSize: moderateScale(16, moderateScaleTextMultiplier),
    lineHeight: moderateScale(18, moderateScaleTextMultiplier),
    letterSpacing: 0.1,
    marginBottom: 10,
  },
  categorySubText: {
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
    textAlign: 'left',
    fontWeight: '500',
    fontSize: moderateScale(14, moderateScaleTextMultiplier),
    lineHeight: moderateScale(18, moderateScaleTextMultiplier),
    color: colors.blackTransparent
  },
  normalText: {
    fontSize: moderateScale(14, moderateScaleTextMultiplier),
    lineHeight: moderateScale(20, moderateScaleTextMultiplier),
    color: colors.gray
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
    //borderRadius: 8,
  },
  card: {
    backgroundColor: colors.white,
    marginTop: 10,
    borderRadius: 8,
    shadowRadius: 8,
    elevation: 3,
  },
  button: {
    borderRadius: 24,
    borderWidth: 1,
    maxWidth: isPortrait() ? '100%' : '50%',
    alignSelf: isPortrait() ? undefined : "center"
  },
  categoryContainerTop: {
    width: '100%',
    marginVertical: 8,
  },
  categoryContainer: {
    width: '100%',
    marginTop: 60,
    marginBottom: 8
  },
  categoryContainerLast: {
    width: '100%',
    marginTop: 40,
    marginBottom: 40
  },
  buttonContent: {
    borderRadius: 24,
    height: 48,
    minWidth: 200,
    // width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomActionButtons: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
  },

  bottomActionButtonsHorizontal: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  smallLogo: {
    width: iconSize.small,
    height: iconSize.small,
    resizeMode: 'contain'
  },
  cardSmall: {
    backgroundColor: colors.lightBlue,
    height: 152,
    width: 152,
    marginEnd: 10,
    borderRadius: 8,
    elevation: 3,
  },
  disabled: {
    opacity: 0.5
  }
})