import { useEffect, useMemo, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { useModal } from 'src/components/Modal/hooks';
import { getHistory } from 'src/services/storage/history';
import { CardData, SetData } from 'shared/types/cards';

import { HistoryRecord, HistoryTab } from './types';
import { RootStackParamList } from '../App/types';

const HISTORY_TABS: HistoryTab[] = [
    {
        id: 'cards',
        name: 'Карты',
        tabIndex: 0,
    },
    {
        id: 'sets',
        name: 'Расклады',
        tabIndex: 1,
    },
];

export function useHistory() {
    const [history, setHistory] = useState<(HistoryRecord | SetData)[]>([]);
    const [activeTab, setActiveTab] = useState<HistoryTab>(HISTORY_TABS[0]);

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [activeCard, setActiveCard] = useState<CardData | null>(null);

    const { openModal, closeModal, isModalOpen } = useModal();

    const tabsValues = HISTORY_TABS.map((tab) => tab.name);

    const switchTab = () => {
        const newTab = activeTab.tabIndex === 0 ? 1 : 0;
        setActiveTab(HISTORY_TABS[newTab]);
    };

    const activeHistory = useMemo(() => {
        return history.filter((historyRecord) => {
            if (activeTab.id === 'sets') {
                return 'cards' in historyRecord;
            }

            return !('cards' in historyRecord);
        });
    }, [activeTab.id, history]);

    const onSetClickHandler = (set: SetData) => {
        navigation.navigate('Set', { activeSet: set, viewMode: true });
    };

    const onCardClickHandler = (card: CardData) => {
        setActiveCard(card);
        openModal();
    };

    useEffect(() => {
        const fetchHistory = async () => {
            const historyData = await getHistory();
            setHistory(historyData);
        };

        fetchHistory();
    }, []);

    const onHistoryItemClickHandler = (historyItem: HistoryRecord | SetData) => {
        if ('cards' in historyItem) {
            return onSetClickHandler(historyItem);
        }

        return onCardClickHandler(historyItem.card);
    };

    return {
        activeHistory,
        switchTab,
        activeTab,
        tabsValues,
        onHistoryItemClickHandler,
        closeModal,
        isModalOpen,
        activeCard,
    };
}
