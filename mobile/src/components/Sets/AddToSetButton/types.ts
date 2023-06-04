import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { CardData } from 'shared/types/cards';

export interface AddToSetButtonProps extends Pick<NativeStackHeaderProps, 'navigation'> {
    card: CardData;
}
