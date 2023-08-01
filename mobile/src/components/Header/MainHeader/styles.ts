import { StyleSheet } from 'react-native';

import { pallete } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: pallete.purpleDark,
        height: 98,
    },
    menuItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    menuIcon: {
        marginBottom: 7,
    },
    menuText: {
        fontFamily: fonts.primary,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        color: pallete.purpleLight,
    },
});
