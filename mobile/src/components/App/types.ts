import { ParamListBase } from '@react-navigation/native';
import { CardData } from 'shared/types/cards';

export interface RootStackParamList extends ParamListBase {
    CardsList: undefined;
    CardDetails: { card: CardData };
}
