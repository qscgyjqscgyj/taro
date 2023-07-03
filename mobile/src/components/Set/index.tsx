import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { CardsList } from 'src/components/Cards/CardsList';

import { useSet } from './hooks';
import { SetProps } from './types';
import { styles } from './styles';

export function Set(props: SetProps) {
    const { activeSet, clearActiveSet, generateRandomSet } = useSet(props);

    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={generateRandomSet}>
                    <View style={styles.purpleButton}>
                        <Text style={styles.buttonText}>Сгенерировать случайный расклад</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ marginBottom: 150 }}>
                <CardsList
                    cards={activeSet?.cards ?? []}
                    onPressCard={() => {}}
                    addCard={() => {}}
                />

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={clearActiveSet}>
                        <View style={styles.purpleButton}>
                            <Text style={styles.buttonText}>Сбросить карты</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
