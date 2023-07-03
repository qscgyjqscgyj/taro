import { useCallback, useEffect, useState } from 'react';

import { CardData, SetData } from 'shared/types/cards';

import { createNewActiveSet, deleteActiveSet, getActiveSet } from 'src/services/storage/sets';
import { useAppContext } from 'src/services/store/context';

import { SetProps } from './types';

// TODO: write tests on this hook
export function useSet(props: SetProps) {
    const { params } = props.route;

    const card = params?.card;

    const [activeSet, setActiveSet] = useState<SetData | null>(params?.activeSet ?? null);

    const { cards } = useAppContext();

    const generateRandomSet = useCallback(async () => {
        const randomCards = cards.sort(() => Math.random() - 0.5).slice(0, 5);

        const newActiveSet = await createNewActiveSet(randomCards);

        setActiveSet(newActiveSet);
    }, [card]);

    const clearActiveSet = useCallback(async () => {
        await deleteActiveSet();
        loadActiveSet();
    }, []);

    const loadActiveSet = useCallback(() => {
        const getOrCreateNewActiveSetAsync = async (c: CardData | undefined) => {
            const currentActiveSet = await getActiveSet();

            if (currentActiveSet === null) {
                const newActiveSet = await createNewActiveSet(c && [c]);
                setActiveSet(newActiveSet);
            } else {
                setActiveSet(currentActiveSet);
            }
        };

        if (activeSet !== null) {
            setActiveSet(activeSet);
        } else {
            getOrCreateNewActiveSetAsync(card);
        }
    }, [card, activeSet]);

    useEffect(() => {
        loadActiveSet();
    }, [card, activeSet]);

    return { activeSet, clearActiveSet, generateRandomSet };
}
