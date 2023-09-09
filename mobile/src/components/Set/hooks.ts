import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { SetCardData, SetData } from 'shared/types/cards';

import {
    addCardToActiveSet,
    createNewActiveSet,
    deleteActiveSet,
    getActiveSet,
    removeCardFromActiveSet,
} from 'src/services/storage/sets';
import { useModal } from 'src/components/Modal/hooks';
import { selectCards, setHeaderTitle } from 'src/services/store';

import { SetProps } from './types';

type ModalComponentType = 'Card' | 'AddCard' | 'GenerateRandomSet';

// TODO: write tests on this hook
export function useSet(props: SetProps) {
    const { card, activeSet: activeSetParams, viewMode } = props;

    const dispatch = useDispatch();

    const cards = useSelector(selectCards);

    const [modalComponentType, setModalComponentType] = useState<ModalComponentType | undefined>();

    const [activeSet, setActiveSet] = useState<SetData | undefined>(activeSetParams ?? undefined);
    const [activeCard, setActiveCard] = useState<SetCardData | undefined>();

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
        if (activeSet === undefined) {
            loadActiveSet();
        }
    }, [card?.name, activeSet?.id]);

    useEffect(() => {
        const needsToUpdateHeaderTitle = viewMode && activeSet !== undefined;

        if (needsToUpdateHeaderTitle) {
            dispatch(setHeaderTitle(moment(activeSet.createdAt).format('DD.MM.YYYY HH:mm')));
        }

        return () => {
            dispatch(setHeaderTitle(null));
        };
    }, []);

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
