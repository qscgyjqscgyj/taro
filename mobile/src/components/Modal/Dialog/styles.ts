import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';
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
        backgroundColor: colors.dialogHeaderBackground,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
    },
    headerWrapper: {
        paddingTop: 10,
        paddingBottom: 40,
        paddingLeft: 56,
        paddingRight: 56,
        backgroundColor: colors.dialogHeaderBackground,
    },
    headerText: {
        fontFamily: fonts.primary,
        fontSize: 16,
        lineHeight: 19,
        color: colors.headerButtonText,
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
        backgroundColor: colors.headerButtonBackground,
    },
    leftButton: {
        borderBottomLeftRadius: 13,
    },
    rightButton: {
        borderBottomRightRadius: 13,
        borderLeftWidth: 1,
        borderSize: 12,
        borderColor: colors.headerButtonText,
    },
    controlText: {
        fontFamily: fonts.primary,
        fontSize: 12,
        lineHeight: 15,
        color: colors.headerButtonText,
        textAlign: 'center',
    },
});
