import { TextInput } from 'react-native';

import { useSearchInput } from './hooks';
import { SearchInputProps } from './types';

export function SearchInput(props: SearchInputProps) {
    const { value, onChangeText } = useSearchInput(props);

    return (
        <TextInput
            onChangeText={onChangeText}
            placeholder={'Поиск карты по названию'}
            value={value}
        />
    );
}
