import { act, renderHook } from '@testing-library/react-hooks';

import { RemoteData } from 'shared/types/remoteData';
import { CardData } from 'shared/types/cards';

import { getCardsData } from 'src/services/cards';
import { useCardsFilter } from 'src/components/Cards/CardsFilter/hooks';

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

    const { result: useCardsFilterResult } = renderHook(() => useCardsFilter());

    const { result: useSearchInputResult } = renderHook(() =>
        useSearchInput({ onChange: useCardsFilterResult.current.onSearchHandler }),
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
