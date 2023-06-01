import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    container: {},
    cardsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 150,
        justifyContent: 'space-between',
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
});
