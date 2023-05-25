import { useCallback, useState } from 'react';

import { SearchInputProps } from './types';

export function useSearchInput(props: SearchInputProps) {
    const { onChange } = props;

    const [value, setValue] = useState<string>('');

    const onChangeText = useCallback(
        (text: string) => {
            onChange(text);
            setValue(text);
        },
        [onChange],
    );

    return {
        value,
        onChangeText,
    };
}
