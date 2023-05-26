import { act, renderHook } from '@testing-library/react-hooks';

import { RemoteData } from 'shared/types/remoteData';
import { CardData } from 'shared/types/cards';

import { getCardsData } from 'src/services/cards';
import { useCards } from 'src/components/Cards/hooks';

import { useSearchInput } from '../hooks';

jest.mock('lodash', () => ({
    debounce: jest.fn((fn) => fn),
}));

jest.mock('src/services/cards');
const mockedGetCardsData = getCardsData as jest.MockedFunction<typeof getCardsData>;

test('useSearchInput calls getCardsData with correct search value', async () => {
    const mockedGetCardsDataResponse = {
        status: 'Success',
        data: [],
    } as RemoteData<CardData[]>;
    mockedGetCardsData.mockImplementation(() => {
        return Promise.resolve(mockedGetCardsDataResponse);
    });

    const { result: useCardsResult } = renderHook(() =>
        useCards({
            navigation: {
                navigate: jest.fn(),
                dispatch: jest.fn(),
                reset: jest.fn(),
                goBack: jest.fn(),
                isFocused: jest.fn(),
                canGoBack: jest.fn(),
                getId: jest.fn(),
                getState: jest.fn(),
                getParent: jest.fn(),
                setParams: jest.fn(),
                setOptions: jest.fn(),
                addListener: jest.fn(),
                removeListener: jest.fn(),
                replace: jest.fn(),
                push: jest.fn(),
                pop: jest.fn(),
                popToTop: jest.fn(),
            },
            route: {
                key: 'test',
                name: 'CardsList',
            },
        }),
    );

    const { result: useSearchInputResult } = renderHook(() =>
        useSearchInput({ onChange: useCardsResult.current.onSearchHandler }),
    );

    expect(mockedGetCardsData).toHaveBeenCalledWith('');

    let searchName = 'test';
    act(() => {
        useSearchInputResult.current.onChangeText(searchName);
    });
    expect(mockedGetCardsData).toHaveBeenCalledWith(searchName);

    searchName = '';
    act(() => useSearchInputResult.current.onChangeText(searchName));
    expect(mockedGetCardsData).toHaveBeenCalledWith(searchName);
});
