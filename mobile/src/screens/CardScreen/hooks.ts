import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setActiveCard } from 'src/services/store';

import { CardScreenProps } from './types';

export function useCardScreen(props: CardScreenProps) {
    const { route } = props;

    const { card } = route.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveCard(card));

        return () => {
            dispatch(setActiveCard(null));
        };
    }, [card.name]);
}
