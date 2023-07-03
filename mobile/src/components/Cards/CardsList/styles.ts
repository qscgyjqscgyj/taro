import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    cardsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingLeft: 14,
        paddingRight: 14,
    },
    cardWrapper: {
        display: 'flex',
        width: '33%',
        flexDirection: 'column',
    },
    cardImageWrapper: {
        marginBottom: 8,
    },
    cardImage: {
        width: 'auto',
        height: 150,
        resizeMode: 'contain',
    },
    cardNameWrapper: {
        marginBottom: 17,
    },
    cardNameText: {
        textAlign: 'center',
        fontFamily: fonts.primary,
        fontSize: 10,
        color: colors.headerText,
    },
    emptyCardWrpper: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: 150,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: colors.addCardButtonBordder,
        borderStyle: 'dashed',
    },
    emptyCardAddIcon: {
        marginBottom: 17,
    },
    emptyCardText: {
        textAlign: 'center',
        fontFamily: fonts.primary,
        fontSize: 12,
        color: colors.whiteText,
    },
});
