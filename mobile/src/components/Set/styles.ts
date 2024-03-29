import { StyleSheet } from 'react-native';

import { pallete } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    container: {},
    buttonWrapper: {
        paddingLeft: 78,
        paddingRight: 78,
        marginTop: 10,
        marginBottom: 10,
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
        backgroundColor: pallete.purpleLight,
    },
    buttonText: {
        fontFamily: fonts.primary,
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: pallete.purpleDark,
    },

    modalSetContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingTop: 50,
    },
    moadlSetCloseIconWrapper: {
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 40,
    },

    cardsListScrollWrapper: {
        height: '100%',
        paddingTop: 10,
    },
    cardsListWrapper: {
        paddingTop: 10,
        marginBottom: 100,
    },
});
