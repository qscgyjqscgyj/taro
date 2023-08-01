import { StyleSheet } from 'react-native';

import { pallete } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 45,
        paddingRight: 45,
    },
    closeWrapper: {
        paddingTop: 14,
        paddingRight: 14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: pallete.white,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
    },
    headerWrapper: {
        paddingTop: 10,
        paddingBottom: 40,
        paddingLeft: 56,
        paddingRight: 56,
        backgroundColor: pallete.white,
    },
    headerText: {
        fontFamily: fonts.primary,
        fontSize: 16,
        lineHeight: 19,
        color: pallete.purpleDark,
        textAlign: 'center',
    },

    controlsWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    controlWrapper: {
        flex: 1,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 26,
        paddingRight: 26,
        backgroundColor: pallete.purpleLight,
    },
    leftButton: {
        borderBottomLeftRadius: 13,
    },
    rightButton: {
        borderBottomRightRadius: 13,
        borderLeftWidth: 1,
        borderSize: 12,
        borderColor: pallete.purpleDark,
    },
    controlText: {
        fontFamily: fonts.primary,
        fontSize: 12,
        lineHeight: 15,
        color: pallete.purpleDark,
        textAlign: 'center',
    },
});
