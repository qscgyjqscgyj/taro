import { createNewActiveSet, getActiveSet } from 'src/services/storage/sets';
import { SetProps } from './types';
import { useEffect, useState } from 'react';
import { CardData, SetData } from 'shared/types/cards';

// TODO: write tests on this hook
export function useSet(props: SetProps) {
    const { params } = props.route;

    const card = params?.card;

    const [activeSet, setActiveSet] = useState<SetData | null>(params?.activeSet ?? null);

    useEffect(() => {
        const getOrCreateNewActiveSetAsync = async (c: CardData | undefined) => {
            const currentActiveSet = await getActiveSet();

            if (currentActiveSet === null) {
                const newActiveSet = await createNewActiveSet(c);
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

    return { activeSet };
}
