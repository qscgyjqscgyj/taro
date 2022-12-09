import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CardData } from 'src/services/cards/types';

export type CardProps = NativeStackScreenProps<{ card: CardData }>;
