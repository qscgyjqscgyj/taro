import { useCallback, useEffect, useMemo, useState } from 'react';

import { useAppContext } from 'src/services/store/context';

import { CardProps } from './types';

export function useCard(props: CardProps) {
    const { route } = props;

    const { card } = route.params;

    const [reversedValue, setReversedValue] = useState<boolean>(false);
    const [openedCardDescriptionIndeces, setOpenedCardDescriptionIndeces] = useState<Set<number>>(
        new Set([0]),
    );

    const filteredCardDescription = useMemo(() => {
        return card.description.filter((description) => {
            if (reversedValue) {
                return description.direction === 'reversed';
            }

            return description.direction === 'normal';
        });
    }, [card, reversedValue]);

    const { dispatch } = useAppContext();

    const reversedValueToggle = useCallback(() => {
        setReversedValue((prevState) => !prevState);
    }, []);

    const toggleCardDescriptionAccordion = useCallback((index: number) => {
        setOpenedCardDescriptionIndeces((prevState) => {
            const newState = new Set(prevState);

            if (newState.has(index)) {
                newState.delete(index);
            } else {
                newState.add(index);
            }

            return newState;
        });
    }, []);

    useEffect(() => {
        dispatch({ type: 'SET_ACTIVE_CARD', payload: card });

        return () => {
            dispatch({ type: 'SET_ACTIVE_CARD', payload: undefined });
        };
    }, [card]);

    return {
        reversedValue,
        filteredCardDescription,
        reversedValueToggle,
        toggleCardDescriptionAccordion,
        openedCardDescriptionIndeces,
    };
}
