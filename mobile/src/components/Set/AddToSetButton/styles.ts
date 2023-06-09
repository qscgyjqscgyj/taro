import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.headerButtonBackground,
        borderRadius: 7,
        padding: 10,
        width: 70,
    },
    icon: {
        width: 20,
        height: 20,
    },
    text: {
        fontFamily: fonts.primary,
        color: colors.headerButtonText,
        fontWeight: '400',
        fontSize: 10,
        // lineHeight: 12,
    },
});
