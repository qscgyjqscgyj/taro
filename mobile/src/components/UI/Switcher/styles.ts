import { StyleSheet } from 'react-native';
import { pallete } from 'src/styles/colors';

export const styles = StyleSheet.create({
    cardDirectionWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: pallete.grey,
        borderRadius: 34,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 30,
    },
    cardDirectionItem: {
        alignItems: 'center',
        width: '50%',
    },
    cardDirectionActiveItem: {
        borderRadius: 34,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: pallete.greyLight,
    },
});
