import { CardData, SetData } from 'shared/types/cards';

import { getStorageItem, setStorageItem } from '.';

const MAX_SETS_LENGTH = 10;

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
        return null;
    }

    return sets.find((set) => set.id === id) ?? null;
}

export async function setSet(set: SetData) {
    const sets = await getSets();

    const newSet = { ...set, updatedAt: new Date().toISOString() };

    if (sets === null) {
        return setStorageItem('sets', JSON.stringify([newSet]));
    }

    const existSetIndex = sets.findIndex((s) => s.id === set.id);

    if (existSetIndex >= 0) {
        const newSets = [...sets];
        newSets[existSetIndex] = newSet;

        return setStorageItem('sets', JSON.stringify(newSets));
    }

    // TODO: change setSet test after the MAX_SETS_LENGTH guard has been added
    if (sets.length >= MAX_SETS_LENGTH) {
        sets.pop();
    }

    return setStorageItem('sets', JSON.stringify([newSet, ...sets]));
}

export async function deleteSet(id: SetData['id']) {
    const sets = await getSets();

    if (sets === null) {
        return;
    }

    const newSets = sets.filter((set) => set.id !== id);

    return setStorageItem('sets', JSON.stringify(newSets));
}

async function getActiveSetId() {
    return await getStorageItem('activeSetId');
}

async function setActiveSetId(id: SetData['id']) {
    return await setStorageItem('activeSetId', id);
}

export async function getActiveSet() {
    const activeSetId = await getActiveSetId();

    if (activeSetId === null) {
        return null;
    }

    return await getSet(activeSetId);
}

export async function setActiveSet(newActiveSet: SetData) {
    const sets = await getSets();

    if (sets === null) {
        return;
    }

    const existSet = sets.find((set) => set.id === newActiveSet.id);
    if (!existSet) {
        return;
    }

    return await setActiveSetId(newActiveSet.id);
}

// TODO: write test on this service
export async function deleteActiveSet() {
    const activeSetId = await getActiveSetId();

    if (activeSetId === null) {
        return;
    }

    await setActiveSetId('');
}

// TODO: write test on this service
export async function createNewActiveSet(cards?: CardData[], randomSet?: boolean) {
    const nowDate = new Date();

    const newSet: SetData = {
        id: String(nowDate.getTime()),
        cards: cards !== undefined ? cards : [],
        createdAt: nowDate.toISOString(),
    };

    if (randomSet) {
        for (let card of newSet.cards) {
            card.direction = Math.random() > 0.5 ? 'normal' : 'reversed';
        }
    }

    await setSet(newSet);
    await setActiveSet(newSet);

    return newSet;
}

// TODO: write test on this service
export async function addCardToActiveSet(card: CardData) {
    const activeSet = await getActiveSet();

    if (activeSet === null) {
        return;
    }

    const isCardAlreadyInSet = activeSet.cards.some((c) => c.name === card.name);
    if (isCardAlreadyInSet) {
        return activeSet;
    }

    const newSet = {
        ...activeSet,
        cards: [...activeSet.cards, card],
    };

    await setSet(newSet);

    return newSet;
}

// TODO: write test on this service
export async function removeCardFromActiveSet(card: CardData) {
    const activeSet = await getActiveSet();

    if (activeSet === null) {
        return;
    }

    const newSet = {
        ...activeSet,
        cards: activeSet.cards.filter((c) => c.name !== card.name),
    };

    await setSet(newSet);

    return newSet;
}
