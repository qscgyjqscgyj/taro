import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CardData } from 'shared/types/cards';

export type CardProps = NativeStackScreenProps<{ card: CardData }>;
