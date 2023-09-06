import { StyleSheet } from 'react-native';
import { pallete } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    switcherWrapper: {
        paddingTop: 20,
        paddingLeft: 55,
        paddingRight: 55,
    },
    tabWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingBottom: 23,
        paddingLeft: 29,
        paddingRight: 29,
    },
    historyItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 7,
        backgroundColor: pallete.purpleLight,
        paddingLeft: 27,
        paddingRight: 27,
        paddingTop: 12,
        paddingBottom: 12,
        marginBottom: 6,
    },
    historyItemCards: {
        display: 'flex',
        flexDirection: 'column',
    },
    historyItemDate: {
        display: 'flex',
        flexDirection: 'column',
    },
});
