import { CardData } from 'shared/types/cards';

export type RootStackParamList = {
    CardsList: undefined;
    CardDetails: { card: CardData };
    Set: { card: CardData } | undefined;
} & Record<string, object | undefined>;
