import { Text, TouchableOpacity, View } from 'react-native';
import { Picker } from 'react-native-wheel-pick';

import { useCardsCountSelector, PICKER_DATA } from './hooks';
import { CardsCountSelectorProps } from './types';
import { styles } from './styles';

export function CardsCountSelector(props: CardsCountSelectorProps) {
    const { cardsCount, onCardsCountChangeHandler, onCardsCountSubmitHandler } =
        useCardsCountSelector(props);

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Сколько карт добавить в расклад?</Text>
            </View>

            <View style={styles.pickerWrapper}>
                <Picker
                    style={styles.picker}
                    selectedValue={String(cardsCount)}
                    pickerData={PICKER_DATA}
                    onValueChange={onCardsCountChangeHandler}
                />
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={onCardsCountSubmitHandler}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Создать расклад</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
