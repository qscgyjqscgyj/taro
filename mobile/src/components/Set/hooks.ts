import { useCallback, useEffect, useState } from 'react';

import { CardData, SetData } from 'shared/types/cards';

import {
    addCardToActiveSet,
    createNewActiveSet,
    deleteActiveSet,
    getActiveSet,
} from 'src/services/storage/sets';
import { useAppContext } from 'src/services/store/context';
import { useModal } from 'src/components/Modal/hooks';

import { SetProps } from './types';

type ModalComponentType = 'Card' | 'AddCard';

// TODO: write tests on this hook
export function useSet(props: SetProps) {
    const { params } = props.route;

    const cardParam = params?.card;

    const [modalComponentType, setModalComponentType] = useState<ModalComponentType | undefined>();

    const [activeSet, setActiveSet] = useState<SetData | undefined>(params?.activeSet ?? undefined);
    const [activeCard, setActiveCard] = useState<CardData | undefined>();

    const { cards } = useAppContext();

    const { openModal, closeModal, isModalOpen } = useModal();

    const addCardPressHandler = useCallback(() => {
        setModalComponentType('AddCard');
        openModal();
    }, []);

    const addToSetHandler = async (cardData: CardData) => {
        const currentActiveSet = await getActiveSet();

        const updatedActiveSet =
            currentActiveSet !== null
                ? await addCardToActiveSet(cardData)
                : await createNewActiveSet([cardData]);

        setActiveSet(updatedActiveSet);
        closeModal();
    };

    const onPressCardHandler = useCallback(
        (card: CardData) => {
            setActiveCard(card);
            setModalComponentType('Card');
            openModal();
        },
        [openModal],
    );

    const generateRandomSet = async () => {
        const randomCards = cards.sort(() => Math.random() - 0.5).slice(0, 5);
        const newActiveSet = await createNewActiveSet(randomCards);
        setActiveSet(newActiveSet);
    };

    const clearActiveSet = async () => {
        await deleteActiveSet();
        loadActiveSet();
    };

    const loadActiveSet = () => {
        const loadActiveSetAsync = async () => {
            const currentActiveSet = await getActiveSet();

            if (currentActiveSet !== null) {
                setActiveSet(currentActiveSet);
            } else {
                setActiveSet(undefined);
            }
        };

        loadActiveSetAsync();
    };

    useEffect(() => {
        loadActiveSet();
    }, [cardParam?.name, activeSet?.id]);

    return {
        activeSet,
        activeCard,
        onPressCardHandler,
        addCardPressHandler,
        addToSetHandler,
        clearActiveSet,
        generateRandomSet,
        closeModal,
        isModalOpen,
        modalComponentType,
    };
}
