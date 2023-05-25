import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: colors.headerBackground,
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
        color: colors.headerText,
    },
    leftBlock: {
        padding: 10,
        flex: 3,
    },
    leftBlockText: {
        textAlign: 'left',
    },

    centerBlock: {
        padding: 10,
        flex: 3,
    },
    centerBlockText: {
        textAlign: 'center',
    },

    rightBlock: {
        padding: 10,
        flex: 3,
    },
    rightBlockText: {
        textAlign: 'right',
    },
});
