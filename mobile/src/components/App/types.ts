import { CardData, CardDescription, SetData } from 'shared/types/cards';

export type RootStackParamList = {
    CardsList: undefined;
    CardDetails: { card: CardData; direction?: CardDescription['direction'] };
    Set: { card: CardData; activeSet: SetData | null } | undefined;
    History: undefined;
} & Record<string, object | undefined>;
