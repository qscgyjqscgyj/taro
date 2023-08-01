import { StyleSheet } from 'react-native';

import { pallete } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%',
        backgroundColor: pallete.opacityBlack,
    },
    closeWrapper: {
        paddingTop: 24,
        paddingRight: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    dialogWrapper: {
        display: 'flex',
        height: '60%',
        backgroundColor: pallete.purpleLight,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
});
