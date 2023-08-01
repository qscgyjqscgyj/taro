import { StyleSheet } from 'react-native';

import { pallete } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 47,
        paddingRight: 47,
    },

    headerWrapper: {
        marginBottom: 10,
    },
    headerText: {
        fontFamily: fonts.primary,
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: pallete.purpleDark,
    },

    pickerWrapper: {
        marginBottom: 10,
    },
    picker: {
        backgroundColor: pallete.purpleLight,
    },

    buttonWrapper: {
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 26,
        paddingBottom: 26,
        paddingLeft: 32,
        paddingRight: 32,
        borderRadius: 7,
        marginBottom: 10,
        backgroundColor: pallete.purpleDark,
    },
    buttonText: {
        fontFamily: fonts.primary,
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: pallete.purpleLight,
    },
});
