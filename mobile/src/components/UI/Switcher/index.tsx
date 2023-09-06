import { Pressable, Text, View } from 'react-native';

import { styles } from './styles';

interface SwitcherProps {
    onPress: () => void;
    values: [string, string];
    value: 0 | 1;
}

export function Switcher(props: SwitcherProps) {
    const { onPress, values, value } = props;

    return (
        <Pressable onPress={onPress}>
            <View style={styles.cardDirectionWrapper}>
                <View
                    style={[
                        styles.cardDirectionItem,
                        value === 1 ? {} : styles.cardDirectionActiveItem,
                    ]}
                >
                    <Text>{values[0]}</Text>
                </View>

                <View
                    style={[
                        styles.cardDirectionItem,
                        value === 0 ? {} : styles.cardDirectionActiveItem,
                    ]}
                >
                    <Text>{values[1]}</Text>
                </View>
            </View>
        </Pressable>
    );
}
