import { Text, TouchableOpacity, View } from 'react-native';

import { CardsFilterProps } from './types';
import { SUITS } from './hooks';
import { styles } from './styles';

export function CardsFilter(props: CardsFilterProps) {
    const { arcanaFilter, suitFilter, toggleArcanaTypeFilter, suiteTypeFilterHandler } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.arcanaFilterWrapper} onPress={toggleArcanaTypeFilter}>
                <View
                    style={{
                        ...(arcanaFilter === 'major'
                            ? styles.arcanaMajorIcon
                            : styles.arcanaMinorIcon),
                    }}
                >
                    <View
                        style={
                            arcanaFilter === 'major'
                                ? styles.arcanaMajorDiagonalLine
                                : styles.arcanaMinorDiagonalLine
                        }
                    ></View>
                </View>
            </TouchableOpacity>

            {arcanaFilter === 'minor' ? (
                <View style={styles.suitFilterWrapper}>
                    {SUITS.map((suit) => (
                        <TouchableOpacity
                            key={`suit-filter-${suit}`}
                            style={styles.suitFilterItem}
                            onPress={() => suiteTypeFilterHandler(suit)}
                        >
                            <View
                                style={{
                                    ...styles.arcanaMinorIcon,
                                    ...(suitFilter === suit ? styles.activeSuitFilter : {}),
                                }}
                            >
                                <Text
                                    style={{
                                        ...(suitFilter === suit ? styles.activeSuitFilterText : {}),
                                    }}
                                >
                                    {suit}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            ) : null}
        </View>
    );
}
