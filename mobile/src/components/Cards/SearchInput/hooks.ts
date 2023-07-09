import { useState } from 'react';

import { SearchInputProps } from './types';

// TODO: Write test on the hook to test that it's filtering the data correctly
export function useSearchInput(props: SearchInputProps) {
    const { onChange } = props;

    const [value, setValue] = useState<string>('');

    const onChangeText = (text: string) => {
        onChange(text);
        setValue(text);
    };

    return {
        value,
        onChangeText,
    };
}
