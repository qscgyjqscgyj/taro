import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useCallback } from 'react';

export function useHeader(props: NativeStackHeaderProps) {
    const { navigation } = props;

    const onBackPressHandler = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return { onBackPressHandler };
}
