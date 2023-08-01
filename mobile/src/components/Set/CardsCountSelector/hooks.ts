import { useState } from 'react';

import { CardsCountSelectorProps } from './types';

export const PICKER_DATA = [...Array(10).keys()].map((item) => (item + 1).toString());

export function useCardsCountSelector(props: CardsCountSelectorProps) {
    const { selectHandler } = props;

    const [cardsCount, setCardsCount] = useState<number>(parseInt(PICKER_DATA[4]));

    const onCardsCountChangeHandler = (value: string) => {
        const parsedValue = parseInt(value);
        setCardsCount(parsedValue);
    };

    const onCardsCountSubmitHandler = () => {
        selectHandler(cardsCount);
    };

    return { cardsCount, onCardsCountChangeHandler, onCardsCountSubmitHandler };
}
