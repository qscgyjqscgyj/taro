import { useCallback, useEffect, useState } from 'react';

import { SetCardData, SetData } from 'shared/types/cards';

import {
    addCardToActiveSet,
    createNewActiveSet,
    deleteActiveSet,
    getActiveSet,
    removeCardFromActiveSet,
} from 'src/services/storage/sets';
import { useAppContext } from 'src/services/store/context';
import { useModal } from 'src/components/Modal/hooks';

import { SetProps } from './types';

type ModalComponentType = 'Card' | 'AddCard' | 'GenerateRandomSet';

// TODO: write tests on this hook
export function useSet(props: SetProps) {
    const { params } = props.route;

    const cardParam = params?.card;

    const [modalComponentType, setModalComponentType] = useState<ModalComponentType | undefined>();

    const [activeSet, setActiveSet] = useState<SetData | undefined>(params?.activeSet ?? undefined);
    const [activeCard, setActiveCard] = useState<SetCardData | undefined>();

    const { cards } = useAppContext();

    const { openModal, closeModal, isModalOpen } = useModal();

    const addCardPressHandler = useCallback(() => {
        setModalComponentType('AddCard');
        openModal();
    }, []);

    const addToSetHandler = async (cardData: SetCardData) => {
        const currentActiveSet = await getActiveSet();

        // TODO: show error message in the card already in set in the modal
        const isCardAlreadyInSet = currentActiveSet?.cards.some((c) => c.name === cardData.name);
        if (isCardAlreadyInSet) {
            closeModal();
            return;
        }

        const updatedActiveSet =
            currentActiveSet !== null
                ? await addCardToActiveSet(cardData)
                : await createNewActiveSet([cardData]);

        setActiveSet(updatedActiveSet);
        closeModal();
    };

    const onPressCardHandler = useCallback(
        (card: SetCardData) => {
            setActiveCard(card);
            setModalComponentType('Card');
            openModal();
        },
        [openModal],
    );

    const generateRandomSetModalOpen = async () => {
        setModalComponentType('GenerateRandomSet');
        openModal();
    };

    const generateRandomSet = async (cardsCount: number) => {
        const randomCards = cards.sort(() => Math.random() - 0.5).slice(0, cardsCount);

        const newActiveSet = await createNewActiveSet(randomCards, true);
        setActiveSet(newActiveSet);
        closeModal();
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

    const onCardDeletePressHandler = async (card: SetCardData) => {
        const updatedActiveSet = await removeCardFromActiveSet(card);
        setActiveSet(updatedActiveSet);
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
        onCardDeletePressHandler,
        clearActiveSet,
        generateRandomSetModalOpen,
        generateRandomSet,
        closeModal,
        isModalOpen,
        modalComponentType,
    };
}
