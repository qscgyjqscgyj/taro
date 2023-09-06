import { StyleSheet } from 'react-native';
import { pallete } from 'src/styles/colors';
import { fonts } from 'src/styles/fonts';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 42,
        paddingRight: 42,
    },
    cardWrapper: {
        width: '100%',
        height: 275,
        paddingBottom: 16,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: {
            width: 6,
            height: 6,
        },
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    reversedImage: {
        transform: [{ rotate: '180deg' }],
    },
    cardTitleWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    cardTitle: {
        fontFamily: fonts.bold,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 19,
        color: pallete.white,
    },
    cardSubTitle: {
        fontFamily: fonts.light,
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 19,
        color: pallete.white,
    },

    descriptionWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 16,
        borderBottomColor: pallete.white,
        borderBottomWidth: 1,
    },
    descriptionTitleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    descriptionTitle: {
        fontFamily: fonts.bold,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 17,
        color: pallete.white,
    },
    dropdownReverseChevronIcon: {
        transform: [{ rotate: '180deg' }],
    },
    descriptionTextWrapper: {
        paddingBottom: 16,
    },
    descriptionTextItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    descriptionText: {
        fontFamily: fonts.primary,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        color: pallete.white,
    },
    bullet: {
        marginRight: 10,
        fontFamily: fonts.bold,
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 17,
        color: pallete.white,
    },
});
