import { StyleSheet } from 'react-native';
import { colors } from 'src/styles/colors';
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
        color: colors.whiteText,
    },
    cardSubTitle: {
        fontFamily: fonts.light,
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 19,
        color: colors.whiteText,
    },
    cardDirectionWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.switcherBackground,
        borderRadius: 34,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 5,
        paddingRight: 5,
        // marginBottom: 30,
    },
    cardDirectionItem: {
        alignItems: 'center',
        width: '50%',
    },
    cardDirectionActiveItem: {
        borderRadius: 34,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: colors.switcherActiveBackground,
    },

    descriptionWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 26,
    },
    descriptionTitle: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'left',
        fontFamily: fonts.bold,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 17,
        color: colors.whiteText,
        marginBottom: 16,
    },
});
