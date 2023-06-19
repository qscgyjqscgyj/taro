import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    headerWrapper: {
        backgroundColor: colors.dialogHeaderBackground,
        paddingTop: 22,
        paddingBottom: 22,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 13,
    },
    headerText: {
        fontFamily: fonts.primary,
        fontSize: 16,
        lineHeight: 19,
        color: colors.headerButtonText,
    },

    controlsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    controlWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: colors.headerButtonBackground,
        borderSize: 1,
        borderColor: colors.headerButtonText,
    },
    controlText: {
        fontFamily: fonts.primary,
        fontSize: 12,
        lineHeight: 15,
        color: colors.headerButtonText,
    },
});
