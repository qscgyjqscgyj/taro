import { StyleSheet } from 'react-native';

import { pallete } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: pallete.purpleLight,
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
        color: pallete.purpleDark,
        fontWeight: '400',
        fontSize: 10,
    },
});
