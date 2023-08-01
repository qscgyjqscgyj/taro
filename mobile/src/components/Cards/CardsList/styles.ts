import { Platform, StyleSheet } from 'react-native';

import { pallete } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    cardsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingTop: 16,
        paddingLeft: 14,
        paddingRight: 14,
    },
    cardWrapper: {
        display: 'flex',
        width: '33%',
        flexDirection: 'column',
    },
    cardImageContainer: {
        marginBottom: 8,
    },
    cardImageWrapper: {
        position: 'relative',
        zIndex: 0,
    },
    cardImage: {
        width: 'auto',
        height: 150,
        resizeMode: 'contain',
    },
    reversedImage: {
        transform: [{ rotate: '180deg' }],
    },

    cardNameWrapper: {
        marginBottom: 17,
    },
    cardNameText: {
        textAlign: 'center',
        fontFamily: fonts.primary,
        fontSize: 10,
        color: pallete.purpleLight,
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
        borderColor: pallete.grey,
        borderStyle: 'dashed',
    },
    emptyCardAddIcon: {
        marginBottom: 17,
    },
    emptyCardText: {
        textAlign: 'center',
        fontFamily: fonts.primary,
        fontSize: 12,
        color: pallete.white,
    },

    deleteIconWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: pallete.purpleLight,
        borderRadius: 50,
        padding: 5,
        top: -15,
        right: 5,
        zIndex: 1,
        elevation: Platform.OS === 'android' ? 50 : 0,
    },
    deleteIcon: {
        transform: [{ rotate: '45deg' }],
    },
});
