import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { SetData } from 'shared/types/cards';

import { deleteSet, getActiveSet, getSets, setActiveSet, setSet } from '../sets';

AsyncStorageMock.setItem = jest.fn(() => Promise.resolve());

const TEST_SETS: SetData[] = [
    {
        id: '1',
        cards: [],
        createdAt: '2021-09-01T12:00:00.000Z',
    },
    {
        id: '2',
        cards: [],
        createdAt: '2021-09-01T12:00:00.000Z',
    },
];

describe('Have to get sets', () => {
    test('Return null if there are no sets', async () => {
        AsyncStorageMock.getItem = jest.fn(() => Promise.resolve(null));

        const sets = await getSets();

        expect(sets).toBeNull();
    });

    test('Return few sets', async () => {
        AsyncStorageMock.getItem = jest.fn(() => Promise.resolve(JSON.stringify(TEST_SETS)));

        const sets = await getSets();

        expect(sets).toBeTruthy();
        expect(sets).toHaveLength(2);
    });
});

const NEW_SET: SetData = {
    id: '3',
    cards: [],
    createdAt: '2021-09-01T12:00:00.000Z',
};

describe('Have to set set', () => {
    const setup = () => {
        const setItemMock = jest.fn(() => Promise.resolve());
        AsyncStorageMock.setItem = setItemMock;

        const mockDate = new Date();
        const mockDateISO = mockDate.toISOString();
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

        return { setItemMock, mockDateISO };
    };

    test.each([
        { defaultSets: null },
        { defaultSets: TEST_SETS },
        { defaultSets: [...TEST_SETS, NEW_SET] },
    ])('Set works with default sets: $defaultSets', async ({ defaultSets }) => {
        AsyncStorageMock.getItem = jest.fn(() =>
            Promise.resolve(defaultSets !== null ? JSON.stringify(defaultSets) : null),
        );

        const { setItemMock, mockDateISO } = setup();

        const sets = await getSets();

        if (defaultSets === null) {
            expect(sets).toBeNull();
        } else {
            expect(sets).toHaveLength(defaultSets.length);
        }

        await setSet(NEW_SET);

        const newSetExpect = { ...NEW_SET, updatedAt: mockDateISO };
        const existInDefaultSetsIndex =
            defaultSets !== null ? defaultSets.findIndex((s) => s.id === NEW_SET.id) : -1;
        const newSetsExpect =
            defaultSets !== null
                ? [
                      ...(existInDefaultSetsIndex === -1 ? [newSetExpect] : []),
                      ...defaultSets.map((set) => {
                          if (set.id === NEW_SET.id) {
                              return newSetExpect;
                          }

                          return set;
                      }),
                  ]
                : null;

        expect(setItemMock).toHaveBeenCalledTimes(1);
        expect(setItemMock).toHaveBeenCalledWith(
            'sets',
            defaultSets === null ? JSON.stringify([newSetExpect]) : JSON.stringify(newSetsExpect),
        );
    });
});

describe('Have to delete set', () => {
    test('Delete set correcty', async () => {
        AsyncStorageMock.getItem = jest.fn(() => Promise.resolve(JSON.stringify(TEST_SETS)));
        const setItemMock = jest.fn(() => Promise.resolve());
        AsyncStorageMock.setItem = setItemMock;

        await deleteSet(TEST_SETS[0].id);

        expect(setItemMock).toHaveBeenCalledTimes(1);
        expect(setItemMock).toHaveBeenCalledWith(
            'sets',
            JSON.stringify(TEST_SETS.filter((set) => set.id !== TEST_SETS[0].id)),
        );
    });
});

describe('Test get and set active set', () => {
    test('Get active set if there are no sets', async () => {
        AsyncStorageMock.getItem = jest.fn(() => Promise.resolve(null));

        const activeSet = await getActiveSet();

        expect(activeSet).toBeNull();
    });

    test('Get active set if there are sets', async () => {
        AsyncStorageMock.getItem = jest.fn((key: 'sets' | 'activeSetId' | string) => {
            switch (key) {
                case 'sets':
                    return Promise.resolve(JSON.stringify(TEST_SETS));
                case 'activeSetId':
                    return Promise.resolve(TEST_SETS[0].id);
                default:
                    return Promise.resolve(null);
            }
        });

        const activeSet = await getActiveSet();

        expect(activeSet?.id).toBe(TEST_SETS[0].id);
    });

    test('Set active set if passed set not in sets', async () => {
        AsyncStorageMock.getItem = jest.fn(() => Promise.resolve(JSON.stringify(TEST_SETS)));
        const setItemMock = jest.fn(() => Promise.resolve());
        AsyncStorageMock.setItem = setItemMock;

        await setActiveSet(NEW_SET);

        expect(setItemMock).toHaveBeenCalledTimes(0);
    });

    test('Set active set if passed set in sets', async () => {
        AsyncStorageMock.getItem = jest.fn(() => Promise.resolve(JSON.stringify(TEST_SETS)));
        const setItemMock = jest.fn(() => Promise.resolve());
        AsyncStorageMock.setItem = setItemMock;

        await setActiveSet(TEST_SETS[0]);

        expect(setItemMock).toHaveBeenCalledTimes(1);
        expect(setItemMock).toHaveBeenCalledWith('activeSetId', TEST_SETS[0].id);
    });
});
