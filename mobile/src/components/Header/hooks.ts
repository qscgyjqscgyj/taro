import { useCallback } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export function useHeader(props: NativeStackHeaderProps) {
    const { navigation } = props;

    const onBackPressHandler = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return { onBackPressHandler };
}
