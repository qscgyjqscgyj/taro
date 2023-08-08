import { useEffect, useState } from 'react';

import { getHistory } from 'src/services/storage/history';
import { SetData } from 'shared/types/cards';

import { HistoryRecord } from './types';

export function useHistory() {
    const [history, setHistory] = useState<(HistoryRecord | SetData)[]>([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const historyData = await getHistory();
            setHistory(historyData);
        };

        fetchHistory();
    }, []);

    return { history };
}
