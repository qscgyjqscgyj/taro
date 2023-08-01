import { StyleSheet } from 'react-native';

import { pallete } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 28,
        paddingRight: 28,
        marginBottom: 27,
    },
    searchInput: {
        width: '100%',
        height: 42,
        marginTop: 22,
        fontFamily: fonts.primary,
        fontWeight: '400',
        fontSize: 16,
        backgroundColor: pallete.purpleLighter,
        borderRadius: 8,
        paddingLeft: 25,
    },
});
