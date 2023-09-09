import { CardData, CardDescription, SetData } from 'shared/types/cards';

export type RootStackParamList = {
    CardsList: undefined;
    CardDetails: { card: CardData; direction?: CardDescription['direction'] };
    Set: { activeSet: SetData | null; card?: CardData; viewMode?: boolean } | undefined;
    History: undefined;
} & Record<string, object | undefined>;
