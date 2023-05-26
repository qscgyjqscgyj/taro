import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    searchInput: {
        width: '80%',
        height: 42,
        marginTop: 22,
        fontFamily: fonts.primary,
        fontWeight: '400',
        fontSize: 16,
        fontHeight: 29,
        backgroundColor: colors.searchInputBackground,
        borderRadius: 8,
        paddingLeft: 25,
    },
});
