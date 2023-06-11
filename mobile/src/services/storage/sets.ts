import { SetData } from 'shared/types/cards';

import { getStorageItem, setStorageItem } from '.';

export async function getSets() {
    const sets = await getStorageItem('sets');

    if (sets === null) {
        return null;
    }

    return (await JSON.parse(sets)) as SetData[];
}

export async function getSet(id: SetData['id']) {
    const sets = await getSets();

    if (sets === null) {
        return;
    }

    return sets.find((set) => set.id === id);
}

export async function setSet(set: SetData) {
    const sets = await getSets();

    if (sets === null) {
        return setStorageItem('sets', JSON.stringify([set]));
    }

    const existSetIndex = sets.findIndex((s) => s.id === set.id);

    if (existSetIndex < 0) {
        const newSets = [...sets];
        newSets[existSetIndex] = set;

        return setStorageItem('sets', JSON.stringify(newSets));
    }

    return setStorageItem('sets', JSON.stringify([...sets, set]));
}
