import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 30,
        marginBottom: 30,
    },
    arcanaFilterWrapper: {
        // marginBottom: 20,
    },
    arcanaMajorIcon: {
        width: 50,
        height: 50,
        borderColor: '#a92525',
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: [{ rotate: '45deg' }],
    },
    arcanaMajorDiagonalLine: {
        width: 0.5,
        height: '100%',
        borderColor: '#a92525',
        borderWidth: 2,
        transform: [{ rotate: '45deg' }],
    },

    arcanaMinorIcon: {
        width: 50,
        height: 50,
        borderColor: '#000',
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: [{ rotate: '45deg' }],
    },
    arcanaMinorDiagonalLine: {
        width: 0.5,
        height: '100%',
        borderColor: '#000',
        borderWidth: 2,
        transform: [{ rotate: '45deg' }],
    },

    suitFilterWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    suitFilterItem: {
        marginRight: 20,
        marginLeft: 20,
    },
    activeSuitFilter: {
        backgroundColor: '#000',
    },
    activeSuitFilterText: {
        color: '#fff',
    },
});