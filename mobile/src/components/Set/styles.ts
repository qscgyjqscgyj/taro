import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    container: {},
    buttonWrapper: {
        paddingLeft: 78,
        paddingRight: 78,
        marginTop: 29,
        marginBottom: 29,
    },
    purpleButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 26,
        paddingBottom: 26,
        paddingLeft: 32,
        paddingRight: 32,
        borderRadius: 7,
        backgroundColor: colors.purpleButtonBackground,
    },
    buttonText: {
        fontFamily: fonts.primary,
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: colors.purpleButtonText,
    },
});
