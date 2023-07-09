import { useEffect } from 'react';

import { useAppContext } from 'src/services/store/context';

import { CardScreenProps } from './types';

export function useCardScreen(props: CardScreenProps) {
    const { route } = props;

    const { card } = route.params;

    const { dispatch } = useAppContext();

    useEffect(() => {
        dispatch({ type: 'SET_ACTIVE_CARD', payload: card });

        return () => {
            dispatch({ type: 'SET_ACTIVE_CARD', payload: undefined });
        };
    }, [card.name]);
}
