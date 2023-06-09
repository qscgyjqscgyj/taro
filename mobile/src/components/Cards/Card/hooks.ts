import { useCallback, useEffect, useState } from 'react';

import { useAppContext } from 'src/services/store/context';

import { CardProps } from './types';

export function useCard(props: CardProps) {
    const { route } = props;

    const { card } = route.params;

    const [reversedValue, setReversedValue] = useState<boolean>(false);

    const { dispatch } = useAppContext();

    const reversedValueToggle = useCallback(() => {
        setReversedValue((prevState) => !prevState);
    }, []);

    useEffect(() => {
        dispatch({ type: 'SET_ACTIVE_CARD', payload: card });

        return () => {
            dispatch({ type: 'SET_ACTIVE_CARD', payload: undefined });
        };
    }, [card]);

    return { reversedValue, reversedValueToggle };
}
