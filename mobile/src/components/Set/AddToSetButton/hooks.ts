import { useCallback, useState } from 'react';

import { SetData } from 'shared/types/cards';

import { HeaderProps } from 'src/components/Header/types';
import { getActiveSet } from 'src/services/storage/sets';
import { useAppContext } from 'src/services/store/context';

export function useAddToSetButton(props: HeaderProps) {
    const { navigation } = props;

    const [activeSet, setActiveSet] = useState<SetData | null>(null);

    const { activeCard } = useAppContext();

    const addToSetHandler = useCallback(() => {
        const activeSetPromise = getActiveSet();

        activeSetPromise.then((set) => {
            setActiveSet(set);

            navigation.navigate('Set', { card: activeCard, activeSet });
        });
    }, [activeCard, navigation, activeSet]);

    return { activeCard, addToSetHandler };
}
