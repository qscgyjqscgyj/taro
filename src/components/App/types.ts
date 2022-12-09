import { ParamListBase } from '@react-navigation/native';
import { CardData } from 'src/services/cards/types';

export interface RootStackParamList extends ParamListBase {
    CardsList: undefined;
    CardDetails: { card: CardData };
}
