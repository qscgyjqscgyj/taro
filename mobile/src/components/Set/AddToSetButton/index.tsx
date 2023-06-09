import { Image, Text, TouchableOpacity, View } from 'react-native';

import { HeaderProps } from 'src/components/Header/types';
import { crownIcon } from 'src/components/Cards/CardsFilter/images';

import { useAddToSetButton } from './hooks';
import { styles } from './styles';

export function AddToSetButton(props: HeaderProps) {
    const { navigation } = props;

    const { activeCard } = useAddToSetButton();

    if (activeCard === undefined) {
        return null;
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Set', { card: activeCard })}>
            <View style={styles.button}>
                <Image style={styles.icon} source={crownIcon} />
                <Text style={styles.text}>добавить в расклад</Text>
            </View>
        </TouchableOpacity>
    );
}
