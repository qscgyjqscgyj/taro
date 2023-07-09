import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: colors.headerBackground,
        height: 98,
    },

    leftBlock: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 28,
        paddingRight: 10,
    },
    leftBlockText: {
        textAlign: 'left',
    },

    centerBlock: {
        padding: 10,
    },
    centerBlockText: {
        textAlign: 'center',
        color: colors.headerText,
        fontFamily: fonts.primary,
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 29,
    },

    rightBlock: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 28,
    },
    rightBlockText: {
        textAlign: 'right',
    },
});
