import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {},
    cardsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 150,
    },
    cardWrapper: {
        display: 'flex',
        width: '33%',
        flexDirection: 'column',
        marginBottom: 10,
    },
    cardImageWrapper: {
        marginBottom: 5,
    },
    cardImage: {
        width: 'auto',
        height: 150,
        resizeMode: 'contain',
    },
    cardNameWrapper: {},
    cardNameText: {
        textAlign: 'center',
        fontSize: 10,
    },
});
