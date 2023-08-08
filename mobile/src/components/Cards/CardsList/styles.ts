import { StyleSheet } from 'react-native';

import { pallete } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
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
});
