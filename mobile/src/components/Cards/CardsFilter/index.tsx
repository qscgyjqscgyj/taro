import { Image, TouchableOpacity, View } from 'react-native';

import { CardsFilterProps } from './types';
import { SUITS } from './hooks';
import { styles } from './styles';
import { crownIcon, crownSelectedIcon } from './images';

export function CardsFilter(props: CardsFilterProps) {
    const { arcanaFilter, suitFilter, toggleArcanaTypeFilter, suiteTypeFilterHandler } = props;

    return (
        <View style={styles.container}>
            <View style={styles.suitFilterWrapper}>
                <TouchableOpacity
                    key={`cards-filter-main`}
                    style={styles.suitFilterItem}
                    onPress={toggleArcanaTypeFilter}
                >
                    <Image source={arcanaFilter === 'minor' ? crownIcon : crownSelectedIcon} />
                </TouchableOpacity>

                {SUITS.map((suit) => (
                    <TouchableOpacity
                        key={`cards-filter-${suit.name}`}
                        style={styles.suitFilterItem}
                        onPress={() => suiteTypeFilterHandler(suit.name)}
                    >
                        <Image source={suitFilter === suit.name ? suit.iconSelected : suit.icon} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
