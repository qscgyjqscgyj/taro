import { CardData, SetData } from 'shared/types/cards';
import { HistoryRecord } from 'src/components/History/types';

import { getSets } from './sets';
import { getStorageItem, setStorageItem } from '.';

const MAX_HISTORY_RECORDS = 10;

// TODO: write tests on this service
export async function getHistory() {
    const cardsRecordsData = await getStorageItem('history');
    const setsData = await getSets();

    const cardsRecords: HistoryRecord[] = cardsRecordsData ? JSON.parse(cardsRecordsData) : [];
    const sets = setsData ?? [];

    const history: (HistoryRecord | SetData)[] = [...cardsRecords, ...sets];
    return history.sort((a, b) => {
        const aDate = new Date(a.createdAt);
        const bDate = new Date(b.createdAt);

        return bDate.getTime() - aDate.getTime();
    });
}

// TODO: write tests on this service
export async function setHistoryRecord(card: CardData) {
    const nowDate = new Date();

    const historyData = await getStorageItem('history');
    const history: HistoryRecord[] = historyData ? JSON.parse(historyData) : [];

    const newRecord: HistoryRecord = {
        id: String(nowDate.getTime()),
        card: card,
        createdAt: nowDate.toISOString(),
    };

    const updatedHistory = [newRecord, ...history];

    if (updatedHistory.length > MAX_HISTORY_RECORDS) {
        updatedHistory.pop();
    }

    return await setStorageItem('history', JSON.stringify(updatedHistory));
}
