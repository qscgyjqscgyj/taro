import { useMemo, useState } from 'react';

import { CardProps } from './types';

export function useCard(props: CardProps) {
    const { card, direction } = props;

    const [reversedValue, setReversedValue] = useState<boolean>(direction === 'reversed');
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

    const reversedValueToggle = () => {
        setReversedValue((prevState) => !prevState);
    };

    const toggleCardDescriptionAccordion = (index: number) => {
        setOpenedCardDescriptionIndeces((prevState) => {
            const newState = new Set(prevState);

            if (newState.has(index)) {
                newState.delete(index);
            } else {
                newState.add(index);
            }

            return newState;
        });
    };

    return {
        reversedValue,
        filteredCardDescription,
        reversedValueToggle,
        toggleCardDescriptionAccordion,
        openedCardDescriptionIndeces,
    };
}
