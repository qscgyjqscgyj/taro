import { CardData, SetData } from 'shared/types/cards';

export type RootStackParamList = {
    CardsList: undefined;
    CardDetails: { card: CardData };
    Set: { card: CardData; activeSet: SetData | null } | undefined;
} & Record<string, object | undefined>;
