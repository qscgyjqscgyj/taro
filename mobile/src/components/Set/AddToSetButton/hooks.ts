import { useCallback, useState } from 'react';

import { SetData } from 'shared/types/cards';
import { isTimeDifferenceGreaterThanHours } from 'shared/utils/date';

import { HeaderProps } from 'src/components/Header/types';
import { useModal } from 'src/components/Modal/hooks';
import { getActiveSet } from 'src/services/storage/sets';
import { useAppContext } from 'src/services/store/context';

export function useAddToSetButton(props: HeaderProps) {
    const { navigation } = props;

    const [activeSet, setActiveSet] = useState<SetData | null>(null);

    const { activeCard } = useAppContext();

    const { openModal, closeModal, isModalOpen } = useModal();

    const addToSetHandler = useCallback(() => {
        const currentActiveSetPromise = getActiveSet();

        currentActiveSetPromise.then((currentActiveSet) => {
            openModal();

            if (currentActiveSet !== null) {
                const currentActiveSetUpdatedAt = new Date(
                    currentActiveSet.updatedAt ?? currentActiveSet.createdAt,
                );

                const nowDate = new Date();

                // openModal();

                // if (isTimeDifferenceGreaterThanHours(currentActiveSetUpdatedAt, nowDate, 1)) {
                //     openModal();
                // } else {
                //     setActiveSet(currentActiveSet);
                // }
            }

            // navigation.navigate('Set', { card: activeCard, activeSet });
        });
    }, [activeCard, navigation, activeSet]);

    const addToSetDialogAccepted = useCallback(() => {}, []);

    return { activeCard, addToSetHandler, isModalOpen, closeModal, addToSetDialogAccepted };
}
