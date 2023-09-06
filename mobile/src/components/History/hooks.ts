import { useEffect, useMemo, useState } from 'react';

import { getHistory } from 'src/services/storage/history';
import { SetData } from 'shared/types/cards';

import { HistoryRecord, HistoryTab } from './types';

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

    useEffect(() => {
        const fetchHistory = async () => {
            const historyData = await getHistory();
            setHistory(historyData);
        };

        fetchHistory();
    }, []);

    return { activeHistory, switchTab, activeTab, tabsValues };
}
