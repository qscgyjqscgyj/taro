import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { isTimeDifferenceGreaterThanHours } from 'shared/utils/date';

import { HeaderProps } from 'src/components/Header/types';
import { useModal } from 'src/components/Modal/hooks';
import { addCardToActiveSet, createNewActiveSet, getActiveSet } from 'src/services/storage/sets';
import { selectActiveCard } from 'src/services/store';

// TODO: write tests on this hook
export function useAddToSetButton(props: HeaderProps) {
    const { navigation } = props;

    const activeCard = useSelector(selectActiveCard);

    const { openModal, closeModal, isModalOpen } = useModal();

    const createNewSetHandler = useCallback(async () => {
        const newActiveSet = await createNewActiveSet(activeCard ? [activeCard] : undefined);

        navigation.navigate('Set', { card: activeCard, activeSet: newActiveSet });
        closeModal();
    }, [activeCard, navigation]);

    const addActiveCardToActiveSetHandler = useCallback(async () => {
        if (activeCard) {
            const activeSet = await addCardToActiveSet(activeCard);
            navigation.navigate('Set', { card: activeCard, activeSet });
        }
        closeModal();
    }, [activeCard, navigation]);

    const addToSetHandler = useCallback(async () => {
        const currentActiveSet = await getActiveSet();

        if (currentActiveSet !== null) {
            const nowDate = new Date();
            const currentActiveSetDate = new Date(
                currentActiveSet.updatedAt ?? currentActiveSet.createdAt,
            );

            if (isTimeDifferenceGreaterThanHours(currentActiveSetDate, nowDate, 1)) {
                return openModal();
            } else {
                return await addActiveCardToActiveSetHandler();
            }
        } else {
            await createNewSetHandler();
        }

        return navigation.navigate('Set', { card: activeCard });
    }, [activeCard, navigation, openModal, addActiveCardToActiveSetHandler]);

    return {
        activeCard,
        addToSetHandler,
        isModalOpen,
        closeModal,
        createNewSetHandler,
        addActiveCardToActiveSetHandler,
    };
}
