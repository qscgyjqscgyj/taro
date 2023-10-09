import { TextInput, View } from 'react-native';

import { useTranslation } from 'src/services/localization/hooks';

import { useSearchInput } from './hooks';
import { SearchInputProps } from './types';
import { styles } from './styles';

export function SearchInput(props: SearchInputProps) {
    const { value, onChangeText } = useSearchInput(props);

    const { t } = useTranslation();

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                onChangeText={onChangeText}
                placeholder={t('cardsSearchInputPlaceholder')}
                placeholderTextColor={'#665757'}
                value={value}
            />
        </View>
    );
}
