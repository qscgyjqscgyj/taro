import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 104,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: '#3E2276',
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
