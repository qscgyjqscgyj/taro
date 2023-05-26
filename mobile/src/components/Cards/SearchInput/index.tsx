import { TextInput, View } from 'react-native';

import { useSearchInput } from './hooks';
import { SearchInputProps } from './types';
import { styles } from './styles';

export function SearchInput(props: SearchInputProps) {
    const { value, onChangeText } = useSearchInput(props);

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                onChangeText={onChangeText}
                placeholder={'Поиск карты по названию'}
                placeholderTextColor={'#665757'}
                value={value}
            />
        </View>
    );
}
